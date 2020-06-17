import React from "react";
import { withStyles, createStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

export interface PostTagProp {
  name: string;
  color: string;
  classes?: Partial<ClassNameMap<keyof typeof styles>>;
}

const styles = createStyles({
  root: {
    padding: ".3em .5em",
    borderRadius: ".3em",
    textDecoration: "none",
    color: "white",
  },
});

const PostTag = withStyles(styles)((props: PostTagProp) => (
  <a
    href="#"
    style={{
      background: props.color,
    }}
    className={props.classes?.root}
  >
    {props.name}
  </a>
));

export { PostTag };
