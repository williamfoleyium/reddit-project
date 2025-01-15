import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import PostCard from './PostCard';

function PostList() {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="post-list">
            {items.map((post) => (
                <PostCard key={post.data.id} post={post.data} />
            ))}
        </div>
    );
}

export default PostList;