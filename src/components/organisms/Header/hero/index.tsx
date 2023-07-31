import React from "react";
import {
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  LightMode,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import { useTrail, useSpring, animated, config } from "@react-spring/web";

import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

const heroData = [
  {
    img: "https://res.cloudinary.com/dqveipmsp/image/upload/v1690313852/bmi/h1-img-slider-1_lctjyz.jpg",
    h1: "THE HEALTHY LIFE",
    h2: "PERFECT SHAPE",
  },
  {
    img: "https://res.cloudinary.com/dqveipmsp/image/upload/v1690313852/bmi/h1-img-slider-3_c2nlkv.jpg",
    h1: "THE HEALTHY LIFE",
    h2: "POWERFUL BUILD",
  },
];

export default function HeaderHero() {
  const [trails, api] = useTrail(
    5,
    () => ({
      from: { x: 600, opacity: 0 },
      to: { x: 0, opacity: 1 },
      config: { ...config.stiff },
    }),
    []
  );
  const [springs, springsApi] = useSpring(
    () => ({
      from: { x: -600, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: 150,
      config: { ...config.stiff },
    }),
    []
  );

  return (
    <Box
      height={{ base: "80vh", lg: "100vh" }}
      w={"100vw"}
      position={"relative"}
      zIndex={1}
    >
      <Swiper
        direction={"vertical"}
        spaceBetween={0}
        speed={750}
        effect={"creative"}
        creativeEffect={{
          next: {
            shadow: true,
            translate: [0, "2%", -1],
          },
          prev: {
            translate: [0, "-100%", 0],
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: true,
        }}
        navigation={{
          nextEl: "#swiperNextEl",
          prevEl: "#swiperPrevEl",
        }}
        loop={true}
        modules={[Autoplay, Navigation, EffectCreative]}
        onSlideChangeTransitionEnd={() => {
          api.start({
            from: { x: 1200, opacity: 0 },
            to: { x: 0, opacity: 1 },

            config: { ...config.stiff },
          });
          springsApi.start({
            from: { x: -600, opacity: 0 },
            to: { x: 0, opacity: 1 },
            delay: 150,
            config: { ...config.stiff },
          });
        }}
        onSlideChangeTransitionStart={() => {
          api.start({
            from: { x: 0, opacity: 1 },
            to: { x: 1200, opacity: 0 },

            config: { ...config.stiff },
          });
          springsApi.start({
            from: { x: 0, opacity: 1 },
            to: { x: -600, opacity: 0 },
            delay: 150,
            config: { ...config.stiff },
          });
        }}
      >
        {heroData.map((x, index) => (
          <SwiperSlide key={index}>
            <LightMode>
              <Box
                height={{ base: "80vh", lg: "100vh" }}
                width={"100vw"}
                position={"relative"}
                bg={"black"}
              >
                <Image
                  width={"100vw"}
                  height={{ base: "80vh", lg: "100vh" }}
                  src={x.img}
                  alt="demo"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                {/* TEXTS */}
                <Box
                  position={"absolute"}
                  top={"50%"}
                  left={"50%"}
                  transform={"translateX(-50%) translateY(-40%)"}
                  zIndex={3}
                  // bg={"blue.600"}
                >
                  <Box w={{ base: "100%", md: "80vw" }}>
                    <VStack w={"full"} spacing={{ base: 2, md: 6 }}>
                      <animated.div style={trails[0]}>
                        <Text
                          fontFamily={"heading"}
                          fontSize={"sm"}
                          fontWeight={600}
                          color={"white"}
                          letterSpacing={"4px"}
                          textTransform={"uppercase"}
                          lineHeight={"30px"}
                          textAlign={"center"}
                        >
                          {x.h1}
                        </Text>
                      </animated.div>
                      <animated.div style={springs}>
                        <Heading
                          as={"h1"}
                          fontFamily={"heading"}
                          size={"2xl"}
                          fontWeight={600}
                          color={"white"}
                          letterSpacing={{ base: "3vw", md: "2vw" }}
                          textTransform={"uppercase"}
                          textAlign={"center"}
                        >
                          {x.h2}
                        </Heading>
                      </animated.div>
                      <animated.div style={{ marginTop: "20px", ...trails[3] }}>
                        <Button fontSize={"sm"} fontWeight={600} px={10}>
                          Read more
                        </Button>
                      </animated.div>
                    </VStack>
                  </Box>
                </Box>

                {/* SYMBOLS */}
                <Box
                  position={"absolute"}
                  top={"50%"}
                  left={"50%"}
                  transform={"translateX(-50%) translateY(-40%)"}
                  zIndex={2}
                  width={{ base: "95%", md: "80%" }}
                  mx={"auto"}
                  height={"410px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  // bg={"blue.600"}
                >
                  <Box position={"relative"}>
                    {/* DOTS */}
                    <Box w={"full"} className="scale-up">
                      <Image
                        height={"410px"}
                        src={
                          "https://res.cloudinary.com/dqveipmsp/image/upload/v1690378912/bmi/h6-slider-vector-2_yeaqni.png"
                        }
                        alt="demo2"
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                          overflow: "clip",
                          overflowClipMargin: "content-box",
                        }}
                      />
                    </Box>

                    {/* ARROW UP */}
                    <Box
                      position={"absolute"}
                      transform={"translateY(-100%)"}
                      top={0}
                      left={"25%"}
                    >
                      <Box w={"full"} className="slide-left">
                        <Image
                          width={"56px"}
                          height={"20px"}
                          src={
                            "https://res.cloudinary.com/dqveipmsp/image/upload/v1690378912/bmi/arrow-vector-slider-4_qjyjod.png"
                          }
                          alt="demo3"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                            overflow: "clip",
                            overflowClipMargin: "content-box",
                          }}
                        />
                      </Box>
                    </Box>
                    {/* ARROW DOWN */}
                    <Box position={"absolute"} bottom={0} left={"50%"}>
                      <Box w={"full"} className="slide-left">
                        <Image
                          width={"56px"}
                          height={"20px"}
                          src={
                            "https://res.cloudinary.com/dqveipmsp/image/upload/v1690378912/bmi/arrow-vector-slider-3_apgipe.png"
                          }
                          alt="demo3"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                            overflow: "clip",
                            overflowClipMargin: "content-box",
                          }}
                        />
                      </Box>
                    </Box>

                    {/* CROSS */}
                    <Box position={"absolute"} bottom={0} left={0}>
                      <Box w={"full"} className="scale-up">
                        <Image
                          width={"100%"}
                          height={"154px"}
                          src={
                            "https://res.cloudinary.com/dqveipmsp/image/upload/v1690378912/bmi/h6-slider-vector-1_t4pyzn.png"
                          }
                          alt="demo3"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                            overflow: "clip",
                            overflowClipMargin: "content-box",
                          }}
                        />
                      </Box>
                    </Box>

                    {/* TARGET UP */}
                    <Box
                      position={"absolute"}
                      top={0}
                      transform={"translateY(-100%)"}
                      right={0}
                    >
                      <Box w={"full"} className="slide-right">
                        <Image
                          width={"77px"}
                          height={"27px"}
                          src={
                            "https://res.cloudinary.com/dqveipmsp/image/upload/v1690378913/bmi/arrow-vector-slider-1_nl3if3.png"
                          }
                          alt="demo3"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                            overflow: "clip",
                            overflowClipMargin: "content-box",
                          }}
                        />
                      </Box>
                    </Box>
                    {/* TARGET DOWN */}
                    <Box
                      position={"absolute"}
                      bottom={"23%"}
                      transform={"translateY(-100%)"}
                      left={"5%"}
                    >
                      <Box w={"full"} className="slide-right">
                        <Image
                          width={"51px"}
                          height={"23px"}
                          src={
                            "https://res.cloudinary.com/dqveipmsp/image/upload/v1690378913/bmi/arrow-vector-slider-2_xguqhi.png"
                          }
                          alt="demo3"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                            overflow: "clip",
                            overflowClipMargin: "content-box",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </LightMode>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        display={{ base: "none", lg: "block" }}
        position={"absolute"}
        zIndex={10}
        left={0}
        top={"50%"}
        transform={"translateY(-50%)"}
        ml={8}
      >
        <IconButton
          id={"swiperPrevEl"}
          icon={<BsChevronCompactLeft />}
          aria-label="swipe left"
          variant={"unstyled"}
          fontSize={"6xl"}
          color={"whiteAlpha.800"}
        />
      </Box>

      <Box
        display={{ base: "none", lg: "block" }}
        position={"absolute"}
        zIndex={10}
        right={0}
        top={"50%"}
        transform={"translateY(-50%)"}
        mr={8}
      >
        <IconButton
          id={"swiperNextEl"}
          icon={<BsChevronCompactRight />}
          aria-label="swipe right"
          variant={"unstyled"}
          fontSize={"6xl"}
          color={"whiteAlpha.800"}
        />
      </Box>
    </Box>
  );
}
