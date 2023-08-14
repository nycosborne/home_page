FROM node:alpine

WORKDIR /home_page
COPY package.json /home_page
RUN npm install
COPY . /home_page
ENV REACT_APP_NAME=myName
EXPOSE 3000
CMD ["npm", "start"]
