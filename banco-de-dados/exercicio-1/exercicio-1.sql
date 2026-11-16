CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nome_curso VARCHAR(100) NOT NULL
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    curso_id INT NOT NULL,
    CONSTRAINT fk_curso FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

INSERT INTO cursos (nome_curso) VALUES 
    ('Desenvolvimento Web'),
    ('Ciência de Dados'),
    ('Engenharia de IA');

INSERT INTO alunos (nome, email, curso_id) VALUES 
    ('João Silva', 'joao.silva@email.com', 1),
    ('Maria Oliveira', 'maria.oliveira@email.com', 1),
    ('Carlos Souza', 'carlos.souza@email.com', 2),
    ('Ana Costa', 'ana.costa@email.com', 1);

SELECT * FROM alunos;