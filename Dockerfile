FROM node:lts-alpine

VOLUME [ "/docs" ]
EXPOSE 3000

RUN npm i -g pnpm

WORKDIR /docs

COPY . /docs/

RUN pnpm i

RUN adduser -D -H runner  && \
    chmod -R runner:runner /docs

USER runner

CMD ["pnpm serve"]