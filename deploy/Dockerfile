FROM    centos:centos6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
RUN     yum install -y npm
# Install apache
RUN     yum install -y httpd

#env vars
RUN     export NODE_HOST='localhost'
RUN     export NODE_PORT='8081'
#dev db
RUN     export DB_DEV_HOST='localhost'
RUN     export DB_DEV_USER='postgres'
RUN     export DB_DEV_PASS=''
RUN     export DB_DEV_NAME='mopact_hapi_dev'
#test db
RUN     export DB_DEV_HOST='localhost'
RUN     export DB_DEV_USER='postgres'
RUN     export DB_DEV_PASS=''
RUN     export DB_DEV_NAME='mopact_hapi_dev'
#prod db
RUN     export DB_DEV_HOST='localhost'
RUN     export DB_DEV_USER='postgres'
RUN     export DB_DEV_PASS=''
RUN     export DB_DEV_NAME='mopact_hapi_dev'

# Bundle app source
COPY ../ /src

# Install app dependencies
RUN cd /src; npm install
RUN cd /src; source ./env.sh

EXPOSE  8081

CMD [ "node", "/src/app.js" ]

