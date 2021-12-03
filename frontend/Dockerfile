FROM node:14.17.5-alpine

# Install dependencies so that we could cache
WORKDIR /home/node
COPY package.json /home/node

RUN npm install

COPY src/* /home/node/src/
COPY public/* /home/node/public/

# Start
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]