import React, { useState } from "react";
import Container from "../atoms/Container";
import {
  Box,
  Button,
  Card,
  Collapse,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useColor } from "../../hooks/useColor";

interface BmiResultProp {
  bmi: number;
  level: string;
  message: string;
}

const CalculateBMI = () => {
  const { bg, bgGray, color100, color200 } = useColor();
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [bmiResult, setBmiResult] = useState<BmiResultProp | null>(null);

  const resultDisclosure = useDisclosure();

  const calcBMI = () => {
    if (weight && height && age) {
      setLoading(true);
      const overweightMsg =
        "Your body weight is too high according to the BMI calculator and is classified as obese. You can find support for your weight loss with your doctor.";
      const underweightMsg =
        "According to the BMI calculator, your body weight is low compared to your height. You may not be getting enough nutrients!";
      const normalweightMsg =
        "Great! According to the BMI calculator, your weight is in the healthy range. With the right diet and exercise, there is no reason why this should change. Keep going, you are doing everything right!";
      const bmi = (weight / height / height) * 10000;

      if (age < 25) {
        setBmiResult({
          bmi,
          level: bmi < 20 ? "Underweight" : bmi > 25 ? "Overweight" : "Normal",
          message:
            bmi < 20
              ? underweightMsg
              : bmi > 25
              ? overweightMsg
              : normalweightMsg,
        });
      } else if (age >= 25 && age <= 34) {
        setBmiResult({
          bmi,
          level:
            bmi < 21
              ? "Underweight"
              : bmi > 26
              ? "Overweight"
              : "Normal Weight",
          message:
            bmi < 21
              ? underweightMsg
              : bmi > 26
              ? overweightMsg
              : normalweightMsg,
        });
      } else if (age >= 35 && age <= 44) {
        setBmiResult({
          bmi,
          level: bmi < 22 ? "Underweight" : bmi > 27 ? "Overweight" : "Normal",
          message:
            bmi < 22
              ? underweightMsg
              : bmi > 27
              ? overweightMsg
              : normalweightMsg,
        });
      } else if (age >= 45 && age <= 54) {
        setBmiResult({
          bmi,
          level: bmi < 23 ? "Underweight" : bmi > 28 ? "Overweight" : "Normal",
          message:
            bmi < 23
              ? underweightMsg
              : bmi > 28
              ? overweightMsg
              : normalweightMsg,
        });
      } else if (age >= 55 && age <= 64) {
        setBmiResult({
          bmi,
          level: bmi < 24 ? "Underweight" : bmi > 29 ? "Overweight" : "Normal",
          message:
            bmi < 24
              ? underweightMsg
              : bmi > 29
              ? overweightMsg
              : normalweightMsg,
        });
      } else {
        setBmiResult({
          bmi,
          level: bmi < 25 ? "Underweight" : bmi > 30 ? "Overweight" : "Normal",
          message:
            bmi < 25
              ? underweightMsg
              : bmi > 30
              ? overweightMsg
              : normalweightMsg,
        });
      }

      setLoading(false);
      resultDisclosure.onOpen();

      console.log(bmiResult);
    }
  };

  return (
    <Box py={"72px"} bg={bg}>
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
          Calculate your BMI
        </Heading>

        <Card
          maxW={"500px"}
          mx={"auto"}
          borderRadius={"2px"}
          bg={bgGray}
          py={7}
          px={6}
        >
          <Collapse in={!resultDisclosure.isOpen} animateOpacity>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                calcBMI();
              }}
            >
              <VStack
                mb={"32px"}
                w={"full"}
                alignItems={"flex-start"}
                spacing={4}
              >
                <FormControl as="fieldset">
                  <FormLabel as="legend">Gender</FormLabel>
                  <RadioGroup
                    defaultValue="male"
                    onChange={(val) => {
                      setGender(val as "male" | "female");
                    }}
                  >
                    <HStack spacing="24px">
                      <Radio value="male">Male</Radio>
                      <Radio value="female">Female</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Age</FormLabel>
                  <Input
                    isRequired
                    type={"number"}
                    placeholder="18"
                    focusBorderColor="main.500"
                    onChange={(e) => {
                      setAge(parseFloat(e.target.value));
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Weight in KG</FormLabel>
                  <Input
                    isRequired
                    type={"number"}
                    placeholder="50"
                    focusBorderColor="main.500"
                    onChange={(e) => {
                      setWeight(parseFloat(e.target.value));
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Height in cm</FormLabel>
                  <Input
                    isRequired
                    type={"number"}
                    placeholder="164"
                    focusBorderColor="main.500"
                    onChange={(e) => {
                      setHeight(parseFloat(e.target.value));
                    }}
                  />
                </FormControl>
              </VStack>

              <Button
                type={"submit"}
                w={"full"}
                mx={"auto"}
                isLoading={loading}
              >
                Calculate
              </Button>
            </form>
          </Collapse>

          <Collapse in={resultDisclosure.isOpen && !!bmiResult} animateOpacity>
            <Box>
              <Text
                mb={3}
                textAlign={"center"}
                fontWeight={700}
                fontSize={"xl"}
                // textTransform={"uppercase"}
                // letterSpacing={"wide"}
                color={"blue.500"}
              >
                Your BMI is <Text as={"span"}>{bmiResult?.bmi.toFixed(2)}</Text>
              </Text>

              <Text
                mb={4}
                textDecoration={"underline"}
                textTransform={"uppercase"}
                textUnderlineOffset={2}
              >
                {bmiResult?.level}
              </Text>

              <Text mb={2}>
                {bmiResult?.level === "Normal"
                  ? "KEEP UP THE GOOD WORK, YOUR WEIGHT IS NORMAL"
                  : bmiResult?.level === "Underweight"
                  ? "ASK YOUR DOCTOR"
                  : "TIME TO CHANGE SOMETHING"}
              </Text>

              <Text mb={2} lineHeight={1.5}>
                {bmiResult?.message}
              </Text>

              <Button
                mt={9}
                variant={"link"}
                color={color100}
                textDecoration={"underline"}
                textUnderlineOffset={2}
                w={"full"}
                mx={"auto"}
                onClick={() => {
                  resultDisclosure.onClose();
                  setBmiResult(null);
                }}
              >
                Give another go
              </Button>
            </Box>
          </Collapse>
        </Card>
      </Container>
    </Box>
  );
};

export default CalculateBMI;
