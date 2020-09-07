# libras2pt

A service that translates libras text to portuguese

## Installation

### Install dependencies

Default npm install:

```
npm install
```

## Setup


### MongoDB

The application expect a `setup.json` file in the root, which contains setup configuration to access an `MongoDB` instance. It should have this structure:

```json
{
  "dburl": "'mongodb://localhost:27017",
  "dbname": "libras",
  "options" : {}
}
```

To work with `IBM Cloud` see the [reference](https://cloud.ibm.com/docs/databases-for-mongodb?topic=databases-for-mongodb-external-app&programming_language=javascript) and following snipet:

```json
{
  "dburl": "mongodb://<username>:<password>@<host>:<port>,<host>:<port>/<database>?authSource=admin&replicaSet=replset",
  "dbname": "libras",
  "options" : { 
		"tls": true,
		"tlsCAFile": "/path/to/cert",
		"useUnifiedTopology": true 
	}
}
```

> You must get the credentials and certificated from the service

### Watson services

We use two services from IBM cloud, Watson NLU (https://www.ibm.com/watson/services/natural-language-understanding/) and Watson Translator (https://www.ibm.com/watson/services/language-translator/). Those services are used to process the texts and get the structure that will be mapped to a translation. You should have an account on IBM Cloud and this services up and running. Then, from the service settings page, get the credentials to fill the following json format and save in the root with the name `credentials.json`:

```json
{
	"TRANSLATOR_URL": <URL>,
	"TRANSLATOR_API_KEY": <API_LEY>,
	"NLU_URL": <URL>,
	"NLU_API_KEY": <API_LEY>
}
```

## Run

After all set, then:

```
npm start
```

It should run on port `3005`. To change, set a environment variable:

```
export PORT=<YOU_DESIRED_PORT>
```