const express = require('express')
const router = express.Router()
const db = require('../../data/db.js')

const getLink = async (req, res) => {
    const {linkId} = req.params

    const link = await db('link').where({id: linkId})
    res.redirect(link[0].redirect)

    return await db('click').insert({linkId})
}



router.get('/:linkId', getLink)


module.exports = router