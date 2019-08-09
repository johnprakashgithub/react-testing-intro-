FROM node:10
WORKDIR /app
ADD . /app
RUN npm upgrade && npm install
EXPOSE 3000
CMD npm start
