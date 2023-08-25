import { useState } from 'react'
import Form from '../Form/Form';
import Header from '../header/header';
import MyOrg from '../MyOrg/MyOrg';
import Team from '../Team/Team';

const App=() => {

    const [showForm, updateForm] = useState(false)

    const showChange = () =>{
        updateForm(!showForm)
    }

    const teams = [
        {
            title:"Programación",
            primaryColor:"#57C278",
            secondColor:"#D9F7E9"
        },
        {
            title:"Front End",
            primaryColor:"#82CFFA",
            secondColor:"#E8F8FF"
        },
        {
            title:"Data Science",
            primaryColor:"#A6D157",
            secondColor:"#F0F8E2"
        },
        {
            title:"Dev Ops",
            primaryColor:"#E06B69",
            secondColor:"#FDE7E8"
        },
        {
            title:"UX y Diseño",
            primaryColor:"#DB6EBF",
            secondColor:"#FAE9F5"
        },
        {
            title:"Movil",
            primaryColor:"#FFBA05",
            secondColor:"#FFF5D9"
        },
        {
            title:"Innovación y Gestión",
            primaryColor:"#FF8A29",
            secondColor:"#FFEEDF"
        }
        
    ]

    return <>
        <Header />
        {showForm === true ? <Form teams={teams.map((team) => team.title)}/> : <></>}
        
        <MyOrg showChange={showChange} />
        {teams.map((team, index) => (

            <Team key={index} title={team.title} primaryColor={team.primaryColor} secondColor={team.secondColor}/>

        ))}
        
    </>
}  

export default App;