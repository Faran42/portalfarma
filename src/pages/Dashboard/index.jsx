import React, { useState, useEffect } from "react";

import { Container, Text } from "./styles";

import { Header } from "../../components/Header";
import { Table } from "reactstrap";

import api from "../../config/api";

export function Dashboard() {
  const [apiResponse, setApiResponse] = useState([{}]);

  useEffect(() => {
    const googleId = sessionStorage.getItem("googleId");
    api.get(`requisicoes/${googleId}`).then((response) => {
      setApiResponse(response.data);
      console.log(response);
    });
  }, []);

  function handleApiRequest() {
    if (true) {
      return (
        <>
          <Text style={{ marginTop: '4%' }}>Listagem de Ofertas </Text>
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
                {console.log("inner", apiResponse)}
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
    } else {
      return (
        <Container>
          <Text>Sem novas ofertas no momento.</Text>;
        </Container>
      );
    }
  }
  return (
    <>
      <Header />
      {handleApiRequest()}
    </>
  );
}
