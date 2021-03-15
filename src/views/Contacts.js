import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                Contact ... someone?
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contact.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.first_name}</td>
                                <td>{contact.last_name}</td>
                                <td>{contact.address}</td>
                                <td>{contact.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
