FROM nginx:stable
ADD ./nginx/default.conf /etc/nginx/conf.d/
ADD ./dist /usr/share/nginx/html
