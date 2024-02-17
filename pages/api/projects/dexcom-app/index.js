import crypto from 'crypto';

export default function handler(req, res) {
  const state = crypto.randomBytes(16).toString('hex');
  // Store state in session or database
  const dexcomAuthUrl = `${process.env.API_BASE_URL}/v2/oauth2/login?client_id=${process.env.DEXCOM_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}&response_type=code&scope=offline_access&state=${state}`;
  res.redirect(dexcomAuthUrl);
}