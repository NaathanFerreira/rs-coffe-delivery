import { Grid, GridItem } from "@chakra-ui/react";
import { Input } from "../../../../components/Input";
import { useFormContext } from "react-hook-form";

export function CheckoutFormFields() {
  const {
    register,
    formState,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4} mt={10}>
      <GridItem colSpan={2}>
        <Input
          type="text"
          placeholder="CEP"
          {...register("cep")}
          error={errors.cep}
        />
      </GridItem>
      <GridItem colSpan={6}>
        <Input
          type="text"
          placeholder="Rua"
          {...register("rua")}
          error={errors.rua}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Input
          type="number"
          placeholder="Número"
          {...register("numero", { valueAsNumber: true })}
          error={errors.numero}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          type="text"
          placeholder="Complemento"
          {...register("complemento")}
          optional
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Input
          type="text"
          placeholder="Bairro"
          {...register("bairro")}
          error={errors.bairro}
        />
      </GridItem>
      <GridItem colSpan={3}>
        <Input
          type="text"
          placeholder="Cidade"
          {...register("cidade")}
          error={errors.cidade}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <Input
          type="text"
          placeholder="UF"
          {...register("uf")}
          error={errors.uf}
        />
      </GridItem>
    </Grid>
  );
}
