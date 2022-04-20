// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faMoneyBill } from 'fortawesome/pro-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faGitAlt,
    faInstagram,
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faBootstrap,
    faDatabase,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(
    faMoneyBill,
    faCode,
    faGithub,
    faGitAlt,
    faInstagram,
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faBootstrap,
    faDatabase
    // more icons go here
);

export default FontAwesomeIcon;