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
        const { authedUser } = this.props;

        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        {authedUser}
                    </li>
                    <li>
                        <NavLink to='/' exact>
                            <button onClick={this.handleLogOut}>Log out</button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default connect()(Nav);