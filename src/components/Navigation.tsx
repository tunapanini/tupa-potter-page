/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { NavLink } from "react-router-dom";

import { Theme } from "styles/themes";

const styles = {
  navigation: css`
    display: flex;
  `,
  link: (theme: Theme) => css`
    margin: 0 12px;
    padding: 8px 0;
    color: ${theme.colors.primary[0]};
  `,
};

const Navigation = () => {
  const links = [
    {
      label: "Sorting Hat",
      to: "/sorting-hat",
    },
    {
      label: "Houses",
      to: "/houses",
    },
  ];

  return (
    <ul css={styles.navigation}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink css={styles.link} to={link.to}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
