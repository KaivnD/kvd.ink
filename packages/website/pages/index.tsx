import React, { FC } from "react";
import {
  Card,
  Container,
  Typography,
  CardMedia,
  Button,
  CardContent,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import dynamic from "next/dynamic";
import { Settings } from "react-slick";

const Slider = dynamic(import("react-slick"), {
  ssr: false,
});

const CustomSlide: FC<{ img: string }> = (props) => {
  const { img, ...ps } = props;
  //@ts-ignore
  ps.style = {
    //@ts-ignore
    ...ps.style,
    borderRadius: 0,
    position: "relative",
    height: "260px",
  };
  return (
    <Card {...ps}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="260"
        image={img}
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
  );
};

export default function Index() {
  const slideSettings: Settings = {
    dots: true,
    infinite: false,
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
          <CustomSlide img={item.img} key={i} />
        ))}
      </Slider>
      <Container maxWidth="sm">
        <Box my={4}></Box>
      </Container>
    </div>
  );
}
