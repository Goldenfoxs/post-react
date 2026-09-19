import {Link} from 'react-router-dom';

function Nav ({search, setSearch}) {
    return(
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <input
                type='text'
                placeholder='Search post'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id='search'
                />
            </form>
            <Link to = "/" className='Link-Home' >Home</Link>
            <Link to = "/about" className='Link-Layout'>About</Link>
            <Link to = "/contact" className='Link-Layout'>Contact</Link>    
        </nav>
    )
};

export default Nav;