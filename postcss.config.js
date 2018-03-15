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
        'cssnano': {
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }
    }
};