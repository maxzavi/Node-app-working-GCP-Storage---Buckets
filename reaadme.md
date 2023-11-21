# Node app working GCP Storage - Buckets

Create project:

```cmd
npm init -y
```

By Development, add dependency **nodemon**

```cmd
npm i -D nodemon
```

Add dependency **express**

```cmd
npm i express
```

## dotenv

Add dependency **dotenv**

```cmd
npm i dotenv
```

Creat file **.env** in root path:

```properties
GCP_BUCKET_NAME=demomzv
GCP_PATH_KEY=./keys/gcp-key.json
GCP_URI=https://storage.googleapis.com/demomzv/
``` 

Add dependency **@google-cloud/storage**

```cmd
npm i @google-cloud/storage
```

