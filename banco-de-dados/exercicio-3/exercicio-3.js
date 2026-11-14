// 1 e 2
db.posts.insertOne({
    titulo: "Primeiros passos com Docker",
    autor: "David Divino",
    conteudo: "Apredendo a subir bancos de dados isolados em containers"});

    // 3.

    db.posts.insertOne({
titulo: "Entendendo bancos NoSQL",
autor: "Carlos Silva",
conteudo: "No MongoDB cada documento pode ter campos diferentes na mesma colecao.",
tags: ["nosql", "flexivel", "mongoDB"]})

// 4.
db.posts.find();
