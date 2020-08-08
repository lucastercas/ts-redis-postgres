FROM node
WORKDIR /opt/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["node", "/opt/app/dist/app.js"]