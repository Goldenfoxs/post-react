import React from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";


const PostPage = ({posts, hendleDelete}) => {
    console.log('hello')

    const {id} = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    console.log(post)

    return(
        <div className="postPage">
            <article className="post">
                {post && 
                    <>
                    <h2 className="postPage-title">{post.title}</h2>
                    <p className="postDate">
                        {post.date}
                    </p>
                    <p>{post.body}</p>
                    <button className="deletePost" onClick={() => hendleDelete(post.id)}>
                        Delete post
                    </button>
                    </>
                } { !post &&
                    <>
                    <h2>Post not found</h2>
                    <p>Please return to main page or add post</p>
                    <p>Faster!!!</p>
                    <p>I say faster go to main page!!!</p>
                    <p>
                        <Link to="/"> Return</Link>
                    </p>
                    </>
                }
                <br />

            </article>
        </div>
    )}


export default PostPage;