import UserInfo from './UserInfo';
import Title from './Title';
import Content from './Content';
import VoteButtons from './VoteButtons';
import PostTime from './PostTime';

const PostCard = ({ post }) => {
    return (
      <div className="post-card">
        <UserInfo author={post.author} />
        <Title title={post.title} />
        <Content post={post} />
        <div className="post-footer">
          <VoteButtons score={post.score} />
          <PostTime created={post.created_utc} />
        </div>
        <Comments postId={post.id} />
      </div>
    );
  }
  
  export default PostCard;  // Make sure this export exists

