import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router';

export class User extends React.Component<{ params: any }, void> {
    constructor() {
        super();
    }

    public render() {
        return (
            <div>
                <h2>USER</h2>
                {this.props.params.id}
            </div>
        );
    }
}