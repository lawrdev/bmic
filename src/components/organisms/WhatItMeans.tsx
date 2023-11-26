import { Box, Heading, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import Container from "../atoms/Container";
import { useColor } from "../../hooks/useColor";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const resultImgs = [
  {
    img: "https://res.cloudinary.com/dqveipmsp/image/upload/v1701036414/women_desktop_oddk7l.webp",
    label: "female",
  },
  {
    img: "https://res.cloudinary.com/dqveipmsp/image/upload/v1701036415/man_desktop_ucelne.webp",
    label: "male",
  },
];

const WhatItMeans = () => {
  const { bg, bgGray, color100, color200 } = useColor();

  return (
    <Box py={"72px"} bg={bgGray}>
      <Container>
        <Heading
          as={"h1"}
          mb={"26px"}
          textAlign={"center"}
          color={color200}
          fontFamily={"heading"}
          fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
          letterSpacing={".2rem"}
        >
          CHECK YOUR RESULTS
        </Heading>

        <Box maxW={"700px"} mx={"auto"} position={"relative"}>
          <Swiper
            className="__swiper_container"
            navigation={{
              nextEl: "#swiperNextEl3",
              prevEl: "#swiperPrevEl3",
            }}
            modules={[Navigation]}
            breakpoints={{
              0: {
                width: 320,
                slidesPerView: 1,
              },
              390: {
                width: 360,
                slidesPerView: 1,
              },
              490: {
                width: 460,
                slidesPerView: 1,
              },
              590: {
                width: 560,
                slidesPerView: 1,
              },
              // when window width is >= 640px
              640: {
                width: 610,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 700,
                slidesPerView: 1,
              },
            }}
          >
            {resultImgs.map((item, index) => (
              <SwiperSlide key={index}>
                <Box bg={"white"} position={"relative"}>
                  <Image
                    width={"100%"}
                    height={"327px"}
                    src={item.img}
                    alt="result image"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box
            display={{ base: "none", lg: "block" }}
            position={"absolute"}
            zIndex={10}
            left={0}
            top={"50%"}
            transform={"translateY(-50%) translateX(-100%)"}
            mr={0}
          >
            <IconButton
              id={"swiperPrevEl3"}
              icon={<BsChevronCompactLeft />}
              aria-label="swipe left"
              variant={"unstyled"}
              fontSize={"6xl"}
              color={color100}
            />
          </Box>

          <Box
            display={{ base: "none", lg: "block" }}
            position={"absolute"}
            zIndex={10}
            right={0}
            top={"50%"}
            transform={"translateY(-50%) translateX(100%)"}
            ml={0}
          >
            <IconButton
              id={"swiperNextEl3"}
              icon={<BsChevronCompactRight />}
              aria-label="swipe right"
              variant={"unstyled"}
              fontSize={"6xl"}
              color={color100}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatItMeans;
