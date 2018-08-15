import React from "react";
import { Button, FormControl, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { postsActions } from '../../../actions/posts.actions';

class PostBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: ""
        }
    }
    handelSubmit = (e) => {
        const { dispatch } = this.props;
        dispatch(postsActions.put_post(this.state.post, new Date()));
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <FormControl componentClass="textarea" placeholder="Say something" 
                            onChange={(e) => this.setState({post: e.target.value})}/>
                        <Button bsStyle="primary" onClick={this.handelSubmit} >Submit</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
function mapStateToProps(state) {
    const { posts } = state.posts;
    return {
        posts
    };
}
PostBox = connect(mapStateToProps)(PostBox);
export default PostBox;

