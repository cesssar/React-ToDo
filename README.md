# App React com backend em Python (flask)

Simples aplicação de lista de tarefas com front-end em React e back-end em Python.
Incluí dicas de solução de problemas encontrados.
Implementado a partir do post [https://blog.debugeverything.com/pt/do-zero-construindo-um-app-com-react-js/]

![Flask + React](https://i0.wp.com/blog.learningdollars.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-05-at-8.38.17-AM-1.png?resize=768%2C266&ssl=1)

### 1) Entrar na pasta back-end e iniciar o Flask API

- criar o ambiente virtual (python3 -m venv venv)
- ativar o ambiente (source ./venv/bin/activate)
- instalar bibliotecas (pip install -r requiriments.txt)
- iniciar a API (python main.py)


### 2) Na pasta react-to-do iniciar a aplicaçao React

```sh
npm run start
```


### 3) Compilar a aplicação React

```sh
npm run build
```


## Soluções de problemas encontrados:

1) após o build a página ficava em branco: solução adicionar a tag "homepage":"." na segunda linha do arquivo package.json


2) devido restrições de segurança CORS foi necessário configurar a aplicação React para enviar os headers necessários, dessa forma o objeto json é enviado para o back-end Python.


> headers: new Headers({
>                "Content-Type": "application/json",
>               "Access-Control-Request-Headers": "Content-Type,API-Key",
>               "Accept": "application/json"
> }),


3) na API Flask foi necessário adicionar CORS para que a requisição POST e demais fossem aceitas devido a segurança CORS

> from flask_cors import CORS, cross_origin

> app = Flask(__name__)
> app.config['CORS_HEADERS'] = 'Content-Type'
> CORS(app, resources={r"/todo/*": {"origins": "*"}}, support_credentials=True)

> DECORATOR EM CADA UMA DAS ROTAS PARA PERMITIR A COMUNICAÇAO
> @cross_origin(origin='*',headers=['Content-Type','Authorization','access-control-allow-origin'],supports_credentials=True)
