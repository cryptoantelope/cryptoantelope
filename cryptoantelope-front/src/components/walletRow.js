import React, {useEffect, useState} from 'react'
import axios from 'axios'



const WalletRow = wallet => {
    const [hasError, setError] = useState(false)
    const [balance, setBalance] = useState('loading...') 
    const {address, chain} = wallet

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`/api/${chain}/${address}`)

                setBalance(res.data.balance)
            } catch {
                setError(true)
            }
        }

        fetchData()
    }, [wallet, chain, address])

    return (
        <div className="row" style={styles.walletContainer}>
            <div className="col-10">
                <h4 style={styles.chain}>{chain}</h4>
                <code>{address}</code>
            </div>
            <div className="col-2">
                {hasError? 'error':balance}
            </div>
        </div>
    )
}

const styles = {
    chain: {
        marginBottom: 0
    },
    walletContainer: {
        padding: "0.7rem 0"
    }
}

export default WalletRow 