SELECT a.nome AS aluno, c.nome_curso AS curso
FROM alunos a 
INNER JOIN cursos c ON a.curso_id = c.id;

--2. JOIN COM WHERE

SELECT a.nome AS aluno, a.email, c.nome_curso AS curso
FROM alunos a
INNER JOIN cursos c ON a.curso_id = c.id
WHERE c.nome_curso = 'Desenvolvimento Web';

-- 3. UPDATE e validação
 UPDATE alunos SET curso_id = 2 WHERE nome = 'Maria Oliveira';

 SELECT a.nome AS aluno, c.nome_curso AS curso
 FROM alunos a
 INNER JOIN cursos c ON a.curso_id = c.id;


 -- Extra: LEFT JOIN(cursos sem alunos)

 SELECT c.id, c.nome_curso
 FROM cursos c
 LEFT JOIN alunos a ON c.id = a.curso_id
 WHERE a.id IS NULL;