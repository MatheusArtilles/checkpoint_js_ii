let verificacoes = function(nota_aluno, nota_aprov, faltas, faltasmax, porcentagem){
    if(nota_aluno >= nota_aprov && faltas < faltasmax){
        return 'aluno aprovado!';
    } else if(faltas == faltasmax){
        if(porcentagem >= 0.1){
            return 'aluno aprovado com falta!';
        } else {
            return 'aluno reprovado!';
        }  
    } else if(porcentagem < 0.1){
        return 'aluno reprovado!'
    }
}
module.exports = verificacoes;