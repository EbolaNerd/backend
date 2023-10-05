FROM node:20-alpine3.18
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY --chown=app:app package*.json .
RUN npm install
COPY --chown=app:app . .

EXPOSE 3001

CMD [ "npm", "start" ]
