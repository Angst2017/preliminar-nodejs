exports.lendoCsv_Pastas = (name='') => {
   
    const fs = require('fs');
    const readline = require('readline');
    
    const readable = fs.createReadStream('C://Projetos//ArquivoRWxCsv_teste.txt');
    const rl = readline.createInterface({
        input: readable
    })
    
    var gravarLinha = true;
    var categoria = 0;
    var proposta = 0;
    var ranking = 0;
    var result_ranking = false;
    var tipo = '';
    var anterior = '';
    
    var regiao = '';
    var tipo_detalhe = '';
    var pop_qtde = 0;
    var pop_perc = 0;
    var vot_qtde = 0;
    var vot_perc = 0;
    
    var result = false;
    var result1 = false;
    var result2 = false;
    var result3 = false;
    var result4 = false;
    var result5 = false;
    var result6 = false;
    var result7 = false;
    var result8 = false;
    var result9 = false;
    var result10 = false;
    var result11 = false;
    
    
    
    arquivoDestino = "C:\\Projetos\\ArquivoDestino.csv"
    
    //------Gravando o cabecalho do arquivo .csv-------------------------
    let cabecalho_csv = 'tipo,categoria,proposta,ranking,regiao,tipo_detalhe,pop_qtde,pop_perc,vot_qtde,vot_perc';
    fs.appendFile(arquivoDestino, cabecalho_csv + "\n", function(erro) {
        if(erro) {
            console.log('erro--->',erro);
            throw erro;
        }})  
    //-------------------------------------------------------------------
    
    
    
    rl.on('line', (line) => {
    
        gravarLinha = true;
        result = line.indexOf("React") > -1;
        if (result) {
            console.log(line);
            
            let v1 = line.split('_');
            // for (i=0; i<v1.length; i++) {
            //    console.log(i,' = ',v1[i]);
            // }
            categoria = v1[2];
            proposta = v1[4];
    
            tipo = v1[6];
    
            if (v1[7]){
            result_ranking = v1[7].indexOf(".xlsx") > -1;
            if (result_ranking) {let v2 = v1[7].split('.');
                                 ranking = v2[0]; }
            }
            if (v1[8]){
                result_ranking = v1[8].indexOf(".xlsx") > -1;
                if (result_ranking) {let v2 = v1[8].split('.');
                                     ranking = v2[0]; }
            }
    
            if (v1[9]) {
                result_ranking = v1[9].indexOf(".xlsx") > -1;
                if (result_ranking) {let v2 = v1[9].split('.');
                                     ranking = v2[0]; }
            }
    
            if (!categoria) {console.log(categoria,' ',line);}
        }
    
        result1 = line.indexOf("VOTANTES") > -1;
        result2 = line.indexOf("POSIÇÃO") > -1;
        result3 = line.indexOf("GRANDES") > -1;
        result4 = line.indexOf("CATEGORIA") > -1;
        result5 = line.indexOf(",N,%,N,%") > -1;
        result6 = line.indexOf(",,,,") > -1;
        result7 = line.indexOf("QUANTIDADE") > -1;
        result8 = line.indexOf("PESQUISA") > -1;
    
        result9 = line.indexOf("N (POR MIL") > -1;
        result10 = line.indexOf("HABITANTES)") > -1;
    
        result11 = line.indexOf(",,%,N,%") > -1;
    
        //if (tipo !== 'DEFIC') { gravarLinha = false }
        
        if (result || result1 || result2 || result3 || result4 || result5 || result6 || result7 || result8 || result9 || result10 || result11) {gravarLinha = false}    
    
        //console.log(gravarLinha);
    
        if (gravarLinha){
            //console.log(line,' >>>> ', categoria,',',proposta,',',ranking,',',line);
    
            let line_without_dash = line.split(',');
            if (line_without_dash[0] !== '') {anterior = line_without_dash[0]}
            if (line_without_dash[0] === '') {line_without_dash[0] = anterior}  //repete conteúdo anterior com o objetivo de padronizar os dados
    
            for(i=1; i<7;i++){
                if (line_without_dash[i] === '-') {line_without_dash[i] = '0'}
            }
            //tipo,categoria,proposta,ranking,
            // regiao = line_without_dash[0];
            // tipo_detalhe = line_without_dash[1];
            // pop_qtde = line_without_dash[2];
            // pop_perc = line_without_dash[3];
            // vot_qtde = line_without_dash[4];
            // vot_perc = line_without_dash[5];
    
            //console.log('length=', line_without_dash.length, ' ', line_without_dash);
    
            if (line_without_dash.length < 6) {
                regiao = line_without_dash[0];
                if (tipo === 'RENDA') {
                    tipo_detalhe = line_without_dash[1];
                    pop_qtde = 0;
                    pop_perc = line_without_dash[2];
                    vot_qtde = line_without_dash[3];
                    vot_perc = line_without_dash[4];
                } else {
                    tipo_detalhe = 'geral';
                    pop_qtde = line_without_dash[1];
                    pop_perc = line_without_dash[2];
                    vot_qtde = line_without_dash[3];
                    vot_perc = line_without_dash[4];
                }
    
            } else {
                regiao = line_without_dash[0];
                tipo_detalhe = line_without_dash[1];
                pop_qtde = line_without_dash[2];
                pop_perc = line_without_dash[3];
                vot_qtde = line_without_dash[4];
                vot_perc = line_without_dash[5];
            }
    
            //console.log(line_without_dash)
            if (!categoria) {console.log('UF_'+tipo+','+categoria+','+proposta+','+ranking+','+regiao+','+tipo_detalhe+','+pop_qtde+','+pop_perc+','+vot_qtde+','+vot_perc);}
    
            //let registro = 'UF_DEFIC,'+categoria+','+proposta+','+ranking+','+line;
            //let registro = 'UF_DEFIC,'+categoria+','+proposta+','+ranking+','+line_without_dash;
    
            let registro = 'UF_'+tipo+','+categoria+','+proposta+','+ranking+','+regiao+','+tipo_detalhe+','+pop_qtde+','+pop_perc+','+vot_qtde+','+vot_perc;
    
            fs.appendFile(arquivoDestino, registro + "\n", function(erro) {
                if(erro) {
                    console.log('erro--->',erro);
                    throw erro;
                }})  
        }
    })
    

return `Hello ${name ? name : 'World - lendoCsv_Pastas.js'}!`
}