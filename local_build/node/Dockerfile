FROM node:alpine as build

WORKDIR /home_page
COPY ../../package.json /home_page
RUN npm install
COPY ../.. /home_page
#EXPOSE 3000
CMD ["npm", "build"]



FROM nginx:alpine
#COPY --from=build /home_page/build /usr/share/nginx/html
COPY --from=build /home_page/src /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY local_build/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]