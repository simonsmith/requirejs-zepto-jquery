require.config({
    baseUrl: 'scripts',
    paths: {
        jquery:         'lib/jquery',
        zepto:          'lib/zepto',
        'zepto-custom': 'lib/zepto-custom'
    },
    map: {
        '*': {
            'zepto': 'zepto-custom'
        },
        'zepto-custom': {
            'zepto': 'zepto'
        }
    },
    shim: {
        zepto: {
            exports: 'Zepto'
        }
    }
});

require(['zepto', 'modules/moduleA', 'modules/moduleB'], function($, moduleA, moduleB) {
    $('body')
        .prepend(moduleA.html)
        .prepend(moduleB.html);

    var lib;
    if (window.jQuery) {
        lib = 'jQuery';
    }
    if (window.Zepto) {
        lib = 'Zepto';
    }

    $('body').append('<p>Using: <code>' + lib + '</code></p>')
});
