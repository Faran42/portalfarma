import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import { Header } from "../../components/Header";

import { Table } from "reactstrap";

import api from "../../config/api";

// const apiResponse = [
//   {
//     medicamento: "Dipirona",
//     medico: "Dr. Genivaldo",
//     quantidade: 5,
//     requisicao: "21-05-21",
//   },
//   {
//     medicamento: "Aspirina",
//     medico: "Dr. Laércio",
//     quantidade: 2,
//     requisicao: "06-06-21",
//   },
//   {
//     medicamento: "Activia",
//     medico: "Dr. Laravel",
//     quantidade: 112,
//     requisicao: "01-01-21",
//   },
// ];

export function Requisicoes() {
  const [apiResponse, setApiResponse] = useState([{}]);

  useEffect(() => {
    const googleId = sessionStorage.getItem("googleId");
    api.get(`requisicoes/${googleId}`).then((response) => {
      setApiResponse(response.data)
      console.log(response);
    });
  }, []);


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
            {console.log('inner',apiResponse)}
            {apiResponse.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.medicamento}</td>
                  <td>{item.medico}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.create_date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
