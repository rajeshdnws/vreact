import React from 'react';
import { Link } from 'react-router-dom'
class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name:'hello' }
    }
    render() { 
        return (
            <>
                <form className="form-horizontal" action='' method="POST">
                    <fieldset>
                        <div id="legend">
                        <legend className="">Register</legend>
                        </div>
                        <div className="control-group">
                    
                        <label className="control-label"  for="username">Username</label>
                        <div className="controls">
                            <input type="text" id="username" name="username" placeholder="" className="input-xlarge" />
                            <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                        </div>
                        </div>
                    
                        <div className="control-group">
                    
                        <label className="control-label" for="email">E-mail</label>
                        <div className="controls">
                            <input type="text" id="email" name="email" placeholder="" className="input-xlarge" />
                            <p className="help-block">Please provide your E-mail</p>
                        </div>
                        </div>
                    
                        <div className="control-group">
                    
                        <label className="control-label" for="password">Password</label>
                        <div className="controls">
                            <input type="password" id="password" name="password" placeholder="" className="input-xlarge" />
                            <p className="help-block">Password should be at least 4 characters</p>
                        </div>
                        </div>
                    
                        <div className="control-group">
                    
                        <label className="control-label"  for="password_confirm">Password (Confirm)</label>
                        <div className="controls">
                            <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge" />
                            <p className="help-block">Please confirm password</p>
                        </div>
                        </div>
                    
                        <div className="control-group">
                        
                        <div className="controls">
                            <button className="btn btn-success">Register</button>
                        </div>
                        </div>
                    </fieldset>
                    
                    </form>
                    <div>
                    <Link to="/" >Login</Link>
                    </div>
                    
                </>
          );
    }
}
 
export default Registration;