import "./Team.css"
import Person from "../person/person";
import hexToRgba from "hex-to-rgba";
const Team = (props) =>{

    const {primaryColor, secondColor, title} = props
    const {persons, deletePerson, colorUpdate} = props

    return persons.length > 0 &&
    <section className="team" style={{backgroundColor:hexToRgba(primaryColor, 0.3)}}>
        <input
            type="color"
            className="input-color"
            value={primaryColor}
            onChange={(event)=>{
                colorUpdate(event.target.value, title)
            }}
        />
        <h3 style={{ borderBottom: `4px solid ${props.primaryColor}` }}>{props.title}</h3>
        <div className="persons">
            {
                persons.map((person, index) => 
                <Person key={index}
                        data={person} 
                        primaryColor={primaryColor}
                        deletePerson={deletePerson}/>
                )
            }
        </div>
        

    </section>

};

export default Team;