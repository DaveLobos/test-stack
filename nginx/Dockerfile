FROM nginx:alpine

COPY ssl.crt /etc/nginx/ssl.crt
COPY ssl.key /etc/nginx/ssl.key
COPY default.conf /etc/nginx/conf.d/default.conf

COPY public /usr/share/nginx/public/

EXPOSE 8080
