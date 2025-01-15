import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../features/comments/commentsSlice';
import Comment from './Comments';

function Comments({ postId }) {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.comments);

    useEffect(() => {
        dispatch(fetchComments(postId));
    }, [dispatch, postId]);

    if (loading) return <div>Loading comments...</div>
    if (error) return <div>Error loading comments: {error}</div>

    return (
        <div className="comments-section">{items.map(comment => (
            <Comment key={comment.data.id} comment={comment} />
            ))}
        </div>
    );
}