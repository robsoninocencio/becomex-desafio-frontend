# Para subir este frontend siga as instruções abaixo:

## Tenha o docker instalado e o repositório clonado.

### Primeiro baixe o backend e suba os servidores veja como no link abaixo:

https://github.com/robsoninocencio/becomex-desafio-backend

### Execute:
```
docker-compose up -d
```

### Se fizer alterações no código e quiser ver suas alterações funcionando execute:
```
docker-compose up -d --build
```

## Acessar no browser as rotas:

http://localhost:3000


## Para baixar o servidor ao terminar os testes execute:
```
docker-compose down
```

## Descrição do projeto:

Este projeto é um frontend que sobe um servidor nginx rodando uma aplicação react feita com typescript.
O projeto exibe uma lista de países que ao clicar traz mais detalhes do pais clicado. O objetivo deste projeto é que essa lista é carregada via chamada a uma api que funciona como um cache em Redis da Api original.