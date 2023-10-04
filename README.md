# preliminar-nodejs

Projeto de demonstração da fase premilinar do consumo dos dados do PPA-Participativo 2023

## Módulo: lendoPlanilhas1.js

A partir do diretórios da categoria (onde estão os arquivos .HTML e .xlsx): 
   - le todos os arquivos .xlsx; 
   - desconsidera os arquivos que não possuam a string "ANALISE_CAT_";
   - para os demais grava uma linha no arquivoDestino = " ... \\ArquivoRWx.txt";

## Módulo: excelParaCsvTeste_Pasta.js

A partir do arquivo  " ... \ArquivoRWx.txt":
   - faz a leitura sequencial do arquivo (registro = path da planilha);
   - separa a aba 'DECIDIM' e converte o conteúdo no formato .csv e grava no arquivoDestino = " ... \ArquivoRWxCsv_teste.txt";
   
## Módulo: lendoCsv_Pastas.js

A partir do arquivo  " ... \ArquivoRWxCsv.txt":

   - faz a leitura sequencial do arquivo para a 'limpeza dos registros' usando os critérios abaixo;

### Cabecalho:
   - 'tipo,categoria,proposta,ranking,regiao,tipo_detalhe,pop_qtde,pop_perc,vot_qtde,vot_perc';

### Conteúdo:   
   - O conteúdo dos campos tipo, categoria, proposta e ranking serão extraídos do nome do arquivo:
         Exemplo: "ANALISE_CAT_2_PROPOSTA_10541_UF_DEFIC_RANKING_18.xlsx"
                   tipo      = UF_DEFIC
                   categoria = 2 
                   proposta  = 10541 
                   ranking   = 18

   - Os registros que possuírem uma das seguintes 'strings' será desconsiderado:
        "VOTANTES"
        "POSIÇÃO"
        "GRANDES"
        "CATEGORIA"
        ",N,%,N,%"
        ",,,,"
        "QUANTIDADE"
        "PESQUISA"
        "N (POR MIL"
        "HABITANTES)"
        ",,%,N,%"

   - Dos registros serão extraídos os seguintes campos (tipo_detalhe, pop_qtde, pop_perc, vot_qtde, vot_perc):
    
    ##### Para os registros que possuírem menos de seis campos válidos (não tem definido o tipo_detalhe):

          regiao = line_without_dash[0];

      Se forem da categoria 'UF_RENDA':
         tipo_detalhe = line_without_dash[1];
         pop_qtde = 0;
         pop_perc = line_without_dash[2];
         vot_qtde = line_without_dash[3];
         vot_perc = line_without_dash[4];

      Demais categorias;   
         tipo_detalhe = 'geral';
         pop_qtde = line_without_dash[1];
         pop_perc = line_without_dash[2];
         vot_qtde = line_without_dash[3];
         vot_perc = line_without_dash[4];
                
    #### Para todos os demais:

         regiao = line_without_dash[0];
         tipo_detalhe = line_without_dash[1];
         pop_qtde = line_without_dash[2];
         pop_perc = line_without_dash[3];
         vot_qtde = line_without_dash[4];
         vot_perc = line_without_dash[5];

