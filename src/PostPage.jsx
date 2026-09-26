import React from "react";
import {useParams} from "react-router-dom"


const PostPage = ({posts}) => {
    console.log('hello')

    const {id} = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    console.log(post)

    return(
        <div className="postPage">
            <h2 className="postPage-title">{post.title}</h2>
            <br />
            {post.body}
        </div>
    )}


export default PostPage;