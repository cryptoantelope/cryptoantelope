const db = require('../data/db.js')


const getAll = async (req, res) => {
    const accounts = await db('account')
                    .select({id: 'account.id', name: 'account.name', url: 'link.url', urlId: 'link.id', urlType: 'link.type'})
                    .leftJoin('link', function() {
                        this.on('link.accountId', '=', 'account.id').andOn('link.type', '=', db.raw('?', ['web']))
                    })
                        
                        
    return res.json(accounts)
}

const get = async (req, res) => {
    const {accountId} = req.params
    const account = await db('account').where({id: accountId})
    const wallets = await db('wallet').where({accountId})
    const links = await db('link').select({id: 'id', url: 'url', type: 'type'}).where({accountId})

    return res.json({...account[0], wallets, links})
}


module.exports = {get, getAll}