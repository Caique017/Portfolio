import {FaLinkedinIn, FaInstagram, FaGithub} from 'react-icons/fa'

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, text_link:"https://www.linkedin.com/in/caique-nunes-624720202/" },
    { name: "github", icon: <FaGithub />, text_link:"https://github.com/Caique017" },
    { name: "instagram", icon: <FaInstagram />, text_link:"https://www.instagram.com/caique.nunes11/" },
];

const SocialNetworks = () => {
    return ( 
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.text_link} target="_blank" className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
    );
};

export default SocialNetworks;