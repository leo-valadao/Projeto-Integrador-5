import { formatedDate2PtBR } from "../../Helpers";

export function payloadPost(cliente_id, profissional_id, servico_id) {
  const data = formatedDate2PtBR();
  const payload = {
    agendamentoDataHora: `${data} 18:50:12`,
    duracao: "04:00:00",
    finalizacaoAgendamento: `${data} 22:50:12`,
    cliente: { id: cliente_id },
    profissional: { id: profissional_id },
    servico: { id: servico_id },
  };

  return payload;
}
