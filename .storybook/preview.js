import '../src/index.css'; //👈 The app's CSS file goes here
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
// };
