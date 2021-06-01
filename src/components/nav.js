import { Link, useLocation } from 'react-router-dom'

function Nav(){

    const location = useLocation()

    const slug = location.pathname // location 
    
    const handleRoute = () => { return slug === "/" ? "/user/" : "/" }


    return <>
        <nav className="navbar navbar-dark bg-dark">
            { /* slug !== "/" ? component : other component */ }
            <Link to={ handleRoute() } className="navbar-brand todolist-btn" >
                { "Back to home" }
            </Link>
        </nav>
    </>
}

export default Nav