import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { userId: '' };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        this.setState({ userId: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.state.userId
            ? this.props.authenticateUser(this.state.userId)
            : alert("Select a user to log in");
    }


    render() {
        const { users } = this.props;
        return (
            <div className="login">
                <h1>Would You Rather</h1>
                <form onSubmit={this.handleSubmit}>
                    <select 
                        name='users' 
                        id='users' 
                        defaultValue='select' 
                        onChange={this.handleUserChange}
                    >
                        <option value='select' disabled>
                            Select a user to log in
                        </option>
                        {Object.keys(users).map(user => 
                            <option key={user} value={user}>
                                {users[user].name}
                            </option>)
                        }
                    </select>
                    <input type="submit" value="Log in"></input>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return { users };
}

function mapDispatchToProps(dispatch) {
    return {
        authenticateUser: (id) => { dispatch(setAuthedUser(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);