import "./footer.css"

const Footer = () =>{

    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="socials">
            <a href="https://github.com/xKunice"><img src="/img/facebook.png" alt="Facebook" /></a>
            
            <a href="https://github.com/xKunice"><img src="/img/twitter.png" alt="Twitter" /></a>
            
            <a href="https://github.com/xKunice"><img src="/img/instagram.png" alt="Instagram" /></a>          
        </div>
        <img src="/img/Logo.png" alt="" />
        <strong>Desarrollado por Andres Betancourt</strong>
    </footer>

} 

export default Footer