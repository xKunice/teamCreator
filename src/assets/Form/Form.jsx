import "./Form.css";
import { useState } from "react";
import TextCamp from "../TextCamp/TextCamp";
import OptionList from "../OptionList/OptionList";
import Button from "../Button/Button";


const Form = (props) =>{

    const [name, setName] = useState("")
    const [post, setPost] = useState("")
    const [photo, setPhoto] = useState("")
    const [team,setTeam] = useState("")


    const sendManage= (event) => {

        event.preventDefault();
        console.log(event);
        let sendData={
            name: name,
            post: post,
            photo: photo,
            team: team
        }
    
    }

    return <section className="form">
        <form onSubmit={sendManage}>
            <h2> Rellena el formulario para crear el colaborador</h2>
            <TextCamp 
                title="Nombre"
                placeholder="Ingrese el nombre" 
                required 
                valor={name} 
                setValor={setName}/>
            <TextCamp 
                title="Puesto" 
                placeholder="Ingrese el puesto" 
                required
                valor={post}
                setValor={setPost} />
            <TextCamp 
            title="Foto" 
            placeholder="Ingrese la URL de la foto" 
            required
            valor={photo} 
            setValor={setPhoto}/>
            <OptionList 
            valor={team}
            setValor={setTeam}
            teams={props.teams}/>
            <Button text="Crear colaborador"/>
        </form>
    </section>
};

export default Form