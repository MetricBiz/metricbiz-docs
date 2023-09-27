# OpenAPI Definition Starter

##Do changes

1. Update bundle:
```shell
redocly bundle http://localhost:9000/api-docs/documentation -o ./openapi/backend.yaml
```

2. Check if the file is valid:
```shell
redocly lint ./openapi/backend.yaml
```

3. Split the apis in multiple files (oposite of bundle)
```shell
redocly split ./openapi/backend.yaml --outDir ./openapi
```
