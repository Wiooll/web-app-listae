# Usa o Node.js para compilar os arquivos do Frontend
FROM node:22.14.0


WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Gera os arquivos estáticos (build)
RUN npm run build

# Usa o Nginx para servir os arquivos
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
