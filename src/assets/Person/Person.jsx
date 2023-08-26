import "./Person.css"

const Person = (props) =>{

    const {name, post, photo, team} = props.data
    const {primaryColor} = props
return <div className="card">
         <div className="head" style={{backgroundColor: primaryColor}}>
            <img src={photo} alt={name} />
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{post}</h5>
        </div>
   </div>
}

export default Person;