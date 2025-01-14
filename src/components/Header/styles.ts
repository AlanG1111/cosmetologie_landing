import styled from "@emotion/styled";
// eslint-disable-next-line no-empty-pattern
export const TelLink = styled("a")(({}) => ({
  textDecoration: "none",
  fontSize: "0.8rem",
  color: "var(--main-text-color)",
  textAlign: "center",
  padding: "10px",
  borderRadius: "10px",
  alignSelf: "center",
  "&:hover": {
    backgroundColor: "var(--active-color)",
    color: "#fff",
  },
  transitionProperty: "background-color, color, border-color, box-shadow",
  transitionDuration: "0.2s",
  transitionTimingFunction: "ease-in-out",
}));
