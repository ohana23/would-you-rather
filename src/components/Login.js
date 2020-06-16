import React, { Component } from 'react';
import { _getUsers } from '../utils/_DATA';

class Login extends Component {
    render() {
        return (
            <div>
                <label for='users'>Select a user:</label>

                <select name='users' id='users'>
                <option value='danielohana'>Daniel Ohana</option>
                <option value='janedoe'>Jane Doe</option>
                <option value='johndoe'>John Doe</option>
                </select>
            </div>
        );
    }
}

export default Login;