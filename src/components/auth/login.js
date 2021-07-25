import React,{Component} from 'react'
import { Link } from 'react-router-dom'
class Login extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    
                    <div className="fadeIn first">
                    <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    </div>

                   
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                   
                    <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                    <Link to="/registration" >Registration</Link>
                    </div>

                </div>
            </div>
            
        )
    }
}

export default Login;