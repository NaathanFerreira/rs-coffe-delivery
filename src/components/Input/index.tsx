import {
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  optional?: boolean;
  error?: any;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, placeholder, type, optional, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
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
          ref={ref}
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
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
