require('dotenv').config()

if (process.env.CLUSTER_MODE === 'true') require('src/cluster')
else require('src/server')
