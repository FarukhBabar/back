// const express = require('express')
import express from 'express'
import { Register,  Login, Passwordresetrequest, verifyotp } from '../Controller/Auth.js'
const router = express.Router()


router.post('/register-user' , Register )
router.post('/login' , Login)
router.post ('/request-reset-password' , Passwordresetrequest)
router.post('/verifyotp' , verifyotp)



export default  router