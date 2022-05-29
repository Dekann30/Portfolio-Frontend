const Home = function (props){

    const homeStyle={
        color: "#330066",
    }

    const imgStyle={
        borderRadius: "10px",
        height: '300px'
    }

    return (
        <div style={homeStyle}>
            <h1>Hello World!</h1>
            <h2>Welcome to My Portfolio</h2>
            <p>A teacher turning application developer come along on my journey to connect two passions into one big dream</p>
            <p>Click 'About' to learn a little bit about my story and to find my contact information. Click "Projects" to see and explore a list of major projects completed.</p>
            <img  style={imgStyle} src='https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif' alt="Welcome!"/>
        </div>
    
    )
}

export default Home