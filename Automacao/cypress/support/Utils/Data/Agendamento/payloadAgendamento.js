import { formatedDate2PtBR } from "../../Helpers";

export function payloadPost(cliente_id, profissional_id, servico_id) {
  const data = "29/04/2023";
  const payload = {
    agendamentoDataHora: `${data} 15:50:12`,
    duracao: "02:00:00",
    finalizacaoAgendamento: `${data} 17:50:12`,
    cliente: { id: cliente_id },
    profissional: { id: profissional_id },
    servico: { id: servico_id },
  };

  return payload;
}
