import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class About extends React.Component<{}, void> {
    constructor() {
        super();
    }

    public render() {
        return (
            <div>
                <h2>ABOUT</h2>
                <p>Wir sind die besten!</p>
            </div>
        );
    }
}