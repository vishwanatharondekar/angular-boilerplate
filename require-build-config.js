{
    "baseUrl": "app",
    "dir": "app/built",
    "include": "main.js",
    "optimize" : "uglify2",
    "skipDirOptimize": true,
    "uglify": {
        "toplevel": true,
        "ascii_only": true,
        "beautify": true,
        "max_line_length": 1000,
        "defines": {
            "DEBUG": [
                "name",
                "false"
            ]
        },
        "no_mangle": true
    },
    "uglify2": {
        "output": {
            "beautify": false
        },
        "compress": {
            "sequences": true,
            "join_vars": true,
            "if_return": true,
            "properties": true,
            "conditionals": true,
            "comparisons": true,
            "evaluate": true,
            "booleans": true,
            "loops": true,
            "drop_debugger": true,
            "dead_code": true
        },
        "warnings": true,
        "mangle": false
    },
    "closure": {
        "CompilerOptions": {},
        "CompilationLevel": "SIMPLE_OPTIMIZATIONS",
        "loggingLevel": "WARNING"
    },
    "skipModuleInsertion": false,
    "inlineText": true,
    "paths": {
        "angular": "bower_components/angular/angular.min",
        "uiRouter" : "bower_components/angular-ui-router/release/angular-ui-router.min",
        "ocLazyLoad": "vendor/ocLazyLoad",
        "ocLazyLoad-uiRouterDecorator": "vendor/ocLazyLoad-uiRouterDecorator",
        "app": "app",
        "angular-accordion" : "vendor/angular-bootstrap-accordion/ui-bootstrap-custom-tpls-0.10.0.min",
        "angular-carousel" : "vendor/angular_carousel/angular-carousel",
        "carousel" : "bower_components/angular-ui-bootstrap-from-git/src/carousel/carousel",
        "modal" : "bower_components/angular-ui-bootstrap-from-git/src/modal/modal",
        "transition" : "bower_components/angular-ui-bootstrap-from-git/src/transition/transition",
        "css" : "bower_components/require-css/css.min",
        "text" : "bower_components/requirejs-text/text",
        "css-builder" : "bower_components/require-css/css-builder",
        "normalize" : "bower_components/require-css/normalize",
        "hmac-sha1" :  "empty:",
        "enc-base64" :"empty:"

    },
    "shim": {
       "angular": {
           "exports" : "angular"
       },
       "ngRoute": ["angular"],
       "uiRouter" : ["angular"],
       "animate" : ["angular"],
       "ocLazyLoad" : ["angular"],
       "ocLazyLoad-uiRouterDecorator" : ["ocLazyLoad"],
       "angular-accordion" : ["angular", "vendor/angular-bootstrap-accordion/ui-bootstrap-custom-0.10.0.min"],
       "carousel" : ["angular", "transition"],
       "modal" : ["angular", "transition"],
       "app": []
    },
    "modules" : [
        {
            "name" : "app",
            "include" : ["text", "css"]
        },
        {
            "name" : "custom-directives/custom-validation/custom-validation",
            "include" : []
        },
        {
            "name" : "custom-directives/ajax-loader/ajax-loader",
            "include" : []
        },
        {
            "name" : "modules/productDetails/productDetails",
            "include" : [],
            "exclude" : ["app"]
        }
    ]
}
