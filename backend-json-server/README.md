# Servidor JSON

Vamos utilizar uma biblioteca npm chamada JSON server para criar uma API rest fake a partir de um arquivo JSON. 

## Instalação

Caso ainda não tenha na sua máquina, pelo prompt de comando, execute ```npm install -g json-server```

## Criar o arquivo JSON

Para simular uma APi Rest, crie um arquivo chamado `db.json` na pasta do backend com o seguinte conteúdo:

```javascript
{
  "transferencias": [
    {
      "id": "1",
      "valor": 35,
      "destino": "1212-1",
      "data": "2020-11-04T16:30:10.710Z"
    },
    {
      "id": "2",
      "valor": 40,
      "destino": "1213-1",
      "data": "2020-11-04T21:24:10.710Z"
    },
    {
      "id": "3",
      "valor": 12.5,
      "destino": "1214-1",
      "data": "2020-11-05T21:14:10.710Z"
    }
  ]
}
```

## Iniciar o servidor JSON

execute o comando ```json-server --watch db.json```

## Acessar a API

Para verificar a API fake funcionando, abra seu browser e digite a URL: ```http://localhost:3000/transferencias```



