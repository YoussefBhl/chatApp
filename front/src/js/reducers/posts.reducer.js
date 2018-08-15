import { postsConstants } from '../constants/posts.constants';
 
export function posts(state = {posts: []}, action) {
    switch (action.type) {
    case postsConstants.PUT_REQUEST:
        return {
        posts: []
        };
    case postsConstants.PUT_SUCCESS:
        return {
        posts: state.posts.concat(action.post)
        };
    case postsConstants.PUT_FAILURE:
        return {
        error: action.error
        };
    default:
        return state
    }
}