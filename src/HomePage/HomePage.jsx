import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services';

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
        const { user, clients } = this.state;
        console.log(clients);
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & Basic HTTP Authentication!!</p>
                <h3>Users from secure api end point:</h3>
                {/* {users.loading && <em>Loading users...</em>} */}
                {clients.length &&
                    <ul>
                        {clients.map((client, Index) =>
                            <li key={client.Id}>
                                {client.Name + ' ' + client.LastName}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export { HomePage };