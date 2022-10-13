const user = {
    nome: 'Juliana',
    email: 'j@email.com',
    nascimento: '2021/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

user.exibirInfos();

function exibirSemContexto() {
    console.log(`Função fora do objeto: ${this.nome}`);
}
exibirSemContexto();

//Adicionando um contexto a função
const exibirComContexto = exibirSemContexto.bind(user);
exibirComContexto();