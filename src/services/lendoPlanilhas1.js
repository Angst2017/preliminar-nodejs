//import { readdir, appendFile } from 'fs';
//const fs = require('fs');

exports.lendoPlanilhas = (name='') => {

const fs = require('fs');

var result = false;

var arquivos = [];
diretorio='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA43'
//diretorio[0]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA1'
// diretorio[1]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA2'
// diretorio[2]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA3'
// diretorio[3]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA4' ***
// diretorio[4]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA5'
// diretorio[5]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA6'
// diretorio[6]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA7'
// diretorio[7]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA8'
// diretorio[8]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA9'
// diretorio[9]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA10'
// diretorio[10]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA11'
// diretorio[11]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA12'
// diretorio[12]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA13'  ***
// diretorio[13]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA14'
// diretorio[14]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA15'
// diretorio[15]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA16'
// diretorio[16]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA17'
// diretorio[17]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA18'
// diretorio[18]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA19'
// diretorio[19]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA20'
// diretorio[20]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA21'
// diretorio[21]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA22'
// diretorio[22]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA23'
// diretorio[23]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA24'
// diretorio[24]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA25'
// diretorio[25]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA26'
// diretorio[26]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA27'
// diretorio[27]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA28'
// diretorio[28]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA29'
// diretorio[29]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA30'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA31'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA32'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA33'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA34'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA35'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA36'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA37'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA38'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA39'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA40'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA41'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA42'
// diretorio[]='C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA43'

arquivoDestino = "C:\\Projetos\\ArquivoRWx.txt"        

// for (i=1; i<44; i++) {
    let dir = diretorio; // + i;

    console.log('diretorio=',dir);

    fs.readdir(dir, (err, files) => {  
    if (err) {
        console.error(err);
        return;
    }
  //  console.log(files)

    files.forEach((file) => {
        if (file.endsWith('.xlsx')) {
    //    console.log(dir + '\\' + file);
        arquivos.push(file);
        }
    });

    console.log('GravarArquivos - estou aqui !')

    for (i=0; i<arquivos.length; i++) {  
        
        result = arquivos[i].indexOf("ANALISE_CAT_") > -1;

            if (result) {
                fs.appendFile(arquivoDestino, arquivos[i] + "\n", function(erro) {
                    if(erro) {
                        throw erro;
                    }})
            }

        }

    })

// }  //end-for

// exports.lendoPlanilhas = (name='') => {
    return `Hello ${name ? name : 'World - lendoPlanilhas1.js'}!`
}