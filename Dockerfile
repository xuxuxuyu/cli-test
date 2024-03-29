FROM registry.cn-hangzhou.aliyuncs.com/choerodon-tools/frontbase:0.5.0

RUN echo "Asia/shanghai" > /etc/timezone;
ADD ./dist /usr/share/nginx/html
ADD ./docker/default.conf /etc/nginx/nginx.conf
COPY ./docker/enterpoint.sh /usr/share/nginx/html
RUN chmod 777 /usr/share/nginx/html/enterpoint.sh
ENTRYPOINT ["/usr/share/nginx/html/enterpoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
