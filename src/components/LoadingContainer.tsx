/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { ReactNode } from "react";

import { rotating } from "styles/common";

interface LoadingContainerProps {
  isLoading: boolean;
  children: ReactNode;
  minHeight?: string;
}

function LoadingContainer({
  isLoading,
  children,
  minHeight,
  ...props
}: LoadingContainerProps) {
  const wrapperStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div css={wrapperStyle} {...props}>
      {isLoading ? <AutorenewIcon css={rotating} fontSize="large" /> : children}
    </div>
  );
}

export default LoadingContainer;
