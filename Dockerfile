FROM node:18-buster-slim

# postgres client
RUN apt -y update && apt -y upgrade
RUN apt -y install gnupg2 apt-transport-https curl
RUN curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ buster-pgdg main" | tee /etc/apt/sources.list.d/postgresql.list
RUN apt -y update
RUN apt -y install postgresql-client-14

# mysql client

ENV PG_HOST=""
ENV PG_PORT=""
ENV PG_USER=""
ENV PG_PASS=""
ENV BACKUP_PATH=""
ENV TARGET_DB="[default]"

ENV MODE=""

ENV IBM_API_KEY_ID=""
ENV IBM_IAM_SERVICE_ID=""
ENV IBM_AUTH_ENDPOINT=""
ENV IBM_ENDPOINT=""

# TODO