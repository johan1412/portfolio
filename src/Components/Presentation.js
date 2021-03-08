import React from 'react';
import '../styles/Presentation.css';
import '../styles/App.css';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import cv from '../images/photo_cv.jpeg';
import cvpdf from '../CV_johan-travert.pdf';

function Presentation() {
    return (
        <React.Fragment>
            <div id="presentation" className="row">
                <div className="col-xs-12 pt-2">
                    <div className="d-flex justify-content-center">
                        <h1 className="section-title-light display-4 center h4 my-5">À PROPOS DE MOI</h1>
                    </div>
                    <div className="d-flex justify-content-center"><div className="divider"></div></div>
                    <p>Je suis Johan Travert, 26 ans et étudiant inscrit en Mastère 1 Ingénierie du web.
                    Je compte à la suite de mon diplome, travailler en tant que développeur web étant autant attiré par le back-end que le front-end.
                    Je suis passionné par le web et j'adore en apprendre toujours plus dans ce domaine.
                    Ce site vous permettra de mieux découvrir mon parcours et mes compétences.
                    </p>
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-xs-12 col-md-6">
                    <ul className="liste-atouts">
                        <li>Esprit d'équipe et bon relationnel</li>
                        <li>Rigoureux et méthodique dans le travail</li>
                        <li>Patient et à l'écoute des autres</li>
                        <li>Curieux et envie d'apprendre</li>
                        <li>Optimiste et esprit positif</li>
                    </ul>
                </div>
                <Figure style={{ width: '18rem' }}>
                    <Figure.Image width={300} alt="cv perso" src={cv} />
                    <Figure.Caption>
                        <a href={cvpdf} className="button"><Button variant="dark">Télécharger CV</Button></a>
                    </Figure.Caption>
                </Figure>
            </div>
        </React.Fragment>
    );
}

export default Presentation;