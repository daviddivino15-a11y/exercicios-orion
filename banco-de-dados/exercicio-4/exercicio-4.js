db = db.getSiblingDB('orion_blog');

// 1. Adicionar array
db.posts.updateOne(
  { titulo: "Entendendo bancos NoSQL" },
  {
    $set: {
      comentarios: [
        {
          usuario: "Luis David",
          texto: "Bem pratico esse conceito de schema flexivel.",
          data: new Date()
        },
        {
          usuario: "Ana",
          texto: "Ajudou bastante nos exercicios do bootcamp.",
          data: new Date()
        }
      ]
    }
  }
);

// 2. Filtrar posts que possuem a tag "nosql"
db.posts.find({ tags: "nosql" });

// 3. Filtrar posts de um autor especifico
db.posts.find({ autor: "Luis David" });