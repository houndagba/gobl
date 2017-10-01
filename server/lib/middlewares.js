import morgan from 'morgan'
import passport from 'passport'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'


module.exports = (app) => {
  dotenv.config()
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
}
