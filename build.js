({
    baseUrl: 'scripts/',
    dir: './scripts.min',
    mainConfigFile: 'scripts/main.js',

    removeCombined: true,
    findNestedDependencies: true,
    optimize: 'none',
    preserveLicenseComments: false,

    modules: [
        {
            name: 'main',
            exclude: ['zepto-custom']
        }
    ]
})
