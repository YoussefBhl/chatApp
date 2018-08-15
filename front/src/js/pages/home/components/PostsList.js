import React from "react";
import { ListGroupItem, ListGroup, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { postsActions } from '../../../actions/posts.actions';
import DateCalculator from './Date';

class PostsList extends React.Component {
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
        const style = {
            post: {
                padding: '1% 20%',
                margin: '0'
            }
        }
        const posts = this.props.posts;
        console.log(this.props.posts);
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',  };
        return (
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2}>
                        <ListGroup>
                            {posts.map((el, i) =>
                                <ListGroupItem key={i}>
                                    <div>
                                        <p style={style.post}>{el.post}</p>
                                        <DateCalculator date={el.date} />
                                    </div>
                                </ListGroupItem>
                            )}
                        </ListGroup>
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
PostsList = connect(mapStateToProps)(PostsList);
export default PostsList;

