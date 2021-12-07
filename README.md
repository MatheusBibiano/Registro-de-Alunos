# Plataforma de registro de alunos

### Sobre

Projeto desenvolvido em um processo seletivo, proposto pela empresa [Delta Global](https://www.deltaglobal.com.br/), abrangendo Frontend, Backend e utilização de API's.
<br/>

### 📌 Conteúdo

* [Sobre](#sobre)
* [Status](#status)
* [Características](#características)
* [Requisitos](#requisitos)
* [Tecnologias](#tecnologias)
* [Autor](#autor)
* [Licença](#licença)
<br/>

### Status

Finalizado ✅
<br/>

### Características

- [x] Página **Início**
- [x] Página **Registro**
- [x] Página **Adicionar aluno**
- [x] Página **Editar aluno**
- [x] Página **Visualizar aluno**
- [x] Página **Remover aluno**
<br/>

### Requisitos

1. Para rodar a aplicação é necessário a instalação do [Node.js](https://nodejs.org/)
e do [MySQL](https://www.mysql.com/).

2. Clone este repositório em algum local do computador
por meio do terminal ou cmd:

```bash
    $ git clone https://github.com/MatheusBibiano/.git
```

### Configurando o Backend

1. Inicie o servidor MySQL, após isso, execute o arquivo .sql localizado em **./Backend/database/schema.sql**
atravez de um SGBD.

2. Feito isso, crie um usuário para acessar o banco **register** com as seguintes permissões: **SELECT**, **INSERT**, **UPDATE** e **DELETE**.

3. O próximo passo é navegar até o diretório **./Backend/** e instalar as dependências utilizando um gerenciador de pacotes:

* Linux & Windows
```bash
    /Backend$ npm install
```

4. Após concluir a instalação, execute a aplicação:

* Linux & Windows
```bash
    /Backend$ npm start
```
<br/>

### Configurando o Frontend

1.Navegue até o diretório **./Frontend/** e instale as dependências utilizando um gerenciador de pacotes:

* Linux & Windows
```bash
    /Frontend$ npm install
```

2. Em seguida, execute a aplicação:
* Linux & Windows
```bash
    /Frontend$ npm start
```

3. Por fim, acesse pelo navegador a seguinte URL: [localhost:3000/](http://localhost:3000/)

<br />

### Tecnologias

As seguintes tecnologias foram utilizadas na construção do projeto:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [HTML5](https://developer.mozilla.org/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/docs/Web/CSS)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Javascript](https://developer.mozilla.org/docs/Web/JavaScript)
- [ReactJS](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/)
<br/>

### Autor

| Matheus Bibiano                                       |
|-------------------------------------------------------|
| <img src="assets/me.png" width="150" height="150">|
| [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/matheus-bibiano-alves)|
<br/>

### Licença

[MIT](https://choosealicense.com/licenses/mit/)
