
export interface IIntroduction {
    name: string;
    avatar: string;
    location: string;
    description: string;
    position: string;
}

export interface ISchoolEntity {
    name: string;
    logo: string;
    title: string;
    duration: string;
    credentialLink?: string;
}

export interface ISkill {
    name: string;
    icon: string;
    current?: boolean;
}

export interface ILanguage {
    name: string;
    level: string;
}

export interface IWork {
    title: string;
    logo: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
}

export interface IContact {
    name: string;
    icon: string;
    link: string;
}

export interface IResume {
    introduction: IIntroduction;
    experience: IWork[];
    education: ISchoolEntity[];
    skills: ISkill[];
    languages: ILanguage[];
    contact: IContact[];
}

const Resume: IResume = {
    introduction: {
        name: "Gary Barzola",
        avatar: "../assets/images/avatar.jpg",
        location: "Ecuador, Guayaquil",
        description: "Estudiante de Ing. en Ciencias Computacionales, con conocimientos en varias herramientas de desarrollo como Python - Java - Mysql - Mongodb - HTML + CSS - JavaScript - React - Node - Express entre otras. Actualmente aprovecho mi tiempo libre en adquirir mas conocimientos en estas areas de mi interes.",
        position: "Motivado a seguir aprendiendo"
    },
    experience: [
        {
            title: 'Mantenimiento de equipos',
            company: 'Lab-Fiec',
            logo: '',
            duration: '2019 -  2020',
            location: 'Espol',
            description: [
                'Mantenimiento fisico preventivo.',
                'Instalacion de S.0. y software de terceros.',
            ],
        }
    ],
    education: [
        { name: 'ESPOL', logo: './images/udg.png', title: 'Ing. en Ciencias Computacionales', duration: '2016 - Actual' },
        { name: 'ANAI', logo: 'https://cdn.svgporn.com/logos/aws.svg', title: 'Ingenieria', duration: '2010 - 2016'},
        { name: 'Platzi', logo: './images/jsnation.svg', title: 'Estudiante de Platzi continuo', duration: '2019 - Actual' },
    ],
    skills: [
        { name: 'Javascript', icon: 'https://cdn.svgporn.com/logos/javascript.svg' },
        { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg', current: true },
        { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg', current: true },
        { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg', current: true },
        { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg', current: true },
        { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg', current: true },
        { name: 'Java', icon: 'https://cdn.svgporn.com/logos/java.svg' },
        { name: 'Sass', icon: 'https://cdn.svgporn.com/logos/sass.svg', current: true },
        { name: 'Mongodb', icon: 'https://github.com/gnbarzol/CV/blob/master/src/assets/images/mongodb.png', current: true },
        { name: 'Mysql', icon: './assets/images/mysql.png' },
        { name: 'Python', icon: './assets/images/python.png' },
        { name: 'Express', icon: '../assets/images/express.svg', current: true },

    ],
    languages: [
        {
            name: 'Ingles',
            level: 'Intermedio'
        },
        {
            name: 'Español',
            level: 'Nativo'
        }
    ],
    contact: [
        { name: 'Github', icon: 'https://cdn.svgporn.com/logos/github-icon.svg', link: 'https://github.com/gnbarzol' },
        { name: 'Twitter', icon: 'https://cdn.svgporn.com/logos/twitter.svg', link: 'https://twitter.com/GARY_NBP' },
        { name: 'gnbarzol@espol.edu.ec', icon: 'https://cdn.svgporn.com/logos/google-gmail.svg', link: 'mailto:gnbarzol@espol.edu.ec' },
        { name: 'Instagram', icon: 'https://cdn.svgporn.com/logos/instagram-icon.svg', link: 'http://instagram.com/ngary_19' },
    ]
};

export default Resume;