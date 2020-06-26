/** @jsx jsx */
import { Interpolation, css, jsx } from "@emotion/core";

const squareStyle = css`
  display: inline-flex;
  position: relative;
`;

const innerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
`;

interface ResponsiveSquareProps {
  children: React.ReactNode;
  width?: string;
  innerCss?: Interpolation;
}

function ResponsiveSquare({
  children,
  width = "100%",
  innerCss = css``,
}: ResponsiveSquareProps) {
  return (
    <div
      css={[
        squareStyle,
        css`
          width: ${width};
          padding-top: ${width};
          /* TODO: mobile 50% */
        `,
      ]}
    >
      <div css={[innerStyle, innerCss]}>{children}</div>
    </div>
  );
}

export default ResponsiveSquare;
