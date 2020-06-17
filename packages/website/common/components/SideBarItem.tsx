import React, { FC } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

interface SideBarItemProp {
  title: string;
  content: string;
}

const SideBarItem: FC<SideBarItemProp> = (props) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {props.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.content}
      </Typography>
    </CardContent>
  </Card>
);

export { SideBarItem };
