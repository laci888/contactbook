import React, {useEffect, useState} from 'react'
import InfoForm from './InfoForm'
import app from './firebase'

function Book() {
    const [contact_list, Setcontact_list] = useState([]);
    useEffect(() => {
        const realdb = app.database()

        realdb.ref().on('value', doc => {
            var data = doc.val()
            var contact_data = []

            for (var id in data) {
                contact_data.push({id, ...data[id]})
            }
            Setcontact_list(contact_data)
        })
    }, [])
    const table_details = contact_list.map(contact => {
        return <tr>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
            <td>{contact.email}</td>
        </tr>
    })
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <InfoForm/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <h2>List of Contacts</h2>
                    <table className="table mt-4">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Contact Name</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Contact Email</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {table_details}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Book;