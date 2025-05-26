// const fs = require('fs')
// let caminhoNovoDiretorio = './dirCriado'

// fs.mkdir( caminhoNovoDiretorio,(err) => {
// 		if(err) throw err
// 		console.log('O diretorio foi criado com sucesso!')
// })

// const fs = require('fs')
// let caminhoDiretorio = './dirCriado'

// fs.readdir( caminhoDiretorio,(err, arquivos) => {
// 	if(err)throw err
// 	arquivos.forEach((arquivo)=>{
// 	console.log(arquivo)
// })  })

// const fs = require('fs')
// let caminhoDiretorio = './dirCriado'

// fs.rmdir( caminhoDiretorio, {recursive: true}, (err) => {
// 	if(err) throw err
// 	console.log('O diretório foi removido com sucesso')
// })

const fs = require('fs');

const pessoas = [
    {
        nome: "Ana Souza",
        cargo: "Desenvolvedor Front-end",
        tempoEmpresa: 3, // em anos
        salario: 5500
    },
    {
        nome: "Bruno Lima",
        cargo: "Analista de Dados",
        tempoEmpresa: 5, // em anos
        salario: 7000
    },
    {
        nome: "Carla Pereira",
        cargo: "Gerente de Projetos",
        tempoEmpresa: 8, // em anos
        salario: 9000
    },
    {
        nome: "Daniel Santos",
        cargo: "Designer UI/UX",
        tempoEmpresa: 2, // em anos
        salario: 5000
    },
    {
        nome: "Eduardo Silva",
        cargo: "Desenvolvedor Back-end",
        tempoEmpresa: 4, // em anos
        salario: 6500
    },
    {
        nome: "Luana Moraes",
        cargo: "Desenvolvedor Back-end",
        tempoEmpresa: 1, // em anos
        salario: 6500
    },
    {
        nome: "Cleiton Silva",
        cargo: "Analista de Dados",
        tempoEmpresa: 3, // em anos
        salario: 4000
    },
    {
        nome: "Maria Silva",
        cargo: "Desenvolvedor Front-end",
        tempoEmpresa: 5, // em anos
        salario: 7500
    },
    {
        nome: "Paula Souza",
        cargo: "Desenvolvedor Front-end",
        tempoEmpresa: 3, // em anos
        salario: 5500
    },
    {
        nome: "Ana Lima",
        cargo: "Desenvolvedor Front-end",
        tempoEmpresa: 4, // em anos
        salario: 6000
    },
    {
        nome: "Felipe Oliveira",
        cargo: "Analista de Segurança",
        tempoEmpresa: 6, // em anos
        salario: 8000
    },
    {
        nome: "Giovanna Costa",
        cargo: "Product Owner",
        tempoEmpresa: 2, // em anos
        salario: 8500
    },
    {
        nome: "Rafael Almeida",
        cargo: "Scrum Master",
        tempoEmpresa: 4, // em anos
        salario: 7200
    },
    {
        nome: "Mariana Santos",
        cargo: "QA Engineer",
        tempoEmpresa: 3, // em anos
        salario: 6000
    },
    {
        nome: "Pedro Oliveira",
        cargo: "Desenvolvedor Full-stack",
        tempoEmpresa: 7, // em anos
        salario: 7800
    },
    // Mais pessoas adicionadas
    {
        nome: "Camila Souza",
        cargo: "Analista de Marketing Digital",
        tempoEmpresa: 4, // em anos
        salario: 6000
    },
    {
        nome: "José Oliveira",
        cargo: "Engenheiro de Software",
        tempoEmpresa: 6, // em anos
        salario: 8500
    },
    {
        nome: "Fernanda Santos",
        cargo: "UX Researcher",
        tempoEmpresa: 3, // em anos
        salario: 6200
    },
    {
        nome: "Luisa Costa",
        cargo: "Product Designer",
        tempoEmpresa: 2, // em anos
        salario: 5800
    },
    {
        nome: "Rodrigo Almeida",
        cargo: "Analista de Sistemas",
        tempoEmpresa: 5, // em anos
        salario: 7000
    }
];

const jsonData = JSON.stringify(pessoas)

fs.writeFile('saida.json', jsonData, 'utf8', (err) => {
    if (err) {
        console.error('Erro ao escrever o arquivo JSON:', err);
        return;
    }
    console.log('Arquivo JSON escrito com sucesso!');
});