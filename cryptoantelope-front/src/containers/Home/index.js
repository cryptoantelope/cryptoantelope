import React, {useState, useEffect} from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import axios from 'axios'

import ErrorMessage from '../../components/errorMessage'
import Link from '../../components/link'


const Home = () => {
    const [hasError, setError] = useState(false)
    const [accounts, setAccounts] = useState([])
    
    


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('/api/accounts')
    
                setAccounts(res.data)
            } catch {
                setError({hasError: true})
            }
        }
        
        fetchData()
    }, [])


    return (
        <div className="row">
            {hasError? ErrorMessage:''}
            <div className="col">
                <h1>Most Viewed</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Web</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account, i) => 
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td><LinkRouter to={`/account/${account.id}`}>{account.name}</LinkRouter></td>
                                <td><Link to={`/link/${account.urlId}`} type={account.urlType}>{account.url}</Link></td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home