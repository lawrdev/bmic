import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useTrail, animated, config } from "@react-spring/web";

export default function MenuButton({ onClick }: { onClick: () => void }) {
  const [trails, api] = useTrail(
    3,
    () => ({
      from: { scale: 1, y: 0 },
      to: [
        { scale: 1.5, y: -1 },
        { scale: 1, y: 0 },
      ],
      config: config.stiff,
    }),
    []
  );

  return (
    <Button
      variant={"unstyled"}
      minWidth={0}
      minHeight={0}
      height={"fit-content"}
      border={"2px solid #fff"}
      borderRadius={"md"}
      px={2}
      py={2}
      onClick={onClick}
    >
      <Box
        className="menu_toggle"
        onMouseEnter={() => {
          api.start({
            from: { scale: 1, y: 0 },
            to: [
              { scale: 1.5, y: -1 },
              { scale: 1, y: 0 },
            ],
            config: config.stiff,
          });
        }}
      >
        <animated.div
          id="bar1"
          className="bars"
          style={trails[0]}
        ></animated.div>
        <animated.div
          id="bar2"
          className="bars"
          style={trails[1]}
        ></animated.div>
        <animated.div
          id="bar3"
          className="bars"
          style={trails[2]}
        ></animated.div>
      </Box>
    </Button>
  );
}
