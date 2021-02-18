import React from 'react';

import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("Form Submitted!")
        this.setState({ email:'', password:''})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} action="">
                    <input name='email' value={this.state.email} type="email" required/>
                    <label htmlFor="">Email</label>
                    <input name='password' value={this.state.password} type="password" required/>
                    <label htmlFor="">Password</label>
                    <input type="submit" value='Submit Form'/>
                </form>

            </div>
        )
    }
    
}

export default SignIn;