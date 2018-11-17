# Build Step
FROM node:10

# Create app directory
WORKDIR /usr/src/heroback/

# Copy only the package.json and lock file and install app dependencies
COPY ./package.json ./yarn.lock /usr/src/heroback/
RUN yarn install --ignore-engines

# Copy the app source code and compile it
COPY . /usr/src/heroback/
RUN yarn build

# Prepare global link
RUN chmod +x ./dist/bin/*
RUN yarn link

ENTRYPOINT [ "/usr/local/bin/heroback" ]