import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services';
import { Table } from 'react-bootstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            client: {},
            clients: []
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            clients: { loading: true }
        });
        userService.getAll().then(clients => this.setState({ clients }));
    };

    render() {
        const { user } = this.state;
        let clientsRows;
        if(this.state.clients.length>0){
            clientsRows = this.state.clients.map((client)=> {
                return (
                    <tr key={client.Id}>
                        <td>{client.Id}</td>
                        <td>{client.Name}</td>
                        <td>{client.LastName}</td>
                    </tr>
                )
            });
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.Username}!</h1>
                <h3>This is the list of insurances and clients:</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientsRows}
                    </tbody>
                </Table>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export { HomePage };