import {useState, useEffect} from 'react'

const About = function (props){

    const divStyle={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#330066",
    }

    const imgStyle={
        borderRadius: "10px",
        height: '300px',
        marginTop: '30px'
    }

    const [about, setAbout] = useState(null)

    const getAbout = async ()=>{
        const response = await fetch(props.URL + 'about')
        const data = await response.json()
        setAbout(data)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> {getAbout()},[])

    const loaded = () =>(
        <div style={divStyle}>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
            <img style={imgStyle} src={require('../images/headshot.png')} alt={about.name}/>
        </div>
    )

    return about ? loaded() : <h1>Loading...</h1>
}

export default About