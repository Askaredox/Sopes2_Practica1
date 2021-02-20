# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /node/app

# install app dependencies
COPY package.json /node/app
RUN npm install --silent

# add app
COPY . /node/app

EXPOSE 3000
# start app
CMD ["npm", "start"]

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf