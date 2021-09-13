import React from "react";
import { Container } from "./styles";

import { Header } from "../../components/Header";

import { Table } from "reactstrap";

const apiResponse = [
  {
    medicamento: "Dipirona",
    medico: "Dr. Genivaldo",
    quantidade: 5,
    requisicao: "21-05-21",
  },
  {
    medicamento: "Aspirina",
    medico: "Dr. Laércio",
    quantidade: 2,
    requisicao: "06-06-21",
  },
  {
    medicamento: "Activia",
    medico: "Dr. Laravel",
    quantidade: 112,
    requisicao: "01-01-21",
  },
];

export function Requisicoes() {
  return (
    <>
      <Header />
      <Container>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Medicamento</th>
              <th>Médico</th>
              <th>Quantidade</th>
              <th>Requisição</th>
            </tr>
          </thead>

          <tbody>
            {apiResponse.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.medicamento}</td>
                  <td>{item.medico}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.requisicao}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
