# Fullstack Project

+ User signup/signin
  + Auth overview
    + sign up - user gives us username and plain password
      + server hashes the password and stores username and hash into db
    + sign in - suspect user gives us username and plain password
      + server hashes the given password and checks if it matches the hash of the given user
  + password hashing
    + hashing is converting a string in one direction
      + 'alvin' -> wasd
      + 'alviN' -> syac
      + 'autumn' -> pota
      + 'alvinjasldkjsaldkjsa' -> jasd
      + https://www.pelock.com/products/hash-calculator
    + we use bcrypt for hashing (npm install bcrypt)
        + https://www.npmjs.com/package/bcrypt
  + with cookie session
  + sign cookie as a jwt (jsonwebtoken)
    + https://www.npmjs.com/package/jsonwebtoken
    + https://jwt.io/
  + *KEY AUTH TAKEAWAYS*
    + Why do we hash passwords?
      + If our db is compromised, we don't want user's plaintext passwords to be exposed
      + Hashing is one way
    + Why do we sign the cookie as a jwt (jsonwebtoken)?
      + So that a bad user cannot create a fake cookie, because they don't know our secret signing key
      + Only we can verify cookies as valid because we can check if the signature matches


TODO:
+ [X] create frontend folder,
+ [X] create signin/signup
+ [X] create db models
  + Dog
    + name
    + age
    + breed
    + personality
    + imageUrl
    + size
    + color
    + gender
  + endpoints
    +   GET /dogs
    +   POST /dogs
    +   PUT /dogs/:dogId
+ [X] require auth for dog POST/PUT
  + https://github.com/akim0409/hogwarts/blob/main/backend/middleware/session-middleware.js
+ [X] create one to many (one user to many dog) association
  + https://sequelize.org/docs/v6/core-concepts/assocs/#creating-the-standard-relationships
  + https://github.com/akim0409/hogwarts/blob/main/backend/db/models/associations.js
+ [X] create dog list page   !!!
  + frontend route /
  + render all the dogs
+ [X] dog show page
  + frontend route /dog/:dogId
+ [X] basic style dog item card
+ [X] basic style dog profile page
+ [ ] add 16 dog seeds 
+ [ ] choose two fonts, for headings/text
+ [ ] adding two more fields to the Dog model
  + Favorite game
  + Favorite food
  + Trained
+ [ ] add basic navbar
  + two buttons
    + dogs
    + sign in

Features:
  + Signup / Signin
  + Create a dog
  + View list of dogs
  + View full profile of dog
  + Set up play date
  + Create playdate featuring your dog, playdate shows up on dog profile
    + date/time/activity/location



  