import styled from "@emotion/styled";
// eslint-disable-next-line no-empty-pattern
export const PhotoBlock = styled("div")(({}) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  "& img": {
    width: "40%",
    height: "auto",
  },
}));
