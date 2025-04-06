FROM ubuntu/nginx

COPY ./build/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 4133

CMD ["nginx", "-g", "daemon off;"]