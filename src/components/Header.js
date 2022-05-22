import {Link} from "react-router-dom"

const Header = function(props){
    const navStyle={
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    }

    return(
        <header>
            <h1>My Portfolio</h1>
            <nav style={navStyle}>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>About</Link>
            </nav>
        </header>
    )
}

export default Header