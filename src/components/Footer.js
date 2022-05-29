import {Link} from "react-router-dom"

const Footer = function(props){
    const footStyle={
        display: "flex",
        justifyContent: "space-around",
        position: 'absolute',
        bottom: "10px",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: '0px 45.844px',
    }

    return(
        <header>
            <nav style={footStyle}>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>About</Link>
            </nav>
        </header>
    )
}

export default Footer