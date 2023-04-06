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
+ [ ] create db models
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
+ [ ] create association


  