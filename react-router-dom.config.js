export default defineConfig({
  plugins: [
    //...

    // this is also the default config
    reactRouterPlugin({
      async: true,
      pageDir: 'src/pages',
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      output: './src/routes.tsx'
    })
  ]
});
