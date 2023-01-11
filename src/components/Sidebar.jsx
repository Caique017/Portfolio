import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/Minha foto.jpeg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
    <aside id="sidebar">
        <img src={Avatar} alt="Caique Nunes" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="CV Caique Nunes.pdf" className="btn">
        Download currículo
        </a>
    </aside>
    );
};

export default Sidebar;