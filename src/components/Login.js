import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser';
// import { _getUsers } from '../utils/_DATA';

// TODO: Use the promise of _getUsers() to populate the select list.

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <form>
                    <label htmlFor='users'>Select a user:</label>
                    <select name='users' id='users'>
                        <option value='danielohana'>Daniel Ohana</option>
                        <option value='janedoe'>Jane Doe</option>
                        <option value='johndoe'>John Doe</option>
                    </select>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;