const path = require('path');

module.exports = {
    // Your other webpack configuration settings...
    resolve: {
        fallback: {
            util: require.resolve('util/'),
            fs: false, // If you don't need this module, set it to false
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
            timers: require.resolve('timers-browserify'),
            zlib: require.resolve('browserify-zlib'),
            process: require.resolve('process/browser'),
            assert: require.resolve('assert/'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            url: require.resolve('url/'),
            querystring: require.resolve('querystring-es3'),
            crypto: require.resolve('crypto-browserify'),
            dns: require.resolve('dns-then'),
            net: false, // Set to false if not needed
            tls: false, // Set to false if not needed
        }
    }
};
