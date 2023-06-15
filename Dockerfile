FROM node AS BUILD

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM nginx

COPY  --from=BUILD /app/dist/ /usr/share/nginx/html/
