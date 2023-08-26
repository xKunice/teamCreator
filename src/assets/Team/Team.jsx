import "./Team.css"
import Person from "../person/person";
const Team = (props) =>{

    const {primaryColor, secondColor, title} = props
    const {persons} = props

    return persons.length > 0 &&
    <section className="team" style={{backgroundColor: props.secondColor}}>
        <h3 style={{ borderBottom: `4px solid ${props.primaryColor}` }}>{props.title}</h3>
        <div className="persons">
            {
                persons.map((person, index) => 
                <Person key={index}
                        data={person} 
                        primaryColor={primaryColor}/>
                )
            }
        </div>
        

    </section>

};

export default Team;