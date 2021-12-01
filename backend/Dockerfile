FROM node:14.17.5-alpine
USER node

# Install dependencies so that we could cache
WORKDIR /home/node/
COPY package.json /home/node/
RUN ls && npm install
COPY ./src ./src

# Start
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]