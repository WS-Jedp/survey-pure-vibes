FROM node:latest

COPY ["package.json", "package-lock.json", "/home/pure-vibes/survey/"]

WORKDIR /home/pure-vibes/survey
RUN npm install
COPY [".", "/home/pure-vibes/survey/"]
EXPOSE 8000

CMD ["npm", "run", "dev"]
