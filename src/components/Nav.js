import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
import { unAuthenticateUser } from '../actions/authedUser';

class Nav extends Component {
    constructor(props) {
        super(props);
        
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut() {
        this.props.dispatch(unAuthenticateUser());
    }
    
    render() {
        const { currentUser } = this.props;

        return (
            <nav className='nav'>
                <ul>
                    <li className="current-user">
                        Hey, {currentUser}!
                    </li>
                    <li>
                        <NavLink to='/' exact activeClassName='active' className="nl">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active' className="nl">
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active' className="nl">
                            Leaderboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/' >
                            <button onClick={this.handleLogOut}>Log out</button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default connect()(Nav);