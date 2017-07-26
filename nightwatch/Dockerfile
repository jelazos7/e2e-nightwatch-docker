FROM blueimp/nightwatch:0.9

ARG http_proxy
ARG https_proxy
ARG no_proxy

ENV HTTP_PROXY $http_proxy
ENV HTTPS_PROXY $https_proxy
ENV NO_PROXY $no_proxy

COPY package.json /home/node/
RUN [[ -n "$HTTP_PROXY" ]] && npm config set proxy $HTTP_PROXY; \
    [[ -n "$HTTPS_PROXY" ]] && npm config set https-proxy $HTTPS_PROXY; \
    npm install

COPY *.json /home/node/
COPY *.js /home/node/
COPY specs/ /home/node/specs

VOLUME /home/node/videos
VOLUME /home/node/screenshots
VOLUME /home/node/reports
