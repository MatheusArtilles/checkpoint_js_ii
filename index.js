let verificacoes = require('./verificacoes');
let Aluno = class Aluno {
    constructor(nome, qtdfaltas = 0){
        this.nome = nome;
        this.qtdfaltas = qtdfaltas;
        this.notas = [];
    }
    adicionarNaLista(nota){
        return this.notas.push(nota);
    }
    calcularMedia(){
        let lista_notas = this.notas;
        let soma = lista_notas.reduce((valor, item) => valor + item);
        return soma / lista_notas.length;
    }
    faltas(){
        return this.qtdfaltas += 1;
    }
}
let Curso = class Curso {
    constructor(nomeCurso, notaAprov, faltasMax){
        this.nomeCurso = nomeCurso;
        this.notaAprov = notaAprov;
        this.faltasMax = faltasMax;
        this.listaEstudantes = [];
    }
    addAlunos(aluno){
        return this.listaEstudantes.push(aluno);
    }
    getListaEstudantes(){
        return this.listaEstudantes;
    }
    getNotaAprov(){
        return this.notaAprov;
    }
    getFaltasMax(){
        return this.faltasMax;
    }
    aprovacaoAluno(aluno){
        let nota_aluno = aluno.calcularMedia();
        let faltas = aluno.qtdfaltas;
        let porcentagem = (nota_aluno - this.getNotaAprov()).toFixed(1);
        return verificacoes(nota_aluno, this.getNotaAprov(), faltas, this.getFaltasMax(), porcentagem);
    }
    aprovacoes(){
        let lista = this.getListaEstudantes();
        let lista_boolean = [];
        for(let i = 0; i < lista.length; i++){
           let aprovacao = this.aprovacaoAluno(lista[i]);
           lista_boolean.push(aprovacao);
        }
        return lista_boolean;
    }
}
module.exports = {
    Aluno : Aluno,
    Curso : Curso
}
