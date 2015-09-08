/**
 * Created by YU on 2015/8/4.
 */

var webpack = require('webpack');

module.exports = {
    watch: true,
    output:{
        path:__dirname + '/bundle/js/',
        publicPath:'/demo-with-webpack/assets/bundle/js/',//配置chunkFile加载地址的,这里要写服务器路径
        filename:'[name].js',
        chunkFilename:'[name].chunk.js'
    },
    cache:true,
    module:{
        loaders:[
            {test:/\.less$/,loader:"style!css!less"},//less加载
            {test:/\.json$/,loader:'json'}//加载json对象
        ]
    },
    resolve:{
        root:[__dirname + '/js/',__dirname + '/dep/'],
        extensions:['.js','.less',''],
        modulesDirectories:['node_modules'],
        alias:{
            'printer':'jquery.PrintArea.js',
            'echarts$':'echarts/echarts.js',
            'echarts':'echarts/src',
            'zrender$':'zrender/src/zrender.js',
            'zrender':'zrender/src'
        }
    },
    plugins:[
        //new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js',Infinity)
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename:'vendor.js',
            minChunks:/*4*/Infinity//Infinity 代表不进行合并，主要是开发的时候能用上，线上版本的时候 最好写成一个数字比如3，当出现3次的时候将打包进入vendor中
        })
    ],
    externals:{
        'jquery':'$'
    }
};