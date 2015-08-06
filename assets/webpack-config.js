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
        modulesDirectories:['node_modules']
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js',Infinity)
    ],
    externals:{
        'jquery':'$'
    }
};