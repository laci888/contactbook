import React, { useState } from 'react'
import app from './firebase'


function InfoForm() {
    const realdb = app.database().ref();
    const [name, Setname] = useState('')
    const [num, Setnum] = useState('')
    const [email, Setemail] = useState('')
    
    function submit() {
        var data = {
            name: name,
            number: num,
            email: email
        }
        Setname('');
        Setnum('');
        Setemail('');
        realdb.push(data, function (err) {
            if (err)
              alert("Something went wrong while saving")  
        })
    }
    return (
        <div className="bg-white p-3 mb-5 rounded shadow-lg corner">
            <div className="mt-4">
                <input type="text" value={name} onChange={(e) => Setname(e.target.value)}
                    className="form-control mt-4" placeholder="Enter Name" />
                <input type="text" value={num} onChange={(e) => Setnum(e.target.value)}
                    className="form-control mt-4" placeholder="Enter Number" />
                <input type="text" value={email} onChange={(e) => Setemail(e.target.value)}
                    className="form-control mt-4" placeholder="Enter Email" />

                <input type="button" onClick={submit} value="Submit" className="mt-4 btn btn-primary" />
            </div>
        </div>
    );    
}
export default InfoForm;