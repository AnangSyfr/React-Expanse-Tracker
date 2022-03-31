import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Transaction from './components/Transaction'
import SaldoBox from './components/SaldoBox'
import AddTransaction from './components/AddTransaction'

const initTransactions = [
    {
        "id": "619238238921",
        "tanggal": new Date("01 Nov 2021 09:30").getTime(),
        "keterangan": "Gaji Bulanan",
        "nominal": 2500000
    },
    {
        "id": "619238238922",
        "tanggal": new Date("02 Nov 2021 09:30").getTime(),
        "keterangan":"Uang Lembur",
        "nominal": 200000
    },
    {
        "id": "619238238923",
        "tanggal": new Date("02 Nov 2021 09:30").getTime(),
        "keterangan":"Beli Makan",
        "nominal": -15000
    }
]

const App = () => {
    const [transactions, setTransactions] = useState(initTransactions)

    const handleTambahTransaksi = (data) => {
        let newTransaction = [
            ...transactions, data
        ]

        newTransaction.sort((a,b) => a.tanggal - b.tanggal)

        setTransactions(newTransaction)
    }

    const handleHapusTransaction = (e) => {
        const result = transactions.findIndex(transaction => (transaction.id === e.target.id))
        const newTransaction = transactions
        newTransaction.splice(result,1)
        setTransactions([...newTransaction])
    }

    return (
        <React.Fragment>
        <Header/>
        <SaldoBox transactions={transactions}/>
        <Transaction transactions={transactions} onHapusTransaction={handleHapusTransaction}/>
        <AddTransaction onTambahTransaction={handleTambahTransaksi}/>
        <Footer/>
        </React.Fragment>
    )
}

export default App