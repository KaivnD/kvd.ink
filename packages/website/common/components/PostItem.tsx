import React from "react";
import {
  Typography,
  Box,
  Paper,
  withStyles,
  createStyles,
} from "@material-ui/core";
import { PostTagProp, PostTag } from "./PostTag";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface PostItemProp {
  title: string;
  img?: string;
  tags?: PostTagProp[];
  content: string;
  single: boolean;
  classes?: Partial<ClassNameMap<keyof typeof styles>>;
}

const styles = createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  cover: {
    width: "100%",
    maxWidth: "100%",
  },
});

const PostItem = withStyles(styles)((props: PostItemProp) => (
  <Paper square style={{ marginBottom: "2em" }}>
    <Box px={3} py={3}>
      <Typography gutterBottom variant="h5" component="h2">
        {props.title}
      </Typography>
      {props.tags?.map((tag, i) => (
        <PostTag {...tag} key={i} />
      ))}
    </Box>
    {props.img && <img src={props.img} className={props.classes?.cover} />}
    <Box px={3} py={3}>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.content}
      </Typography>
    </Box>
  </Paper>
));

export { PostItem };
