import "./OptionList.css"

const OptionList = (props) =>{


    const changeManage =(event) =>{
        props.setValor(event.target.value)
    }

    return <div className="option-list">
        <label>Equipos</label>
        <select value={props.valor} onChange={changeManage}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.teams.map((team, index) =>{
                return <option key={index} value={team}>{team}</option>
            })}
        </select>
    </div>
} 
export default OptionList;