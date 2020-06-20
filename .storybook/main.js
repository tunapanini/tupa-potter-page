module.exports = {
  stories: ["../src/**/*.stories.{js,ts,jsx,tsx}"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register",
    "addon-redux/register",
  ],
};
