from node
COPY app.js .
COPY package.json .
COPY package-lock.json .
RUN npm install
CMD ["npm","start"]
