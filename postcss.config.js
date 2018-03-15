module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: [
                "> 1%",
                "last 5 versions",
                "Firefox ESR",
                "not ie < 10"
            ]
        },
        'postcss-assets': {
            'loadPaths': ['**']  // background-image: resolve('any-image.png');
        },
        'cssnano': {
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }
    }
};