import html from '../assets/images/skills/html.svg'
import css from '../assets/images/skills/css.svg'
import javascript from '../assets/images/skills/javascript.svg'
import react from '../assets/images/skills/react.svg'
import typescript from '../assets/images/skills/typescript.svg'
import mysql from '../assets/images/skills/mysql.svg'
import postgresql from '../assets/images/skills/postgresql.svg'
import c from '../assets/images/skills/c.svg'
import cplusplus from '../assets/images/skills/cplusplus.svg'
import csharp from '../assets/images/skills/csharp.svg'
import java from '../assets/images/skills/java.svg'
import git from '../assets/images/skills/git.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'java':
            return java;
        case 'git':
            return git;
        default:
            break;
    }
}
