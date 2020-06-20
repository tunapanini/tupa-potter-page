import { withA11y } from "@storybook/addon-a11y";
import { setConsoleOptions, withConsole } from "@storybook/addon-console";

import { withKnobs } from "@storybook/addon-knobs";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addParameters } from "@storybook/client-api";
import { addDecorator } from "@storybook/react";
setConsoleOptions({
  panelExclude: [],
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
});
