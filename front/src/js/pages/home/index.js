import React from "react";
import { Button } from 'react-bootstrap';
import Footer from '../../common/components/Footer';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';
import Header from '../../common/components/Header';
import PostBox from './components/PostBox';
import PostsList from './components/PostsList';

class Home extends React.Component {
    componentDidMount() {
        document.body.style.backgroundColor = "white";
    }
    handleSubmit() {
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }
    render() {
        return (
            <div>
                <Header />
                <PostBox />
                <PostsList />
                <h1>Hi {this.props.user.user.firstName}!</h1>
                <h1>Hi {this.props.user.user.lastName}!</h1>
                <h1>Hi {this.props.user.user.sex}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                <Button  onClick={(event) => this.handleSubmit(event)} >Logout</Button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

Home = connect(mapStateToProps)(Home);
export default Home;