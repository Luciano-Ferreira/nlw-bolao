# `server`

> TODO: description

## Usage

```bash
  yarn 
  yarn upgrade --latest

```


```bash
## create migrations
  yarn prisma migrate dev
```

```bash
  ## Run prisma studio
  yarn prisma studio

  ## Generate Diagram 
  ## To generate Diagram you need to add generator in the schema.prisma
  yarn prisma generate
```


## Technologies :rocket:

- Prisma
  - @prisma-client
  - prisma-erd-generator
  - @mermaid-js/mermaid-cli

- Fastify
  - @fastify/cors
- Typescript
  - tsx


## ERD Diagram

![ERD](https://user-images.githubusercontent.com/46464433/199371454-7b3edbc6-52bd-440f-ac25-312f12e7d88e.svg)


## Seeds

```bash
  npx prisma db seed
```