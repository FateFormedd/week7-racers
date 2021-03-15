import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                This is the Home Page
                <h3>Welecome {this.props.name}</h3>
                <form onSubmit={(event) => this.props.handleSubmit(event)}>
                    <input type="text" className="form-control" name="year" placeholder="Year"/>
                    <input type="text" className="form-control" name="season" placeholder="Season"/>
                    <button type="submit" className="btn btn-outline-info">Submit</button>
                </form>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Nationality</th>
                            <th>Contructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.racers.map((racer, index) => (
                            <tr key={index}>
                                <td>{racer.position}</td>
                                <td>{racer.points}</td>
                                <td>{racer.wins}</td>
                                <td>{racer.Driver.givenName} {racer.Driver.familyName}</td>
                                <td>{racer.Driver.dateOfBirth}</td>
                                <td>{racer.Driver.nationality}</td>
                                <td>{racer.Constructors[0].name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
