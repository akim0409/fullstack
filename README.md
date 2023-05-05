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
+ [X] add 16 dog seeds 
+ [X] choose two fonts, for headings/text
+ [X] adding two more fields to the Dog model
  + Favorite game
  + Favorite food
  + Trained
+ [X] add basic navbar
  + two buttons
    + dogs
    + sign in
+ [X] create Date model
  + location (string)
  + activity (string)
  + max number dogs (number)
  + date (https://sequelize.org/docs/v6/core-concepts/model-basics/#dates)
+ [X] create dates in the seeds
+ [X] create "My Dogs" vs "Dogs on Barkr" on dog list page  
+ [X] create date list page
  + frontend route /dates
+ [X] read session token on frontend to display username / sign out
  + https://www.npmjs.com/package/js-cookie 
  + https://www.npmjs.com/package/jwt-decode
  + sign out
    + 1. setSessionToken to null
    + 2. delete the cookie from the browser
  + make sign out dropdown pop out of username
+ [X] add owned property in GET dog/:dogId
  + on dog show page,
    + if the user owned this dog, render edit button
+ [X] create dog update page
+ [X] add dropdowns
+ [X] add submit button and implement submit  
+ [X] create dog create page
  + reuse the update form?
+ [X] signup form validations
+ [X] implement dog create page handleSubmit, handleCancelClick
+ [X] make the title a prop for create/update
+ [X] the seeds should be created with valid dropdown values
+ [X] update/create dog form validations
  + [X] refactor DropdownField (don't include any error state)
  + [X] refactor TextAreaField (include error state)
  + [X] show validations errors on submit / block submit
+ [X] add footer to site
  + logo
  + by Autumn Kim
  + buttons to go to parts of site (dogs show, dog create)
  + https://structy.net/
+ [X] if the user has no dogs, show the AddDog component  
+ [X] if dog image url is invalid, use some placeholder image
  + create a DogImage component that renders `<img>`
    + inside the component do a fetch request to the imageUrl 
      + if you get back 200, use the imageUrl otherwise display some default
+ [X] style desktop menu links if active
+ [X] fix footer buttons
  + [X] remove duplicate dates
  + [X] add linkedin/github links
+ [X] create association between dogs and Date
+ [X] create Date endpoints
  + [X] GET /dates 
  + [X] GET /dates/:dateId 
  + [X] DELETE /dates/:dateId
  + [X] POST /dates
  + [X] UPDATE /dates/:dateId
  + [X] POST /dates/:dateId/dogs/:dogId
      + adds a dog to a date
      + return error if date is full
+ [X] Date list page
  + [X] fix mobile styling of items
  + [X] tweak colors
  + [X] alternate b/w orange/blue
+ [X] add loading spinner to all fetch pages 
+ [X] Date show page
  + [X] clicking on a guest goes to their profile
+ [X] Loading state for sign in/sign up
+ [X] DogDateList
  + Add an unstyled form to create a DogDate
+ [X] Implement date picker
  + https://www.npmjs.com/package/react-datetime
+ [X] Style DogDateCreateForm
+ [X] Fix default value dropdown bug
+ [X] Implement DogDateCreateForm frontend validations
+ [X] Put a spinner in the create button when the request is loading
+ [ ] Date card on date show page has hover effect but navigates nowhere
  + refactor onClick to receive through props so we can optionally apply onclick
+ [ ] Images and Banners
  + https://www.freepik.com/
  + DogsListPage
    + [ ] image
    + [ ] banner text 
  + DoggyDatesListPage
    + [ ] image
    + [ ] banner text 
  + SignInPage
    + [ ] image
    + [X] banner text 
    


Features:
  + Signup / Signin
  + Create a dog
  + View list of dogs
  + View full profile of dog
  + Set up play date
  + Create playdate featuring your dog, playdate shows up on dog profile
    + date/time/activity/location



  