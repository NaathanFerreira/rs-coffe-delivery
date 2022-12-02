import { Button, Flex, Grid } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutPaymentMethods } from "./CheckoutPaymentMethods";
import { OrderDetails } from "./OrderDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";

15041735;

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Cep Incorreto").max(8, "Cep Incorreto"),
  rua: zod.string().min(1, "Informe a rua"),
  numero: zod.number().min(1, "Informe o número da casa"),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Informe o bairro"),
  cidade: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(2, "UF incorreto").max(2, "UF incorreto"),
  metodoPagamento: zod.string(),
});

type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: 0,
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      metodoPagamento: "",
    },
  });

  const { handleSubmit, setError } = newCheckoutForm;

  function handleCheckoutSubmit(data: NewCheckoutFormData) {
    const { metodoPagamento } = data;
    if (!metodoPagamento) {
      setError("metodoPagamento", {
        message: "Informe um método de pagamento",
      });
      return;
    }
    navigate("/confirmed-order");
  }

  return (
    <Grid
      templateColumns="60% 40%"
      gap={6}
      mt={50}
      as="form"
      onSubmit={handleSubmit(handleCheckoutSubmit)}
    >
      <FormProvider {...newCheckoutForm}>
        <Flex direction="column" gap={4}>
          <CheckoutForm />
          <CheckoutPaymentMethods />
        </Flex>
        <OrderDetails />
      </FormProvider>
    </Grid>
  );
}
