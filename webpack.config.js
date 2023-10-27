const path = require("path")
const HtmlWebBackPluign = require('html-webpack-plugin')
module.exports = {
  mode:"development",
  entry :{
  bundle:  path.resolve(__dirname,"src/index.js")
  },
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[name].[contenthash].js",
    clean :true,
    assetModuleFilename:"[name][ext]"
  },
  devServer:{
    static:{
    directory:path.resolve(__dirname,"src"),
    },
    port :3000,
    open :true,
    hot:true,
    compress:true,
    historyApiFallback:true
  },
  module:{
    rules:[
      {
        test:/\.scss$/,
        use :["style-loader",'css-loader',"sass-loader"]
      },
      {
        test:/\.(png|jpg|svg|jpeg)$/i,
        type :'asset/resource'
      }
    ]
  },
  plugins:[
    new HtmlWebBackPluign({
      title:"hello from webpack",
      filename:"index.html",
      template:"src/template.html/"

    })
  ]
};