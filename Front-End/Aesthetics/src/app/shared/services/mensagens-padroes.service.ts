import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TipoMensagem } from '../entities/model/enumerable/tipo-mensagem.enum';
import { ErroGenerico } from '../entities/model/error/aesthetics-erro.error';

@Injectable({
  providedIn: 'root',
})
export class MensagensPadroesService {
  toastPrincipal: string = 'toast';

  constructor(private messageService: MessageService) {}

  mensagemPadraoDeSucesso(
    classe: Object,
    severidade: TipoMensagem,
    verboOperacaoRealizada: string
  ) {
    this.messageService.add({
      key: this.toastPrincipal,
      severity: severidade,
      summary: `${classe.constructor.name} ${verboOperacaoRealizada}!`,
      detail: `${classe.constructor.name} ${verboOperacaoRealizada.toLowerCase} com sucesso!`,
      life: 5000,
    });
  }

  mensagemPadraoErro(erro: ErroGenerico) {
    this.messageService.add({
      key: this.toastPrincipal,
      severity: erro.tipoMensagem,
      summary: `Erro!`,
      detail: `${erro.mensagem}`,
      life: 10000,
    });
  }
}
