import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import About from './About';
import Contact from './Contact';
import './App.css';
import Missing from './Missing';
// import Layout from './pages/Layout';

function App() {
    
    const [post, setPost] = useState ([
        {   
            id: 1,
            title: 'My First Post',
            date: "May 01, 2025 15:30:25 PM",
            body: 'This is the content of my first post.'
        },
        {
            id: 2,
            title: 'My Second Post',
            date: "May 05, 2024 15:30:25 PM",
            body: 'This is the content of my second post.'
        },
        {
            id: 3,
            title: 'My Third Post',
            date: "May 10, 2022 16:34:25 PM",
            body: 'This is the content of my third post.'
        },
        {
            id: 4,
            title: 'My Fourth Post',
            date: "May 15, 2023 15:38:25 PM",
            body: 'This is the content of my fourth post.'
        }


    ]);

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState("");

    return (
      <Routes>
        <Route path='/' element={<Layout 
        post={post}
        search={search}
        setSearch={setSearch}
        />}>
        <Route index element={<Home post={post}/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    );
}

export default App;