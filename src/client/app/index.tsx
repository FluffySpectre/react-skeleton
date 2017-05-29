import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

import { Home, Users, User, About } from './components/index';

export class App extends React.Component<{}, void> {
    constructor() {
        super();
    }

    public render() {
        return (
            <div className='col-md-8'>
                <h1>Hallo TSX!</h1>

                <ul>
                    <li><Link to="/">Start</Link></li>
                    <li><Link to="/users">Benutzer</Link></li>
                    <li><Link to="/about">Über uns</Link></li>
                </ul>

                <div className="content">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

function render() {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/users" component={Users} />
                <Route path="/user/:id" component={User} />
                <Route path="/about" component={About} />
            </Route>
        </Router>
        , document.getElementById('app'));
}
render();
