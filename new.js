function User (nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`;
    }
}

const novoUser = new User('maria', 'maria@email.com');
console.log(novoUser.exibirInfos());

/** Reuso de protótipos */
function Admin (role) {
    User.call(this, 'juliana', 'j@email.com');
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype);
const novoAdmin = new Admin('admin');
console.log(novoAdmin.exibirInfos());

/** Criação de objeto por meio de Object.create */
const user = {
    init: function (nome, email) {
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function () {
        return this.nome;
    }
}

const novoUserDeObjeto = Object.create(user);
novoUserDeObjeto.init('Bruna', 'email')
console.log(novoUserDeObjeto.exibirInfos());