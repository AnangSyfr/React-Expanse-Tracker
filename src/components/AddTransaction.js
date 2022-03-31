import React, { useState } from "react"
const AddTransaction = (props) => {
    const [formInput, setFormInput] = useState({
        tanggal:"",
        keterangan: "",
        nominal:""
    })

    const handleInputChange = (e) => {
        setFormInput({...formInput, [e.target.name]:e.target.value})
        console.log(formInput)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        let tanggalInput = new Date()
        tanggalInput.setDate(parseInt(formInput.tanggal.substr(0,2)))
        tanggalInput.setMonth(parseInt(formInput.tanggal.substr(3,2) - 1))
        tanggalInput.setYear(parseInt(formInput.tanggal.substr(6,4)))
        props.onTambahTransaction({
            "id": Math.floor(Math.random() * 100000000000).toString(),
            "tanggal": tanggalInput.getTime(),
            "keterangan": formInput.keterangan,
            "nominal": parseInt(formInput.nominal)
        })
    }

    return (
        <section id="add-transaction">
            <div className="container py-5">
                <h2 className="fw-light mb-3 text-center">Tambah Transaksi</h2>
                <hr className="w-75 mx-auto mb-4"/>
                <form onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-12 col-md-3 col-lg-2 mb-3">
                            <label htmlFor="tanggal" className="form-label">Tanggal</label>
                            <input type="text" id="tanggal" name="tanggal" placeholder="dd/mm/YYYY" className="form-control" onChange={handleInputChange}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 mb-3">
                            <label htmlFor="keterangan" className="form-label">keterangan</label>
                            <input type="text" id="keterangan" name="keterangan" className="form-control" onChange={handleInputChange}/>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3 mb-3">
                            <label htmlFor="nominal" className="form-label">Nominal* (+/-)</label>
                            <input type="text" id="nominal" name="nominal" placeholder="-150000" className="form-control" onChange={handleInputChange}/>
                        </div>
                        <div className="col-12 col-ld-2 mb-3 d-flex align-items-end">
                            <button type="submit" className="btn btn-primary flex-fill">Tambah</button>
                        </div>
                    </div>
                    <p><small> *Jika diisi angka negatif, akan tercatat di pengeluaran</small></p>
                </form>
            </div>
        </section>
    )
}

export default AddTransaction