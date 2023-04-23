class Link {
    private static port: string = '8080'; 
    public static url: string = `http://localhost:${this.port}/api/`;
}

const enum APIsVersionsEnum {
  V1 = 'v1/'
}

const enum EndPoints {
  CLIENTE = 'cliente',
  PROFISSIONAL = 'profissional',
  SERVICO = 'servico',
  AGENDAMENTO = 'agendamento'
}

export class ActiveAPIs extends Link {
    public static cliente: string = `${Link.url}${APIsVersionsEnum.V1}${EndPoints.CLIENTE}`;
    public static profissional: string = `${Link.url}${APIsVersionsEnum.V1}${EndPoints.PROFISSIONAL}`;
    public static servico: string = `${Link.url}${APIsVersionsEnum.V1}${EndPoints.SERVICO}`;
    public static agendamento: string = `${Link.url}${APIsVersionsEnum.V1}${EndPoints.AGENDAMENTO}`;
}
