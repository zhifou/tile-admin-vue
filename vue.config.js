
module.exports = {
    chainWebpack: config => {
        // 防止多页面打包卡顿
        config => config.plugins.delete('named-chunks');
        return config;
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    assetsDir: './static',
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        }
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        proxy: {
            '/data': {
                target: process.env.PROXY_HOST ? `${process.env.PROXY_HOST}/data` : 'http://localhost:8080/data',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/data': ''
                }
            }
        }
    }
};
