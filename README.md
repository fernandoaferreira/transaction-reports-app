## Transaction Reports

Microservices responsavel por efetuar as buscas de extrato

![picpay2](https://user-images.githubusercontent.com/33635248/221704092-c6d798fd-3698-4d3c-abdb-7f61de0e5224.jpg)

Transaction Reports tem a responsabilidade unica de buscar os extratos afim não ter concorrencias com as chamadas de operação.

GET http://localhost:4003/extract/userId

Response sera um array de transações para o id solicitado com o saldo total no final 

## Stay in touch

- Author - [Fernando Antunes]

