import { useState } from 'react'
import Form from '../Form/Form';
import Header from '../header/header';
import MyOrg from '../MyOrg/MyOrg';
import Team from '../Team/Team';
import Footer from '../footer/footer';

const App=() => {

    const [showForm, updateForm] = useState(false)
    const [persons, updatePerson] = useState([])

    const [teams, updateTeams] = useState([
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
        
    ])

    const showChange = () =>{
        updateForm(!showForm)
    }

    const registerPerson = (person) =>{
        updatePerson([...persons, person])
    }

    const deletePerson = () => {
        console.log("hola")
    }

    const colorUpdate = (color, title) =>{
        const teamsUpdate = teams.map(
            (team) =>{
                if (team.title === title){
                    team.primaryColor = color
                } 

                return team
            }
        )
        updateTeams(teamsUpdate)
    }

    

    return <>
        <Header />
        {showForm && <Form
         teams={teams.map((team) => team.title)}
         registerPerson={registerPerson}
         />
        
        }
        
        <MyOrg showChange={showChange} />
        {teams.map((team, index) => (

            <Team key={index} 
            title={team.title} 
            primaryColor={team.primaryColor} 
            secondColor={team.secondColor}
            persons={persons.filter( person => person.team === team.title)}
            deletePerson={deletePerson}
            colorUpdate ={colorUpdate}
            />

        ))}
        <Footer />
    </>
}  

export default App;