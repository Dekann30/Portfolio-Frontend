import {useState, useEffect} from 'react'

const Projects = function (props){

    const [projects, setProjects] = useState()

    const getProjects = async () =>{
        const response = await fetch(props.URL + 'projects')
        const data = await response.json()
        setProjects(data)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{getProjects()}, [])

    const loaded = ()=>{
        return (projects.map((project) =>(
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} alt={project.name} />
                <a href={project.git}> 
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        )))
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects