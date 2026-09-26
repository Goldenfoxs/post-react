
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';


const Layout = ({post, search, setSearch}) => {
    console.log(post.length);
    return (
        <div className="App">
            <Header title="My blog"/>
            <Nav
            search={search}
            setSearch={setSearch}
            />
            <Outlet/>
            
            <h1 className='Layout'>Layout Component</h1>
            {/* {post.map((item) => (
                <div className='post_main' key={item.id}>
                    <h2 className='post_title'>{item.title}</h2>
                    <p className='post_text'>{item.date}</p>
                    <p className='post_text'>{item.body}</p>
                    
                </div>
            ))} */}
            <Footer length_footer={post.length} />
        </div>
    );

};  

export default Layout;