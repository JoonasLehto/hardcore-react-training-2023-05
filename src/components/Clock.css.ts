import { style } from "@vanilla-extract/css";

export const clock = style({
  marginBlock: "1em",
  border: "3px solid rgb(0 0 0)",
  borderRadius: "10px",
  padding: "1em"
});

export const nightTime = style({
  backgroundColor: "rgb(0 0 0)",
  color: "rgb(255 255 255)"
});
