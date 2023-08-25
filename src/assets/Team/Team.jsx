import "./Team.css"
import Person from "../person/person";
const Team = (props) =>{


    return <section className="team" style={{backgroundColor: props.secondColor}}>
        <h3 style={{ borderBottom: `4px solid ${props.primaryColor}` }}>{props.title}</h3>
        <div className="persons">
            <Person />
        </div>
        

    </section>

};

export default Team;