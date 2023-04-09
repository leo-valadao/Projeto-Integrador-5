package com.senac.aesthetics;

import java.util.Arrays;
import java.util.Date;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAmount;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.senac.aesthetics.entities.model.Agendamento;
import com.senac.aesthetics.entities.model.Cliente;
import com.senac.aesthetics.entities.model.Profissional;
import com.senac.aesthetics.entities.model.Servico;
import com.senac.aesthetics.service.AgendamentoService;
import com.senac.aesthetics.service.ClienteService;
import com.senac.aesthetics.service.ProfissionalService;
import com.senac.aesthetics.service.ServicoService;

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

	// TODO: REMOVER TODO ESTE MÉTODO RUN E TIRAR A IMPLEMENTAÇÃO DA INTERFACE ApplicationRunner DA CLASSE public class AestheticsApplication AO MIGRAR PARA PRODUÇÃO
	@Override
	public void run(ApplicationArguments args) throws Exception {

		Cliente c1 = new Cliente();
		c1.setNome("Leonardo");
		c1.setCpf("75106795168");
		c1.setEndereco("RUA C");
		c1.setTelefoneCelular("12345678901");
		c1.setTelefoneFixo("12345678901");
		c1.setEmail("leo@teste.com");
		c1.setAlergias("A tudo");

		cs.inserirCliente(c1);
		cs.inserirCliente(c1);
		cs.inserirCliente(c1);

		Profissional p1 = new Profissional();
		p1.setNome("Leonardo");
		p1.setCpf("75106795168");
		p1.setEndereco("RUA C");
		p1.setTelefoneCelular("12345678901");
		p1.setTelefoneFixo("12345678901");
		p1.setEmail("leo@teste.com");
		p1.setInstagram("leo.valadao");

		Profissional p2 = new Profissional();
		p2.setNome("Leonardo 2");
		p2.setCpf("75106795168");
		p2.setEndereco("RUA C");
		p2.setTelefoneCelular("12345678901");
		p2.setTelefoneFixo("12345678901");
		p2.setEmail("leo@teste.com");
		p2.setInstagram("leo.valadao");


		ps.inserirProfissional(p1);
		ps.inserirProfissional(p2);
		ps.inserirProfissional(p1);
		ps.inserirProfissional(p2);

		Servico s1 = new Servico();
		s1.setNome("Cote de cabelo");
		s1.setDescricao("e so um corte msm");
		s1.setValor(2000.0);
		s1.setProfissionais(Arrays.asList(p1, p1));

		ss.inserirServico(s1);

		Agendamento a1 = new Agendamento();
		LocalDateTime dataAgendamento = LocalDateTime.of(2023, 5, 10, 14, 0);
		a1.setAgendamentoDataHora(dataAgendamento);
		LocalTime duracao = LocalTime.of(4, 0, 0);
		a1.setDuracao(duracao);
		a1.setFinalizacaoAgendamento(dataAgendamento.plusHours(4));
		a1.setCliente(c1);
		a1.setProfissional(p1);
		a1.setServico(s1);

		as.inserirAgendamento(a1);

		System.out.println("\n VALORES INICIAS DE TESTE INSERIDOS!\n");
	}
}
