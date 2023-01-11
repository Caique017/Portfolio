import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di'

import "../styles/components/technologiescontainer.sass";

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, Text:"1 ano e 6 meses de experiência" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, Text:"1 ano e 6 meses de experiência" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, Text:"3 meses de experiência" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, Text:"3 meses de experiência" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, Text:"1 ano e 6 meses de experiência" },
    { id: "react", name: "React", icon: <DiReact />, Text:"3 meses de experiência" },
]

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.Text}</p>
                    </div>
                </div>
            ))}
        </div>
        </section>
    )
}

export default TechnologiesContainer