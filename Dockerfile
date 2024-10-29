FROM node:18

<<<<<<< HEAD
WORKDIR /app
=======
WORKDIR /pages
>>>>>>> main
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev
