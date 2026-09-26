import React from "react";
import Feed from "./Feed";

function Home({post}) {
    return(
        <div className="Home">

            <main className="home">
                    {post.length ? (
                        <Feed posts={post}/>
                    ) : (
                        <p>No post plese add</p>
                    )
            }
                

            </main>
             {/* {post.map((item) => (
                <div className='post_main' key={item.id}>
                    <h2 className='post_title'>{item.title}</h2>
                    <p className='post_text'>{item.date}</p>
                    <p className='post_text'>{item.body}</p>
                    
                </div>
            ))} */}
        </div>
    ) 
};


export default Home;