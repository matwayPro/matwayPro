import React from "react";
import {
  Code,
  Container,
  FormControl,
  FormLabel,
  Icon
} from "@chakra-ui/react";
import { Select, chakraComponents } from "chakra-react-select";
import {
  GiCoffeeBeans,
  GiChocolateBar,
  GiStrawberry,
  GiCherry
} from "react-icons/gi";

const flavorOptions = [
  {
    value: "coffee",
    label: "Coffee",
    icon: <Icon as={GiCoffeeBeans} color="orange.700" mr={2} h={5} w={5} />
  },
  {
    value: "chocolate",
    label: "Chocolate",
    icon: <Icon as={GiChocolateBar} color="yellow.800" mr={2} h={5} w={5} />
  },
  {
    value: "strawberry",
    label: "Strawberry",
    icon: <Icon as={GiStrawberry} color="red.500" mr={2} h={5} w={5} />
  },
  {
    value: "cherry",
    label: "Cherry",
    icon: <Icon as={GiCherry} color="red.600" mr={2} h={5} w={5} />
  }
];

const customComponents = {
  Option: ({ children, ...props }) => (
    <chakraComponents.Option {...props}>
      {props.data.icon} {children}
    </chakraComponents.Option>
  )
};

const Example = () => (
  <Container mb={16}>
    <FormControl p={4}>
      <FormLabel>
        <Code>chakra-react-select</Code> custom option demo
      </FormLabel>
      <Select
        isMulti
        name="flavors"
        options={flavorOptions}
        placeholder="Select some flavors..."
        components={customComponents}
      />
    </FormControl>
  </Container>
);

export default Example;
