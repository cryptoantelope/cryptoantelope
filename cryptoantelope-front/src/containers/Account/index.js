import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import WalletRow from '../../components/walletRow'
import Link from '../../components/link'
import ErrorMessage from '../../components/errorMessage'

function Account() {
    const [hasError, setError] = useState(false)
    const [account, setAccount] = useState({})
    const { id } = useParams()

    


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`/api/account/${id}`)
    
                setAccount(res.data)
            } catch {
                setError(true)
            }
        }

        fetchData()
    }, [id])


    return (
        <div className="row">
            {hasError? <ErrorMessage />:''}
            <div className="col-12" style={styles.main}>
                <h2 style={styles.h2}>{account.name}</h2>
                <p><span className="badge badge-primary">{account.type}</span></p>
                <p>{account.description}</p>
                    
                <ul style={styles.links}>
                    {'links' in account? account.links.map((link, i) => 
                        <li key={link.id} style={{...styles.link, ...(!i && styles.firstLink)}}>
                            <Link type={link.type} to={`/link/${link.id}`}></Link>
                        </li>
                    ):''}
                </ul>
            </div>
            <div className="col-12">
                <h3>Wallets</h3>
                {'wallets' in account? account.wallets.map(wallet =>
                    <WalletRow key={wallet.id} address={wallet.address} chain={wallet.chain}  />
                ):''}
            </div>
        </div>
    )
}

const styles = {
    h2: {
        marginBottom: 0
    },
    links: {
        padding: 0
    },
    firstLink: {
        paddingLeft: 0
    },
    link: {
        display: 'inline',
        padding: '1rem',
        fontSize: '1.4rem'
    },
    main: {
        marginBottom: '2rem'
    }
}

export default Account