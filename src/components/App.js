import React from 'react';
import '../assets/styles/App.css';
import data from '../data/data';
import Introduccion from './Introduccion';
import Educacion from './Educacion';
import Habilidades from './Habilidades';
import Lenguaje from './Lenguaje';
import Contacto from './Contacto';
import Experiencia from './Experiencia';

const App = () => (
  <section className="Resume">
    <div>
      <title>{data.introduction.name}</title>
      <meta name="description" content={data.introduction.description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
      <link rel="manifest" href="./favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </div>
    <Introduccion data={data.introduction} />
    <section className="Resume-content">
      <section className="Resume-main">
        <Educacion data={data.education} />
        <Habilidades data={data.skills.filter(skill => !skill.current)} title="Conocimientos" />
        <Experiencia data={data.experience} />
      </section>
      <section className="Resume-sidebar">
        <Habilidades data={data.skills.filter(skill => skill.current)} title="Intereses" />
        <Lenguaje data={data.languages} />
        <Contacto data={data.contact} />
      </section>
    </section>
  </section>

);



export default App;
