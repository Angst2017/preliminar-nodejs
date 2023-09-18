exports.excelParaCsvTeste_Pasta = () => {

    const fs = require('fs');
    const lineReader = require('line-reader')
    //const axios = require('axios');
    var readline = require('readline');
    var resp = "";
    
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    var arquivos = [];
    console.log('LendoArquivos - estou aqui !')
    //arquivoOrigem = "C:\\Projetos\\ArquivoRWx_teste.txt"        
    arquivoDestino = "C:\\Projetos\\ArquivoRWxCsv_teste.txt"        
    
    arquivoOrigem = "C:\\Projetos\\arquivos_teste\\Categoria_02\\ArquivoRWx_teste.txt"
    
    var categoria = 1;
    //for (categoria=1; categoria < 2; categoria++) 
    do {
        leitor.question('\n\nA pasta é da categoria: ', function(answer){
            resp = answer; categoria = answer;
            console.log("\nSua resposta " + resp);
            //leitor.close();
    
            arquivoOrigem = "C:\\Projetos\\arquivos_teste\\Categoria_"+("00" + categoria).slice(-2) +"\\ArquivoRWx_teste.txt"        
            console.log('Categoria=',categoria, ' ', arquivoOrigem)
    
            var linhas = 0;
            lineReader.eachLine(arquivoOrigem, function(line, last) {
                linhas++;                      
                arquivos[(linhas - 1)]
            //    console.log(linhas, '- ',line);c
                getPlanilhas(line, categoria);
        
                if (last) {
                    console.log("Arquivo lido > final da rotina", arquivoOrigem, "<");
                }
            });
    
        })
    
        //categoria++;
        console.log('categoria>>',categoria)
        
    }
    while (categoria < 1);

    console.log('-=-=-=-=-=-=-=-=-', arquivos);
    console.log('-=-=-=-=-=-=-=-=-');

    return `Hello excelParaCsvTeste_Pasta`
}


const getPlanilhas = async (file, categoria) => {

    //var file_n = "C:\\Projetos\\arquivos_teste\\Categoria_"+("00" + categoria).slice(-2) +"\\ArquivoRWx_teste.txt"     
    var file_n = 'C:\\Projetos\\React\\presidencia\\DadosPPA\\20230718\\CATEGORIA'+categoria+'\\' + file;       

    console.log('OK -> api ', file_n, ' ', categoria);
//   try {
    //const response = await axios.get(`http://localhost:2000/${file}/${categoria}`)

    const xlsx = require('xlsx');
    const wb = xlsx.readFile(file_n);
    const ws = wb.Sheets["DECIDIM"];

    let data = xlsx.utils.sheet_to_csv(ws);

    const fs = require('fs');

    dados = file_n+'\n'+data;
    console.log(data);

    //const dados = response.data;

        fs.appendFile(arquivoDestino, dados + "\n", function(erro) {
            if(erro) {
                console.log('erro--->',erro);
                throw erro;
            }})
            
//   } catch (error) {
//     console.log('error - catch ',error.errno); //.response.body);
//   }
}


