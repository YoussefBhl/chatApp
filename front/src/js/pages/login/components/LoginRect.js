import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { userActions } from '../../../actions/user.actions';
//btn color #1678c2
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    console.log(email)
    console.log(email)
    //password length temporary >0
    if (email && password.length > 0) {
      dispatch(userActions.login(email, password));
    }
  }
  render() {
    const style = {
      rightContainer: {
        backgroundColor: "white",
        border: "2px solid",
        borderRadius: "25px",
        padding: "5%",
      },
      registerColor: {
        backgroundColor: "4c639"
      }
    };
    const { email, password, submitted } = this.state;
    return (
      <div style={style.rightContainer}>
        <h1> Welcome To Chat App </h1>
        <br />
        <form>
          <div className="input-group" style={{height:"70px"}}>
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input  type="text" className="form-control" name="email" placeholder="Email" style={{height:"100%"}}
              onChange={(e)=> this.setState({email: e.target.value })}/>
          </div>
          <div className="input-group" style={{height:"70px"}}>
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input type="password" className="form-control" name="password" placeholder="Password" style={{height:"100%"}}
              onChange={(e)=> this.setState({password: e.target.value })}/>
          </div>
        </form> 
        <br/><br/>
        <Link to="/home"><Button bsStyle="primary" block bsSize="large"  
              onClick={(event) => this.handleSubmit(event)} > Login </Button>
        </Link>
        <Link to="/register"><Button block bsSize="large"> Register </Button> </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}
const LoginRect = connect(mapStateToProps)(LoginPage);
export default LoginRect;