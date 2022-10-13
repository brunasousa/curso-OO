/* Herança de protótipo:  forma antiga do java script trabalhar com herança. Herança de classes
* passou a existir a partir do IES6.*/


/**
 * Passagem de contexto: 
 
 Call: 
  
    function User(nome, email) {
        this.nome = nome
        this.email = email

        this.exibeInfos = function(){
            console.log(this.nome, this.email)
        }
    }

    const newUser = new User('mariana', 'm@m.com')


    const outroUser = {
        nome: 'Rodrigo',
        email: 'r@r.com'
    }

    newUser.exibeInfos() //mariana m@m.com
    newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com



Applay: semelhante ao call, mas é possível passar uma lista de parâmetros.

function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const user = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
     fn.apply(user, [this.nome, this.email])
    }
}
 user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com


OBS: Arrow function não tem contexto próprio, por isso não podem ser chamadas
usando bind, call ou applay. Não possuem a propridade prototype e, consequentente, 
não podem ser usadas como construtor. Além disso, não são levadas para o início 
do arquivo durante a excução no processo de hoisting. Por isso, não podem ser 
chamadas antes da sua declaração, ao contrários das vars e das funções declaradas.
 */


