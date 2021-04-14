#Using Node image
FROM node:14

#Create a Working directory
WORKDIR /Backend_Seven

#Copying package.json and yarn.lock into the container
COPY ["package.json", "yarn.lock", "./"]

#Installing yarn dependencies from package.json
RUN yarn install

#Adding source code
COPY . .

#Setting up the run command
CMD [ "yarn", "start" ]