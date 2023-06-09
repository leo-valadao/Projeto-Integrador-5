package com.senac.aesthetics;

import java.util.Arrays;
import java.time.LocalDateTime;
import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.senac.aesthetics.entities.model.Agendamento;
import com.senac.aesthetics.entities.model.Cliente;
import com.senac.aesthetics.entities.model.Profissional;
import com.senac.aesthetics.entities.model.Servico;
import com.senac.aesthetics.service.AgendamentoService;
import com.senac.aesthetics.service.ClienteService;
import com.senac.aesthetics.service.ProfissionalService;
import com.senac.aesthetics.service.ServicoService;
import com.senac.aesthetics.util.GeradorDocumentos;

@SpringBootApplication
public class AestheticsApplication implements ApplicationRunner {

	@Autowired
	ClienteService cs;

	@Autowired
	ProfissionalService ps;

	@Autowired
	ServicoService ss;

	@Autowired
	AgendamentoService as;

	public static void main(String[] args) {
		SpringApplication.run(AestheticsApplication.class, args);

		System.out.println("\n##############################");
		System.out.println("#### APLICATIVO INICIADO! ####");
		System.out.println("##############################\n");
	}

	/*
	 * TODO: REMOVER ESTE MÉTODO:
	 * 
	 * @Override
	 * public void run(ApplicationArguments args) throws Exception
	 * 
	 * TODO: REMOVER A INTERFACE:
	 * ApplicationRunner
	 * DA CLASSE:
	 * 
	 * @SpringBootApplication
	 * public class AestheticsApplication implements ApplicationRunner
	 * AO MIGRAR PARA PRODUÇÃO!
	 */
	@Override
	public void run(ApplicationArguments args) throws Exception {

		boolean InserirDadosDeTeste = true;

		if (InserirDadosDeTeste) {
			GeradorDocumentos gd = new GeradorDocumentos();

			for (int i = 1; i <= 150; i++) {
				Cliente c = new Cliente();

				c.setNome("Cliente " + i);
				c.setCpf(gd.cpf(true));
				c.setEndereco("Endereço " + i);
				c.setTelefoneCelular("(12)34567-8901");
				c.setTelefoneFixo("(12)34567-8901");
				c.setEmail("Email" + i + "@Teste.com");
				c.setAlergias("Remédio X, Shampoo A, Sambonete " + i);

				cs.inserirCliente(c);
			}

			for (int i = 1; i <= 150; i++) {
				Profissional p = new Profissional();
				p.setNome("Profissional " + i);
				p.setCpf(gd.cpf(true));
				p.setEndereco("Endereco " + i);
				p.setTelefoneCelular("(12)34567-8901");
				p.setTelefoneFixo("(12)34567-8901");
				p.setEmail("Email" + i + "@Teste.com");
				p.setInstagram("Instragram " + i);

				ps.inserirProfissional(p);
			}

			for (int i = 5; i <= 25; i++) {
				Servico s = new Servico();
				s.setNome("Serviço " + i);
				s.setDescricao("Descrição " + i);
				s.setValor(Double.valueOf(i));

				Profissional p1 = ps.obterProfissionalPorId(Long.valueOf(i));
				Profissional p2 = ps.obterProfissionalPorId(Long.valueOf(i + 1));

				s.setProfissionaisDisponiveis(Arrays.asList(p1, p2));

				ss.inserirServico(s);
			}

			for (int i = 1; i <= 15; i++) {
				Agendamento a = new Agendamento();
				LocalDateTime dataAgendamento = LocalDateTime.of(2024, 5, i, i, 0);
				a.setAgendamentoDataHora(dataAgendamento);
				LocalTime duracao = LocalTime.of(i, 0, 0);
				a.setDuracao(duracao);
				a.setFinalizacaoAgendamento(dataAgendamento.plusHours(4));

				a.setCliente(cs.obterClientePorId(Long.valueOf(i)));
				a.setProfissional(ps.obterProfissionalPorId(Long.valueOf(i)));
				a.setServico(ss.obterServicoPorId(Long.valueOf(i)));

				as.inserirAgendamento(a);
			}

			System.out.println("\n VALORES INICIAS DE TESTE INSERIDOS!\n");
		}
	}
}
