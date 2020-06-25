import { withA11y } from "@storybook/addon-a11y";
import { setConsoleOptions, withConsole } from "@storybook/addon-console";

import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react";

import withGlobalStyle from "./decorators/withGlobalStyle";
import withThemeProvider from "./decorators/withThemeProvider";

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withGlobalStyle);
addDecorator(withThemeProvider);
