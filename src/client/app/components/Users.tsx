import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ListUserComponent } from './ListUserComponent';

export class Users extends React.Component<{}, void> {
    constructor() {
        super();
    }

    public render() {
        return (
            <div>
                <h2>USERS</h2>
                <ListUserComponent tableClasses="table table-striped" />
            </div>
        );
    }
}