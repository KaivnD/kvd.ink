import React from "react";
import {
  withStyles,
  createStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface HeroSlideProp {
  img: string;
  classes?: Partial<ClassNameMap<keyof typeof styles>>;
}

const styles = createStyles({
  root: {
    borderRadius: 0,
    position: "relative",
    height: "260px",
    display: "inline-block",
    width: "100%",
  },
});

const HeroSlide = withStyles(styles)((props: HeroSlideProp) => (
  <Card className={props.classes?.root}>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="260"
      image={props.img}
      style={{ position: "absolute" }}
      title="Contemplative Reptile"
    />
    <CardContent
      style={{
        position: "absolute",
        bottom: 0,
        background: "#efeeee73",
        width: "100%",
      }}
    >
      <Typography gutterBottom variant="h5" component="h2">
        Lizard
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Lizards are a widespread group of squamate reptiles
      </Typography>
    </CardContent>
  </Card>
));

export { HeroSlide };
