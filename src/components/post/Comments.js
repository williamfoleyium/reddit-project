function Comment({ comment }) {
    return(
        <div className="comment">
            <div className="comment-metadata">
                <span className="comment-author">{comment.data.author}</span>
                <span className="comment-score">{comment.data.score} points</span>
            </div>
            <div className="comment-body">
                {comment.data.body}
            </div>
        </div>
    );
}

export default Comment;