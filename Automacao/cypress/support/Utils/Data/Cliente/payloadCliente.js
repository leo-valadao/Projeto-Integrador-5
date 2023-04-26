const Leite = require("leite");
const generate = new Leite();

export function payloadPost() {
  const nome = generate.pessoa.primeiroNome({ sexo: "Feminino" });

  const payload = {
    nome: nome,
    cpf: `${generate.pessoa.cpf()}`,
    endereco: `${generate.localizacao.logradouro()}`,
    telefoneFixo: "6244444444",
    telefoneCelular: "62999999999",
    email: `${nome}@gmail.com`,
  };

  return payload;
}
