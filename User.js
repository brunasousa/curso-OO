export default class User {
    #nome; //Atributo privado
    #sobrenome;
    #email;
    #nascimento;
    #role;
    #ativo;

    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }

    get sobrenome() {
        return this.#sobrenome
    }

    get email() {
        return this.#email;
    }

    get nascimento(){
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(nome) {
        if (nome === '') {
            throw new Error('Valor inválido para nome.')
        }

        let [novoNome, ...sobrenome] = nome.split(" ");
        this.#nome = novoNome;
        this.#sobrenome = sobrenome.join(' ');
    }

    set email(email) {
        this.#email = email;
    }

    set nascimento(nascimento) {
        this.#nascimento = nascimento;
    }

    set role(role) {
        this.#role = role;
    }

    set ativo(ativo) {
        this.#ativo = ativo;
    }

    // #montaObjUser() { //método privado
    //     return ({nome: this.#nome,
    //     email: this.#email,
    //     nascimento: this.#nascimento,
    //     role: this.#role,
    //     ativo: this.#ativo
    // }); 
    // }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}`;
    }
}

