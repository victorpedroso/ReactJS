//CSS
import styles from './About.module.css';

import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>Este projeto consiste em um blogcom React no front-end e firebase no back-end</p>
        <Link to="/posts/create" className="btn">Criar ost</Link>
    </div>
  )
}

export default About