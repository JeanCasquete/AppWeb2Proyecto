#Imagen
FROM node
#Copiamos el package.json
COPY package*.json ./
#Establecer caperta dentro de docker
RUN npm install
# Copiar la carpeta dist
COPY dist/ /VAR/backend/dist/
# Copiar la carpeta src
COPY src/ /VAR/backend/src/
WORKDIR /VAR/backend
#Instalamo la depedencia
#Puerto
EXPOSE 4000
# Comando para ejecutar la aplicación
CMD [ "node", "dist/main.js" ]