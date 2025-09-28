FROM ubuntu:20.04
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && apt-get clean
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY server.js /app/server.js
EXPOSE 3000
CMD ["node", "server.js"]