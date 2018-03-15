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
            'loadPaths': ['**'],  // e.g. background-image: resolve('any-image.png');
            'relative':  true
        },
        // 'postcss-sprites': {
        //     'stylesheetPath': 'src/assets/styles',
        //     'spritePath': 'src/assets/images/sprites2/', // e.g background: resolve('../images/sprites/asset31.png') no-repeat 0 0;
        //     'basePath': 'src/assets/images/sprites/'
        // },
        'cssnano': {
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }
    }
};