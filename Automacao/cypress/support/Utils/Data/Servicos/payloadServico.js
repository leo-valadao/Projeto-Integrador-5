import uuid from "../../uuid";

export function payloadPost() {
  const payload = {
    nome: `Serviço ${uuid.v4().substring(24)}`,
    descricao: `Descrição Serviço ${uuid.v4().substring(24)}`,
    valor: 2000.0,
    profissionais: [
      {
        id: 1,
      },
    ],
  };

  return payload;
}

export function payloadPut(servico_id) {
  const payload = {
    id: servico_id,
    nome: `Serviço PUT ${uuid.v4().substring(24)}`,
    descricao: `Descrição Serviço PUT ${uuid.v4().substring(24)}`,
    valor: 200.0,
    profissionais: [
      {
        id: 2,
      },
    ],
  };

  return payload;
}
