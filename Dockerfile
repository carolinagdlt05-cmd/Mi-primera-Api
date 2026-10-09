# Usar la imagen oficial de Node.js (versión ligera Alpine)
FROM node:18-alpine

# Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Exponer el puerto 3000 que utiliza Express
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
