/**
 * Created by YU on 2015/8/4.
 */

var webpack = require('webpack');

module.exports = {
    watch: true,
    output:{
        filename:'[name].js'
    },
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
        new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js',Infinity)
    ],
    externals:{
        'jquery':'$'
    }
};