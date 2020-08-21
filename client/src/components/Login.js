import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'; 


class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials, 
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then((res) => {
        // console.log(res.data.payload);
        localStorage.setItem('token', res.data.payload); 
        this.props.history.push('/bubblepage'); 
      })
      .catch((err) => console.log(err)); 
  }

  render() {
      return (
        <>
        <form onSubmit={this.login}>
          <h2>Login</h2>

          <label>Username:
            <input 
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
            /> 
          </label>

          <label>Password:
            <input 
              type='text'
              name='password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
            /> 
          </label>

          <button>Log in</button>

        </form>
        </>
      );
    };
}

export default Login;
