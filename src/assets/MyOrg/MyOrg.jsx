import { useState } from "react"
import "./MyOrg.css"

const MyOrg = (props) =>{

    return <section className="orgSection">
        <h3>Mi Organización</h3>
        <img src="/img/button.png" alt="add button" onClick={props.showChange} />
    </section>
}

export default MyOrg