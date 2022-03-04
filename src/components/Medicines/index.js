import React from "react";
import { useMedicines } from "../../contexts/Medicines";
import Accordion from '../Accordion';
import { ContainerUl } from "./styles";

export default function Medicines() {
  const {medicines} = useMedicines();

  console.log(medicines);

  return (
    <ContainerUl>
      {medicines.map((medicine, index) => {
        return (
          <Accordion
            key={index}
            name={medicine.name}
            days={medicine.days}
            breakfast={!medicine.breakfast ? false : medicine.breakfast}
            lunch={!medicine.lunch ? false : medicine.lunch}
            dinner={!medicine.dinner ? false : medicine.dinner}
            mg={medicine.mg}
          />
        );
      })}
    </ContainerUl>
  );
}