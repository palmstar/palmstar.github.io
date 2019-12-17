// https://github.com/vuejs/eslint-plugin-vue
// https://eslint.org/docs/rules/
module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "env" : {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": true
    },
    "rules": {
        // "no-process-env": "error",
        "camelcase": "error",
        "comma-dangle": [
            "error",
            "never"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "func-names": [
            "error",
            "always"
        ],
        "func-style": [
            "error",
            "expression"
        ],
        "implicit-arrow-linebreak": [
            "error", "beside"],
        "new-parens": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-nested-ternary": "error",
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [
            "error",
            {
                "minProperties": 1
            }
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "one-var": [
            "error",
            {
                var: "always",
                let: "always",
                const: "never"
            }
        ],
        "one-var-declaration-per-line": [
            "error",
            "always"
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": false
            }
        ],
        "semi-style": [
            "error",
            "last"
        ],
        "space-before-blocks": "error",
        "sort-vars": [
            "error",
            {
                "ignoreCase": true
            }
        ],
        "switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "arrow-body-style": [
            "error",
            "always"
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "no-confusing-arrow": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "no-restricted-globals": [
            "error",
            "event",
            "fdescribe"
        ],
        "no-catch-shadow": "error",
        "no-use-before-define": "error",
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "brace-style": [
            "error",
            "stroustrup"
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "default-case": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "no-alert": "error",
        "no-else-return": [
            "error",
            {
                allowElseIf: true
            }
        ],
        "no-empty-function": "error",
        "no-eval": "error",
        "no-floating-decimal": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "yoda": "error",
        "curly": "error",
        "no-extra-parens": "error",
        "no-mixed-spaces-and-tabs": "error",
        "quotes": [
            "error", "single"
        ],
        "vue/html-indent": [
            "error",
            4,
            {
                "attribute": 1,
            }
        ],
        "vue/html-self-closing": [
            "error", {
                "html": {
                    "void": "any",
                    "normal": "any",
                    "component": "any"
                },
                "svg": "any",
                "math": "always"
            }
        ],
        "vue/name-property-casing": [
            "error",
            "kebab-case"
        ],
        "vue/max-attributes-per-line": [
            2,
            {
                "singleline": 1,
                "multiline": {
                    "max": 1,
                    "allowFirstLine": false
                }
            }
        ]
    }
}
