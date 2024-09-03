import Image from 'next/image';
import MenuFooter from '../MenuFooter';
import SocialMedia from '../SocialMedia';

import Styles from './footer.module.scss';

//Images
import Logo from '/public/images/logo.svg';
import IconInstagram from '/public/images/icon-instagram.svg';
import IconFacebook from '/public/images/icon-facebook.svg';
import IconLinkedin from '/public/images/icon-linkedin.svg';
import IconYoutube from '/public/images/icon-youtube.svg';

const Footer = () => {
  const menuList1 = {
    title: 'MENU',
    itens: [{ text: 'Quem somos' }, { text: 'Cases' }],
  };

  const menuList2 = {
    title: 'CONTEÚDO',
    itens: [{ text: 'E-books' }, { text: 'Fórmulas prontas' }],
  };

  const socialMediaContent = {
    title: 'SOCIAL',
    itens: [
      {
        name: 'Instagram',
        link: 'www.instagram.com',
        icon: IconInstagram,
      },
      {
        name: 'Facebook',
        link: 'www.Facebook.com',
        icon: IconFacebook,
      },
      {
        name: 'LinkedIn',
        link: 'www.linkedin.com',
        icon: IconLinkedin,
      },
      {
        name: 'Youtube',
        link: 'www.youtube.com',
        icon: IconYoutube,
      },
    ],
  };

  return (
    <div className={Styles.footerContainer}>
      <div className={Styles.footerWrapper}>
        <div className={`${Styles.column} ${Styles.mainColumn}`}>
          <Image className={Styles.logo} src={Logo} alt="Logo" />
          <h1 className={Styles.phone}>0800 800 800</h1>
          <p className={Styles.email}>comercial@agencia.com.br</p>
        </div>

        <div className={Styles.column}>
          <MenuFooter menuItem={menuList1} />
        </div>

        <div className={Styles.column}>
          <MenuFooter menuItem={menuList2} />
        </div>

        <div className={`${Styles.column}`}>
          <SocialMedia socialMediaData={socialMediaContent} />
        </div>
      </div>

      <div className={Styles.allRightReserved}>
        ©2022 AGENCIA - Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
