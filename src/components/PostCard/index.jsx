import './style.css';
import React from 'react'

const PostCard = ({ post: { title, cover, body} }) => {
    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default PostCard