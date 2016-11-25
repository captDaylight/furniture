module.exports = {
    "extends": "airbnb",
		"globals": {
			"window": true,
			"document": true
		},
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
		"rules": {
			"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
			"no-tabs": 0,
			"react/jsx-indent": [2, 'tab'],
			"react/jsx-indent-props": [2, 'tab'],
			"indent": ["error", "tab"]
		}
};
