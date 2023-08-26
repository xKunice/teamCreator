import "./footer.css"

const Footer = () =>{

    return <footer className="footer" style={{backgroundImage: "url(public/img/footer.png)"}}>
        <div className="socials">
            <a href="https://github.com/xKunice"><img src="public/img/facebook.png" alt="Facebook" /></a>
            
            <a href="https://github.com/xKunice"><img src="public/img/twitter.png" alt="Twitter" /></a>
            
            <a href="https://github.com/xKunice"><img src="public/img/instagram.png" alt="Instagram" /></a>          
        </div>
        <img src="public/img/Logo.png" alt="" />
        <strong>Desarrollado por Andres Betancourt</strong>
    </footer>

} 

export default Footer