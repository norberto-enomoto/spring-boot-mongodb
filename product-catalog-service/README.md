# Comandos cURL da API do Catálogo de Produtos

## Criar um novo produto

```bash
curl -X POST http://localhost:8080/api/products \
     -H "Content-Type: application/json" \
     -d '{
         "name": "Smartphone XYZ",
         "description": "Modelo mais recente com recursos avançados",
         "price": 999.99,
         "categories": ["Eletrônicos", "Telefones"],
         "attributes": {
             "color": "Preto",
             "storage": "128GB"
         },
         "images": ["http://example.com/image1.jpg", "http://example.com/image2.jpg"],
         "stock": 100
     }'
```

## Obter todos os produtos

```bash
curl http://localhost:8080/api/products
```

## Obter um produto específico por ID

```bash
curl http://localhost:8080/api/products/{id}
```

## Atualizar um produto

```bash
curl -X PUT http://localhost:8080/api/products/{id} \
     -H "Content-Type: application/json" \
     -d '{
         "name": "Smartphone XYZ - Atualizado",
         "description": "Modelo mais recente com recursos avançados e novas melhorias",
         "price": 899.99,
         "categories": ["Eletrônicos", "Telefones", "5G"],
         "attributes": {
             "color": "Preto",
             "storage": "256GB"
         },
         "images": ["http://example.com/image1.jpg", "http://example.com/image2.jpg", "http://example.com/image3.jpg"],
         "stock": 150
     }'
```

## Deletar um produto

```bash
curl -X DELETE http://localhost:8080/api/products/{id}
```

Nota: Substitua `{id}` pelo ID real do produto para as operações GET, PUT e DELETE.

## Dicas Adicionais

1. Para formatar a saída JSON, você pode usar `jq`. Por exemplo:

   ```bash
   curl http://localhost:8080/api/products | jq
   ```

2. Para ver os cabeçalhos de resposta, adicione a flag `-i`:

   ```bash
   curl -i http://localhost:8080/api/products
   ```

3. Para informações mais detalhadas sobre a requisição e resposta, use a flag `-v`:

   ```bash
   curl -v http://localhost:8080/api/products
   ```

4. Se você estiver usando o Windows PowerShell, pode ser necessário escapar as aspas duplas no payload JSON. Use aspas simples para envolver todo o JSON e aspas duplas para os campos internos.