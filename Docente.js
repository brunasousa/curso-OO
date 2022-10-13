import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(nomeDoEstudante, curso) {
        return `Estudante ${nomeDoEstudante} aprovado(a) no ${curso}.`
    }
}