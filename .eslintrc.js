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
			"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
		}
};