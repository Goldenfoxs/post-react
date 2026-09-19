import React from "react";
import Post from "./Post";


const Feed = ({posts}) => {
    return(
        <div className="feed">
            {posts.map((item) => (
                <Post
                key={posts.id}
                post={posts}
                />
            ))}
        </div>
    )}


export default Feed;
