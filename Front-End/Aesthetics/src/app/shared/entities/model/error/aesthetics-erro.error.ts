import { TipoMensagem } from "../enumerable/tipo-mensagem.enum";

export class ErroGenerico {
  tipoMensagem!: TipoMensagem;
  mensagem!: string;

  constructor() {}
}
