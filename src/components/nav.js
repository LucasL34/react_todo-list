import { Link, useLocation } from 'react-router-dom'

function Nav(){

    const location = useLocation(),
        slug = location.pathname // location

    
    const handleRoute = () => { return slug === "/" ? "/user/" : "/" }


    return <>
        <nav className="navbar navbar-dark bg-dark">
            <Link to={ handleRoute() } className="navbar-brand todolist-btn" >
                { "Back to home" }
            </Link>
        </nav>
    </>
}

export default Nav