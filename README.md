# Calorie Check

> A web app for tracking calorie intake over the course of a work week.

Built using (amongst other things):
[MongoDB](https://www.mongodb.com/)
[Express](https://expressjs.com/)
[React](https://reactjs.org/)
[Nodejs](https://nodejs.org/en/)

# Getting Started

1. Create a .env file that specifies the MangoDB database URL as such. "Mongo = {insert URL}"
2. `npm install`
3. `npm start`

## Deploy to Heroku

1. Create new Heroku app.
   `heroku create`

2. Set Heroku environment database URL.
   `heroku config: set Mongo = "{insert MongoDB URL}"`

3. Push app to Heroku
   `git push heroku main`

##Couple'o Notes
If planning to run on a local environment, note that server.js points to a React build which is not present in the repo. to solve this problem, simply run `npm run build` from the create folder.
