# Stage 0, based on Node.js, to build and compile Angular
FROM node:latest as node

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de la aplicación
COPY package*.json ./
COPY . .

# Instalar dependencias y compilar la aplicación
RUN npm install
RUN npm run build

# Stage 1, based on Nginx, to serve the compiled Angular app
FROM nginx:alpine

# Copiar archivos compilados al directorio de Nginx
COPY --from=node /app/dist/client /usr/share/nginx/html

# Exponer el puerto 80 para el servidor web Nginx
EXPOSE 80
