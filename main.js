class PacoteBuscador {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }

    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}

const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");
const saidaTitulo = document.querySelector("#renderizador-titulo");
const saidaConteudo = document.querySelector("#renderizador-conteudo");
const form = document.querySelector("form");

const API = new PacoteBuscador("https://jsonplaceholder.typicode.com/posts");