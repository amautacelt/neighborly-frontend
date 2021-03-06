import { Component } from "react";

export default class Login extends Component{
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state).then( res => this.props.history.push('/home'))
    }

    render(){
        return(
            <div className="col ">
                <div className="logincard">
                    <div className="card mb-3 h-100 border-info text-center text-white bg-dark mb-3 max-width: 18rem">
                            <form onSubmit={
                                (event) => this.handleSubmit(event)}>
                                <label>Username</label>
                                <input className="col" type='text' placeholder='username' name='username' 
                                    value={this.state.username} onChange={(e) => this.handleChange(e)} />
                                <br></br>
                                <label>Password</label>
                                <input className="col" type='password' placeholder='password' name='password' 
                                    value={this.state.password} onChange={(e) => this.handleChange(e)} />
                                <br></br>
                                <input className="btn btn-success btn-sm" type='submit' value='Submit'/>
                            </form>
                    </div>
                </div>
            </div>
            
        )
    }
}