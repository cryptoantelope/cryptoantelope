const express = require('express')
const router = express.Router()

const account = require('./account')
const wallet = require('./wallet')

router.get('/account/:accountId', account.get)
router.get('/accounts', account.getAll)
router.get('/doge/:address', wallet.dogecoin)
router.get('/btc/:address', wallet.bitcoin)
router.get('/eth/:address', wallet.etherium)

module.exports = router