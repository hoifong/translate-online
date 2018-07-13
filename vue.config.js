module.exports = {
    // 基本路径
    baseUrl: "/",
    outputDir: "./dist",
    devServer: {
        proxy:{
            '/api':{
                target: 'http://api.fanyi.baidu.com/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}