import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces any existing Sass rules with given rules
          {
            test: /\.css$/i,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader"
              }
            ]
          },
          {
            test: /\.scss$/i,
            use: [
              {loader: "style-loader"},
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: {
                    mode: "local",
                  },
                },
              },
              {
                loader: "sass-loader",
                options: { implementation: require.resolve("node-sass") }
              },
            ],
          },
        ]
      }
    }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
