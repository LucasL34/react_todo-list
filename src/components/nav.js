import { Link, useLocation } from 'react-router-dom'

function Nav(){

    const location = useLocation()

    const slug = location.pathname // location 
    
    const handleRoute = () => { return slug === "/" ? "/user/" : "/" }

    const exportData = () => {}


    return <>
        <nav className="navbar navbar-dark bg-dark mb-3">
            {slug !== "/" ?
                <Link to={ handleRoute() } className="navbar-brand" id="btnNav" >
                    { "Back to home" }
                </Link>
            :
                <span className="navbar-brand" id="btnNav" onClick={ exportData } title="Export tasks in file json"> Export </span>
            }
        </nav>
    </>
}

export default Nav