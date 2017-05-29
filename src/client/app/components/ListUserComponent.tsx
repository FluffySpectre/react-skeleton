import * as React from 'react';
import { UserViewModel } from '../viewmodels';
import { UserService } from '../services/userService';
import { Link } from 'react-router';

interface UserProps {
    tableClasses: string
}

interface UserState {
    users: Array<UserViewModel>
}

export class ListUserComponent extends React.Component<UserProps, UserState> {
    constructor() {
        super();

        this.state = { users: new Array<UserViewModel>() };

        this.loadData = this.loadData.bind(this);
    }
    
    private loadData() {
        UserService.GetAll().done((data) => this.setState({ users: data })).fail((err) => console.log(err)); 
    }

    render() {
        return (
            <table className={this.props.tableClasses}>
                <thead>
                    <tr>
                        <th>Vorname</th><th>Nachname</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={this.loadData}>Lade Daten...</button>
                        </td>
                    </tr>
                    {
                        this.state.users.map((user) =>
                            <tr key={user.id}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>
                                    <Link to={"/user/" + user.id}>Bearbeiten</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}