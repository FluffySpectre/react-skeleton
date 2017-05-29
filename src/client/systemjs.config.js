(function(global) {
    System.config({
        packages: {
            'start': { main: './index.js' }
        },
        map: {
            'react': 'lib:/react.js',
            'react-dom': 'lib:/react-dom.js',
            'react-router': 'lib:/ReactRouter.js',
            'jquery': 'lib:/jquery.js',
            'start': '/app'
        },
        paths: {
            'lib:': '/assets/js/lib'
        }
    });
})(this);