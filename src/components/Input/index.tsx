import {
  FormControl,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  optional?: boolean;
}

export function Input({
  name,
  placeholder,
  type,
  optional,
  ...rest
}: InputProps) {
  return (
    <FormControl>
      <InputGroup>
        <ChakraInput
          bg="gray.75"
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          focusBorderColor="orange.500"
          variant="filled"
          _hover={{
            bgColor: "gray.100",
            borderColor: "orange.500",
          }}
          {...rest}
        />
        {optional && (
          <InputRightElement pr={10}>
            <Text color="gray.200" fontStyle="italic" fontSize=".8rem">
              Opcional
            </Text>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
}
