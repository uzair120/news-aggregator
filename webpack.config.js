module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    })
  ],
  resolve: {
    // ...
    // add the fallback setting below
    fallback: {
      fs: false,
      os: false,
      path: false
    }
    // ...
  }
};
