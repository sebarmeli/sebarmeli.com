module.exports = {
  plugins: [
    'postcss-preset-env',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                './pages/**/*.{js,jsx,ts,tsx}',
                './src/**/*.{js,jsx,ts,tsx}',
              ],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: {
                standard: ['html', 'body'],
                deep: [],
                greedy: [/^pp-/, /^px-/, /^blog-/, /^m-/, /^col-/, /^row/, /^container/],
              },
            },
          ],
          [
            'cssnano',
            {
              preset: ['default', {
                discardComments: {
                  removeAll: true,
                },
              }],
            },
          ],
        ]
      : []),
  ],
};
