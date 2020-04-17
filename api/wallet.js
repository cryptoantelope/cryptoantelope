const axios = require('axios')
const {ETH_API_KEY} = require('../config')

const bitcoin = async (req, res) => {
    const {address} = req.params

    try {
        const url = `https://blockchain.info/balance?active=${address}`
        const btcRes = await axios.get(url)

        if(!address in btcRes)
            return res.status(500).json({error: true})


        return res.json({balance: btcRes.data[address].final_balance.toFixed(8)})

    } catch {
        return res.status(500).json({error: true})
    }
    
}




const dogecoin = async (req, res) => {
    const {address} = req.params

    try {
        const url = `https://dogechain.info/api/v1/address/balance/${address}`
        const dogeRes = await axios.get(url)
        
        if(!dogeRes.data.success)
            return res.status(500).json({error: true})

        return res.json({balance: dogeRes.data.balance})
        
    } catch {
        return res.status(500).json({error: true})
    }
}




const etherium = async (req, res) => {
    const {address} = req.params

    if(!ETH_API_KEY) {
        console.error('Set up ETH_API_KEY')
        return res.status(500).json({error: true})
    }

    try {
        const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${ETH_API_KEY}`
        const ethRes = await axios.get(url)

        if(ethRes.message === 'OK')
            return res.json({balance: (Number(ethRes.data.result)/(10**18)).toFixed(8)})
        
        return res.status(500).json({error: true})
        
    } catch {
        return res.status(500).json({error: true})
    }
}



module.exports = {bitcoin, dogecoin, etherium}