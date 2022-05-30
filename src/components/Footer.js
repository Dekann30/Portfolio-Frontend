

const Footer = function(props){
    const footStyle={
        display: "flex",
        justifyContent: "space-around",
        position: 'absolute',
        bottom: "10px",
        border: "3px solid black",
        width: "90%",
        margin: '0px 60.844px',
    }

    return(
        <footer style={footStyle}>
            <h3>Thank You For Visiting~</h3>
        </footer>
    )
}

export default Footer