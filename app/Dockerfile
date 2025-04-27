FROM node:22.14

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar la carpeta 'src' al contenedor
COPY src ./src

# Exponer el puerto
EXPOSE 5000

# Comando por defecto
CMD ["npm", "start"]