# App React com backend em Python (flask)

1) Entrar na pasta backend e iniciar o Flask API

- criar o ambiente virtual (python3 -m venv venv)
- ativar o ambiente (source ./venv/bin/activate)
- instalar bibliotecas (pip install -r requiriments)
- iniciar a API (python main.py)

2) Na pasta react-to-do iniciar a aplicaçao React

npm run start

3) Compilar a aplicaçao React

npm run build

Soluçoes de problemas encontrados:

1) após o build a página ficava em branco: soluçao adicionar a tag "homepage":"." na segunda linha do arquivo package.json

2) devido restriçoes de segurança CORS foi necessário configurar a aplicaçao React para enviar os headers necessários para a aplicaçao React enviasse o objeto json para o back-end Python.

headers: new Headers({
                "Content-Type": "application/json",
                "Access-Control-Request-Headers": "Content-Type,API-Key",
                "Accept": "application/json"

            }),

3) na API Flask foi necessário adicionar CORS para que a requisiçao POST e demais fossem aceitas devido a segurança 

IMPORTS
from flask_cors import CORS, cross_origin

CONFIGURAÇAO DA APLICAÇAO
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, resources={r"/todo/*": {"origins": "*"}}, support_credentials=True)

DECORATOR EM CADA UMA DAS ROTAS PARA PERMITIR A COMUNICAÇAO
@cross_origin(origin='*',headers=['Content-Type','Authorization','access-control-allow-origin'],supports_credentials=True)