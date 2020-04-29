import React from 'react';
import { ILanguage } from "../data/data";
import '../assets/styles/Lenguaje.css';

interface LanguagesProps {
    data: ILanguage[];
}

const Lenguaje = ({ data }: LanguagesProps) => {
    return (
        <>
            <h3>Lenguajes</h3>
            <article className="Languages">
                {
                    data.map((language, index) => (
                        <div key={`language_${index}`} className="Languages-language">
                            <h6 className="Languages-language-name">{language.name}</h6>
                            <span className="Languages-language-level">{language.level}</span>
                        </div>
                    ))
                }
            </article>
        </>
    );
}

export default Lenguaje;