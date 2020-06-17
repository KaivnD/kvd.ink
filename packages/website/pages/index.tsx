import React, { FC } from "react";
import {
  Card,
  Container,
  Typography,
  CardMedia,
  Button,
  Divider,
  Grid,
  CardContent,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import dynamic from "next/dynamic";
import { Settings } from "react-slick";
import { PostItem } from "../common/components/PostItem";
import { SideBarItem } from "../common/components/SideBarItem";
import { HeroSlide } from "../common/components/HeroSlide";

const Slider = dynamic(import("react-slick"), {
  ssr: false,
});

export default function Index() {
  const slideSettings: Settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slides = [
    {
      img: "https://picsum.photos/id/1000/600/300",
    },
    {
      img: "https://picsum.photos/id/1018/600/300",
    },
    {
      img: "https://picsum.photos/id/1044/600/300",
    },
    {
      img: "https://picsum.photos/id/1041/600/300",
    },
  ];
  return (
    <div>
      <Box style={{ margin: "6em auto" }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Kv.D
        </Typography>
        <Typography
          variant="caption"
          component="h1"
          align="center"
          gutterBottom
        >
          一句剪短的介绍
        </Typography>
      </Box>

      <Slider {...slideSettings}>
        {slides.map((item, i) => (
          <HeroSlide img={item.img} key={i} />
        ))}
      </Slider>

      <Container maxWidth="lg">
        <Grid container style={{ marginTop: "6em" }} spacing={3}>
          <Grid item xs={12} md={8}>
            <PostItem
              title="My first post"
              img="https://picsum.photos/id/1042/600/300"
              content="lorem"
              single={false}
              tags={[{ name: "Processing", color: "red" }]}
            />
            <PostItem title="My first post" content="lorem" single={false} />
            <PostItem
              title="My first post"
              img="https://picsum.photos/id/1045/600/300"
              content="lorem"
              single={false}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SideBarItem title="Search" content="" />
          </Grid>
        </Grid>
      </Container>
      <Box style={{ margin: "2em auto" }}>
        <Divider />
        <Typography variant="body1" component="h1" align="center" gutterBottom>
          Footer
        </Typography>
      </Box>
    </div>
  );
}
