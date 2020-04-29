import React from 'react';
import { IContact } from "../data/data";
import '../assets/styles/Contacto.css';

interface ContactsProps {
    data: IContact[];
}

const Contacto = ({ data }: ContactsProps) => {
    return(
        <>
            <h3>Contacto</h3>
            <article className="Contact">
                {
                    data.map((contact, index) => (
                        <div className="Contact-type" key={`skill_${index}`} >
                            <img src={contact.icon} />
                            <a href={contact.link} target="_blank">{contact.name}</a>
                        </div>
                    ))
                }
            </article>
        </>
    );
}

export default Contacto;