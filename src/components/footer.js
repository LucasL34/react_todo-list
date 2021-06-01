import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer(){
    return <>
        <footer className="container-fluid d-flex justify-content-around bg-dark py-1">
            <a href="https://github.com/LucasL34/todoListReactJS" className="text-white todolist-btn" title="Go to the project repository" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lucasl34/" className="text-white todolist-btn" title="Personal LikedIn" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
        </footer>
    </>
}

export default Footer