# Node app working GCP Storage - Buckets

Create project:

```cmd
npm init -y
```

## Nodemon

By development, add dependency **nodemon**

```cmd
npm i -D nodemon
```

In **package.json** add script **dev**:
```json
  "scripts": {
    "dev": "nodemon index.js"
  },
```

Run in terminal:

```cmd
npm run dev
```

## Express

Add dependency **express**

```cmd
npm i express
```

## Dotenv

Add dependency **dotenv** by environment variables

```cmd
npm i dotenv
```

Creat file **.env** in root path:

```properties
GCP_BUCKET_NAME=demomzv
GCP_PATH_KEY=./keys/gcp-key.json
GCP_URI=https://storage.googleapis.com/demomzv/
``` 

Add file **config.js** in folder **utils**:

```js
require('dotenv').config()
module.exports = process.env
```

Import in files:

```js
const config = require('../utils/config')

```
## GCP Storage

Add dependency **@google-cloud/storage**

```cmd
npm i @google-cloud/storage
```

