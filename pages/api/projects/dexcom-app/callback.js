import axios from 'axios';

export default async function handler(req, res) {
  const { code, state } = req.query;

  if (!state || !code) {
    return res.status(400).send('Invalid request');
  }

  // check state

  try {
    // Exchange code for token
    const tokenUrl = `${process.env.API_BASE_URL}/v2/oauth2/token`;
    const response = await axios.post(tokenUrl, {
      client_secret: process.env.DEXCOM_CLIENT_SECRET,
      client_id: process.env.DEXCOM_CLIENT_ID,
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.REDIRECT_URI,
    });

    const { access_token, refresh_token, expires_in } = response.data;
    // Store tokens and expiry in session or database

    console.log(access_token);

    res.redirect(`${process.env.FINAL_REDIRECT_URI}?accessToken=${tokens.accessToken}&refreshToken=${tokens.refreshToken}`);
    // Call the get-tokens endpoint
    try {
      //const tokenResponse = await axios.get(`${process.env.APP_BASE_URL}/projects/dexcom-app/get-tokens?state=${state}`);
      //const tokens = tokenResponse.data;
      // Redirect to a frontend page with the tokens or handle as needed

      
      
    } catch (error) {
      console.error('Error retrieving tokens', error);
      res.status(500).send('Internal Server Error');
    }
  } catch (error) {
    console.error('Error during token exchange', error);
    res.status(500).send('Internal Server Error');
  }
}