let curso = require('./index');
//aluno 1
let aluno = new curso.Aluno('louis');
aluno.adicionarNaLista(4.5);
aluno.adicionarNaLista(5.5);
aluno.adicionarNaLista(7.4);
aluno.adicionarNaLista(3.6);
aluno.adicionarNaLista(9.8);
aluno.faltas();
aluno.faltas();

//aluno 2
let aluno_dois = new curso.Aluno('Maicon');
aluno_dois.adicionarNaLista(4.5);
aluno_dois.adicionarNaLista(8.5);
aluno_dois.adicionarNaLista(9.4);
aluno_dois.adicionarNaLista(6.6);
aluno_dois.adicionarNaLista(7.8);
aluno_dois.faltas();
aluno_dois.faltas();
aluno_dois.faltas();
aluno_dois.faltas();

//aluno 3
let aluno_tres = new curso.Aluno('Cláudio');
aluno_tres.adicionarNaLista(3.2);
aluno_tres.adicionarNaLista(9.2);
aluno_tres.adicionarNaLista(7.2);
aluno_tres.adicionarNaLista(9.2);
aluno_tres.adicionarNaLista(6.2);
aluno_tres.faltas();
aluno_tres.faltas();
aluno_tres.faltas();
aluno_tres.faltas();

//curso
let curso_dh = new curso.Curso('ctd', 6, 4);
curso_dh.addAlunos(aluno);
curso_dh.addAlunos(aluno_dois);
curso_dh.addAlunos(aluno_tres);

//aprovação do aluno 2 e lista de alunos aprovados
console.log(curso_dh.aprovacaoAluno(aluno_dois));
console.log(curso_dh.aprovacoes());