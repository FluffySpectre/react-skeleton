import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Home extends React.Component<{}, void> {
    constructor() {
        super();
    }

    public render() {
        return (
            <div>
                <h2>HOME</h2>
                <p>The home page...</p>
            </div>
        );
    }
}