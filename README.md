# Barkr Fullstack Project

[Production Site](http://autumn-kim-barkr-app.com/)

Barkr is an application for dog owners to find a play date for their dog. Features include:
+ user sign-in/sign-up
+ create multiple dogs
+ create multiple play dates
+ view dog profiles

The application stack used to build Barkr consist of:
+ React (frontend framework)
+ Express (backend framework)
+ Sequelize (object-relation mapping framework)
+ Sqlite (database)

Authentication is implemented using Json web tokens (JWT) stored in browser cookies.

## Development Set Up

### Frontend

```plaintext
$ cd frontend
$ npm install
$ npm run dev
```


### Backend

```plaintext
$ cd backend
$ npm install
$ nodemon server.js
```

#### Seeding the database

```plaintext
$ cd backend
$ node db/scripts/seed.js
```

## Deploying for Production

### Frontend

```
$ cd frontend
$ npm run build
```

+ Go to [AWS Console](https://us-east-1.console.aws.amazon.com/console/home?).
+ Go to S3
  + Go to [autumn-kim-barker-app.com bucket](https://s3.console.aws.amazon.com/s3/buckets/autumn-kim-barkr-app.com)
  + Upload the contents of `/frontend/build` into the bucket
+ Go to [AWS cloudfront distribution](https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=us-east-1#/distributions/E10HTH6ICIZE57)
  + Create invalidation for `/*`