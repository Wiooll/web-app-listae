# --- Backend ---
    FROM python:3.10 AS backend

    WORKDIR /app
    
    # Copia apenas o requirements.txt primeiro para otimizar cache
    COPY requirements.txt ./

    # Instala as dependências do backend
    RUN pip install --no-cache-dir -r requirements.txt
    
    # Copia o restante dos arquivos do backend
    COPY . .
    
    # Expõe a porta do backend
    EXPOSE 5000
    
    # --- Frontend ---
    FROM node:20 AS frontend

    WORKDIR /app

    # Copia apenas o package.json primeiro para otimizar cache
    COPY package.json ./

    # Instala as dependências do frontend
    RUN npm install

    # Copia o restante dos arquivos do frontend
    COPY . .

    # Expõe a porta do frontend
    EXPOSE 80

    # Comando para iniciar o backend e o frontend
    CMD ["npm", "run", "dev"]


    