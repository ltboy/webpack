module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "modules": false   //tree shaking 需要配置
            },
        ],
        "@babel/preset-typescript",
    ],
    "plugins": [
        "@babel/plugin-syntax-dynamic-import",
    ]
}
