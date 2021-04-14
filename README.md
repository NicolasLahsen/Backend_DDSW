##Requisitos
1. `Docker` y `Docker-compose` instalados.
2. `node` instalado
3. `yarn` instalado
4. Archivo `.env` con la siguiente estructura:
```
POSTGRES_PASSWORD= ...
POSTGRES_USER= ...
POSTGRES_DB= ...
```

##Instrucciones de instalación

1. `docker-compose build`
2. `docker-compose up`

Al correr este comando, debiese aparecer en consola:

```
...
web_1  | yarn run v1.22.5
web_1  | $ node app.js
web_1  | Executing (default): SELECT 1+1 AS result
web_1  | Connection has been established successfully.
web_1  | Example app listening at http://localhost:3000
```

Y al ir al localhost:3000 debiera aparecer un Hello World.