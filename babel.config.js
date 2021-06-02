module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          "alias": {
            "actions": "./actions",
            "assets": "./assets",
            "components": "./components",
            "app-config": "./config",
            "layout": "./layout",
            "AppNavigator": "./AppNavigator",
            "parts": "./parts",
            "reducers": "./reducers",
            "screens": "./screens",
            "services": "./services",
            "store": "./store",
            "styles": "./styles",
            "utils": './utils'
          }
        }
      ]
    ]
  };
};
