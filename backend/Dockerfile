FROM node:17
WORKDIR /backend
COPY . /backend
RUN npm install
EXPOSE 5000
CMD ["nodemon", "server.js"]