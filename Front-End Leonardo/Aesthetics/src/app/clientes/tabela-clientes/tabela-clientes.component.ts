import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from 'src/app/shared/entities/data-transfer-object/ClienteDTO';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.less'],
})
export class TabelaClientesComponent implements OnInit {

  // Variáveis:
  checked: boolean = false;
  colunas: { header: string; field: string }[] = [
    { header: 'ID', field: 'id' },
    { header: 'Nome', field: 'nome' },
    { header: 'CPF', field: 'cpf' },
    { header: 'Telefone Celular', field: 'telefoneCelular' },
    { header: 'Telefone Fixo', field: 'telefoneFixo' },
    { header: 'E-Mail', field: 'email' },
    { header: 'Endereço', field: 'endereco' },
    { header: 'Alergias', field: 'alergias' },
  ];
  clientes!: ClienteDTO[];
  clientesSelecionados!: ClienteDTO[];

  ngOnInit(): void {
    this.clientes = [
      {
        id: 1,
        alergias: 'nenhuma',
        idsAgendamentosRealizados: [],
        nome: 'Leonardo',
        cpf: '123',
        endereco: 'RUA C',
        telefoneCelular: '123',
        telefoneFixo: '123 ',
        email: 'teste@co1231231231231231232313213m',
      },
      {
        id: 2,
        alergias: 'nenhuma',
        idsAgendamentosRealizados: [],
        nome: 'ASDSIADHJWIHDAISD',
        cpf: '123',
        endereco: 'RUA C',
        telefoneCelular: '123',
        telefoneFixo: '123 ',
        email: 'teste@co1231231231231231232313213m',
      }
    ];
  }

  teste() {
    console.log(this.colunas);
    console.log(this.clientes);
    console.log(this.clientesSelecionados);
  }
}
