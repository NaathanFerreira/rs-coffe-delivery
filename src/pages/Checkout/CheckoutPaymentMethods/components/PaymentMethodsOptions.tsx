import { Grid } from "@chakra-ui/react";
import { PaymentOptionsCard } from "./PaymentOptionsCard";
import { AiOutlineBank, AiOutlineCreditCard } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const paymentMethods = {
  CREDIT_CARD: "CARTÃO DE CRÉDITO",
  DEBIT_CARD: "CARTÃO DE DÉBITO",
  CASH: "DINHEIRO",
};

export function PaymentMethodsOptions() {
  const [selectedPaymentMethod, setSelectPaymentMethod] = useState("");

  const { setValue } = useFormContext();

  useEffect(() => {
    setValue("metodoPagamento", selectedPaymentMethod);
  }, [selectedPaymentMethod]);

  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gap={2} width="100%" my={10}>
      <PaymentOptionsCard
        icon={AiOutlineCreditCard}
        label={paymentMethods.CREDIT_CARD}
        isSelected={selectedPaymentMethod === paymentMethods.CREDIT_CARD}
        setCardAsSelected={setSelectPaymentMethod}
      />
      <PaymentOptionsCard
        icon={AiOutlineBank}
        label={paymentMethods.DEBIT_CARD}
        isSelected={selectedPaymentMethod === paymentMethods.DEBIT_CARD}
        setCardAsSelected={setSelectPaymentMethod}
      />
      <PaymentOptionsCard
        icon={BsCash}
        label="DINHEIRO"
        isSelected={selectedPaymentMethod === paymentMethods.CASH}
        setCardAsSelected={setSelectPaymentMethod}
      />
    </Grid>
  );
}
