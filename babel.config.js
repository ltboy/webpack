module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "modules": false   //tree shaking 需要配置
            }
        ]
    ],
    "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime",
    ]
}