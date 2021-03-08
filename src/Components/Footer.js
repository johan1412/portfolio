import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer py-5 bg-dark">
            <h1 className="display-4 center mb-5 h2">CONTACT</h1>
            <div className="container my-5">
                <div className="d-flex justify-content-around">
                    <div>Johan Travert</div>
                    <div>Maisons-alfort (94)</div>
                    <div>johan2.travert@gmail.com</div>
                    <div><a href="http://www.linkedin.com/in/johan-travert-3b9735188" className="text-white"><u>linkedin/johan-travert</u></a></div>
                </div>
            </div>
            <div className="center mb-2">copy Tout droits réservés - Johan Travert | <a href="../mentions-legales.html" className="text-light"><u>Mentions légales</u></a></div>
        </div>
    );
}


export default Footer;