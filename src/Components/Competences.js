import '../styles/App.css';
import '../styles/Competences.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import img_html from '../icons/html.png';
import img_css from '../icons/css.png';
import img_java from '../icons/java.png';
import img_javascript from '../icons/javascript.png';
import img_php from '../icons/php.png';
import img_phpmyadmin from '../icons/phpmyadmin.png';
import img_adminer from '../icons/adminer.png';
import img_c from '../icons/c.png';
import img_mysql from '../icons/mysql.png';
import img_sql from '../icons/sql.png';
import img_ocaml from '../icons/ocaml.png';
import img_postgresql from '../icons/postgresql.png';
import img_react from '../icons/react.png';
import img_symfony from '../icons/symfony.png';
import img_bootstrap from '../icons/bootstrap.png';
import img_androidstudio from '../icons/androidstudio.png';
import img_docker from '../icons/docker.png';
import img_eclipse from '../icons/eclipse.jpeg';
import img_git from '../icons/git.png';
import img_laragon from '../icons/laragon.png';
import img_phpunit from '../icons/phpunit.jpg';
import img_postman from '../icons/postman.png';
import img_vscode from '../icons/vscode.png';
import img_wamp from '../icons/wamp.png';
import img_jquery from '../icons/jquery.png';
import img_france from '../icons/france.jpg';
import img_anglais_drapeau from '../icons/anglais_drapeau.jpg';
import img_espagnol from '../icons/espagnol.png';


function Competences() {
    return (
        <div id="row-competences" className="row">
            <div id="competences" className="col-xs-12 col-md-12">
                <div className="d-flex justify-content-center">
                    <h1 className="section-title-light display-4 center h4 my-5">MES COMPÉTENCES</h1>
                </div>
                <div className="d-flex justify-content-center"><div className="divider"></div></div>
            </div>
            <Container fluid className="mx-5">
                <Row xs={1} md={2} lg={3} xl={4}>
                    <Col className="col-card">
                        <Card>
                            <Card.Header>Langages Informatique</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><img src={img_html} alt="icon html" /> HTML</ListGroup.Item>
                                    <ListGroup.Item><img src={img_css} alt="icon css" /> CSS</ListGroup.Item>
                                    <ListGroup.Item><img src={img_php} alt="icon php" /> PHP</ListGroup.Item>
                                    <ListGroup.Item><img src={img_javascript} alt="icon javascript" /> Javascript</ListGroup.Item>
                                    <ListGroup.Item><img src={img_java} alt="icon java" /> Java</ListGroup.Item>
                                    <ListGroup.Item><img src={img_sql} alt="icon sql" /> SQL</ListGroup.Item>
                                    <ListGroup.Item><img src={img_c} alt="icon c" /> C</ListGroup.Item>
                                    <ListGroup.Item><img src={img_ocaml} alt="icon ocaml" /> Ocaml</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-card">
                        <Card>
                            <Card.Header>Base de données</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><img src={img_mysql} alt="icon phpmyadmin" /> MySql</ListGroup.Item>
                                    <ListGroup.Item><img src={img_postgresql} alt="icon phpmyadmin" /> PostgreSQL</ListGroup.Item>
                                    <ListGroup.Item><img src={img_phpmyadmin} alt="icon phpmyadmin" /> PhpMyadmin</ListGroup.Item>
                                    <ListGroup.Item><img src={img_adminer} alt="icon phpmyadmin" /> Adminer</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-card">
                        <Card>
                            <Card.Header>Frameworks / Librairies</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><img src={img_symfony} alt="icon phpmyadmin" /> Symfony5</ListGroup.Item>
                                    <ListGroup.Item><img src={img_react} alt="icon phpmyadmin" /> Reactjs</ListGroup.Item>
                                    <ListGroup.Item><img src={img_bootstrap} alt="icon phpmyadmin" /> Bootstrap</ListGroup.Item>
                                    <ListGroup.Item><img src={img_jquery} alt="icon phpmyadmin" /> jQuery</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-card">
                        <Card>
                            <Card.Header>Outils</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><img src={img_laragon} alt="icon laragon" /> Laragon</ListGroup.Item>
                                    <ListGroup.Item><img src={img_wamp} alt="icon wamp" /> Wamp</ListGroup.Item>
                                    <ListGroup.Item><img src={img_docker} alt="icon docker" /> Docker</ListGroup.Item>
                                    <ListGroup.Item><img src={img_postman} alt="icon postman" /> Postman</ListGroup.Item>
                                    <ListGroup.Item><img src={img_phpunit} alt="icon phpunit" /> PhpUnit</ListGroup.Item>
                                    <ListGroup.Item><img src={img_git} alt="icon git" /> git / github / gitlab</ListGroup.Item>
                                    <ListGroup.Item><img src={img_androidstudio} alt="icon androidstudio" /> Android studio</ListGroup.Item>
                                    <ListGroup.Item><img src={img_eclipse} alt="icon eclipse" /> Eclipse</ListGroup.Item>
                                    <ListGroup.Item><img src={img_vscode} alt="icon vscode" /> Visual studio code</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-card">
                        <Card>
                            <Card.Header>Langues</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><img src={img_france} alt="icon france drapeau" /> Français (langue maternelle)</ListGroup.Item>
                                    <ListGroup.Item><img src={img_anglais_drapeau} alt="icon anglais drapeau" /> Anglais (niveau intermédiaire)</ListGroup.Item>
                                    <ListGroup.Item><img src={img_espagnol} alt="icon espagne drapeau" /> Espagnol (niveau débutant)</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Competences;