import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    console.log(post)
    return (
        <div className="post">

            <Link to={`post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="post-datertime">
                    {post.date} at {post.time}
                </p>

            </Link>


            <p className="post-body">
                
                
                {
                    (post.body).length <= 25 ? post.body : `${post.body.slice(0, 50)}...`
                
                }
            </p>




            {/* Link <Link to={`post/${post.id}`}>{post.title}</Link>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.body}</p>
             */}
        </div>
    );
};

export default Post;