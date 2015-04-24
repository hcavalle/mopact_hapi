#!/bin/bash
if [ -z "$NODE_ENV" ]
then
#dev db
  export NODE_HOST='localhost'
  export NODE_PORT='8081'
  export DB_DEV_HOST='localhost'
  export DB_DEV_USER='postgres'
  export DB_DEV_PASS=''
  export DB_DEV_NAME='mopact_hapi_dev'
else
  if [ $NODE_ENV -eq 'production' ]
  then
  #prod db
    export NODE_HOST='localhost'
    export NODE_PORT='8080'
    export DB_DEV_HOST='localhost'
    export DB_DEV_USER='mopact'
    export DB_DEV_PASS=''
    export DB_DEV_NAME='mopact_prod'

  else [ $NODE_ENV -eq 'test' ]
  #stage db
    export NODE_HOST='localhost'
    export NODE_PORT='8081'
    export DB_DEV_HOST='localhost'
    export DB_DEV_USER='postgres'
    export DB_DEV_PASS=''
    export DB_DEV_NAME='mopact_hapi_stage'
  fi
fi
