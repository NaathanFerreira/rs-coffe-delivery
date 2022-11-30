import { Grid, GridItem } from "@chakra-ui/react";
import { Input } from "../../../../components/Input";

export function CheckoutFormFields() {
  return (
    <Grid as="form" templateColumns="repeat(6, 1fr)" gap={4} mt={10}>
      <GridItem colSpan={2}>
        <Input name="cep" type="text" placeholder="CEP" />
      </GridItem>
      <GridItem colSpan={6}>
        <Input name="rua" type="text" placeholder="Rua" />
      </GridItem>
      <GridItem colSpan={2}>
        <Input name="numero" type="number" placeholder="Número" />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          name="complemento"
          type="text"
          placeholder="Complemento"
          optional
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Input name="bairro" type="text" placeholder="Bairro" />
      </GridItem>
      <GridItem colSpan={3}>
        <Input name="cidade" type="text" placeholder="Cidade" />
      </GridItem>
      <GridItem colSpan={1}>
        <Input name="uf" type="text" placeholder="UF" />
      </GridItem>
    </Grid>
  );
}
