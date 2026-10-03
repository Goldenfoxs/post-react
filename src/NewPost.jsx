    import React from "react";

    const NewPost = ({postTitle, setpostTitle, postBody, setpostBody }) => {
        return (
        <div className="newPost">
            <h2>New Post</h2>
            <form className="newPost">
                <lable>Title: </lable>
                <input
                type="text"
                id="postTitle"
                required
                value={postTitle}
                onChange={ e => setpostTitle(e.target.value)}
                />
                <br />

                <lable>Body: </lable>
                <textarea
                type="text"
                id="postBody"
                required
                value={postBody}
                onChange={ e => setpostBody(e.target.value)}
                />

                <br />
                <button type="sunmit" className="createPostButton">Submit</button>

            </form>
        </div>
        );
    };

    export default NewPost;