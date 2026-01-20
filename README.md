# 📝 Do Your Post!(Nome fictício) – Página de Postagem com API

Projeto desenvolvido como parte do **Projeto de Certificação 2 – Trilha 2 (HTML, CSS e JavaScript)** da plataforma **DEVstart**.

A aplicação simula a criação de postagens de blog/redes sociais, permitindo que o usuário informe um título e um conteúdo, envie esses dados para uma API pública e visualize o post retornado em tela.

---

## 🚀 Demonstração

O usuário pode:

* Inserir um título
* Escrever um conteúdo
* Enviar o post
* Visualizar o resultado renderizado dinamicamente na página

A comunicação com a API é feita utilizando o método **POST** via `fetch`.

---

## 🛠️ Tecnologias utilizadas

* HTML5 (estrutura semântica)
* CSS3 (estilização e responsividade)
* JavaScript (DOM, eventos e consumo de API)
* API pública: [JSONPlaceholder](https://jsonplaceholder.typicode.com)

---

## 📦 Funcionalidades

* Formulário para criação de post
* Envio de dados para API externa
* Renderização dinâmica do post retornado
* Layout responsivo
* Classe JavaScript para encapsular métodos HTTP (GET, POST, PUT, DELETE)

---

## 📁 Estrutura do projeto

```
posting--page/
├── index.html
├── style.css
├── main.js
├── src/
│   └── logo.png
└── README.md
```

---

## 🔌 API utilizada

Endpoint usado para criação de posts:

```
POST https://jsonplaceholder.typicode.com/posts
```

Formato enviado:

```json
{
  "title": "Título do post",
  "body": "Conteúdo do post",
  "userId": 1
}
```

---

## 🧠 Aprendizados

Neste projeto foram aplicados conceitos importantes como:

* Manipulação do DOM
* Eventos de formulário
* Requisições HTTP com fetch
* Programação orientada a objetos em JavaScript
* Consumo de APIs REST
* Separação de responsabilidades (HTML, CSS e JS)

---

## 👤 Autor

**Anderson Dantas Bernardo**

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

Sinta-se à vontade para utilizar, estudar e modificar 😊

---

⭐ Se este projeto te ajudou de alguma forma, deixe uma estrela no repositório!
