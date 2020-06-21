import React from "react";

import LoadingContainer from "components/LoadingContainer";

export default {
  title: "components/LoadingContainer",
  component: LoadingContainer,
};

export const Default = () => (
  <LoadingContainer isLoading={false}>
    isLoading: False. This is children.
  </LoadingContainer>
);

export const IsLoading = () => (
  <LoadingContainer isLoading={true}>
    isLoading: False. This is children.
  </LoadingContainer>
);
