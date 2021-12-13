import React from "react";
import { useMedicines } from "../../contexts/Medicines";
import Accordion from '../Accordion';
import { ContainerUl } from "./styles";

export default function Medicines() {
  const medicines = useMedicines();

  console.log(medicines);

  return (
    <ContainerUl>
      {medicines.map((medicine, index) => {
        return (
          <Accordion
            key={index}
            title={medicine.title}
            morning={!medicine.morning ? false : medicine.morning}
            afternoon={!medicine.afternoon ? false : medicine.afternoon}
            night={!medicine.night ? false : medicine.night}
          />
        );
      })}
    </ContainerUl>
  );
}
