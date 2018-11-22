import React, { Component } from 'react';
import { 
    Link,
    withRouter,
} from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ( {history} ) => {
    return (
        <div>
            <h1>Sign Up Page</h1>
            <SignUpForm history={history} />
        </div>
    );
};

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
})

class SignUpForm extends Component {

    state = {...INITIAL_STATE};

    onSubmit = (event) => {

        const {
            username,
            email,
            passwordOne
        } = this.state;

        // history object from props is a default firebase object
        // routes can be pushed to history for redirects
        const {
            history,
        } = this.props;

        // create a user using the auth object and direct user to home page
        // otherwise output any error thrown by firebase
        auth.createUserWithEmailAndPassword(email, passwordOne).then(authUser => {
            this.setState({...INITIAL_STATE});
            history.push(routes.HOME);
        }).catch(error => {
            this.setState(byPropKey('error', error));
        });

        // prevents browser from reloading. 
        event.preventDefault();
    }

    render() {

        // Constant for the inputs so this.state.input doesn't have to be called every time
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        // Boolean condition for invalid inputs.
        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    {/* Sign Up inputs. When something is typed into the inputs, state is changed.  */}
                    <input 
                        value={username}
                        onChange={event => this.setState(byPropKey('username', event.target.value))}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        type="text"
                        placeholder="Email Address"
                    />
                    <input 
                        value={passwordOne}
                        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                        type="password"
                        placeholder="Password"
                    />
                    <input 
                        value={passwordTwo}
                        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                        type="password"
                        placeholder="Confirm Password"
                    />

                    {/* Submit button is only enabled when isInvalid isn't true. */}
                    <button
                        disabled={isInvalid}
                        type="submit">
                        Sign Up
                    </button>

                    {/* Error object from firebase outputs an error message if there is one. */}
                    { error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
}

const SignUpLink = () => {
    return(
        <p>
            Don't have an account yet?
            {' '}
            <Link to={routes.SIGN_UP}>Sign Up</Link>
        </p>
    );
}

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};