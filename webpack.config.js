const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");
const dependencies = packageJson.dependencies;

module.exports = {
  output: {
    uniqueName: "mfe1",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
    },
    alias: {},
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: "remoteEntry.js",
      library: { type: "module" },
      exposes: {
        "./Mfe1Module": "./src/app/app.module.ts",
      },
      remotes: {
        shell: "http://localhost:4200/remoteEntry.js",
      },
      shared: {
        "@ngrx/store": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@ngrx/store"],
        },
        "@ngrx/effects": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@ngrx/effects"],
        },
        "@ngrx/store-devtools": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@ngrx/store-devtools"],
        },
        rxjs: {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["rxjs"],
        },
        "@angular/core": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@angular/core"],
        },
        "@angular/common": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@angular/common"],
        },
        "@angular/router": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@angular/router"],
        },
        "@angular/forms": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@angular/forms"],
        },
        "@angular/common/http": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@angular/common/http"],
        },
      },
    }),
  ],
};
