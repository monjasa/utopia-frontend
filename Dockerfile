FROM node:16.15.0 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ARG CONFIGURATION
RUN npm run build-$CONFIGURATION

FROM nginx:1.21.6
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/utopia /usr/share/nginx/html
