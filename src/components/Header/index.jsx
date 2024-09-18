import { useState } from 'react';
import Button from '../Button';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/images/logo.svg';
import Styles from './header.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.brand}>
        <Image src={Logo} alt="Logomarca" />
      </div>

      <div className={Styles.hamburgerIcon} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <div className={`${Styles.menu} ${isMenuOpen ? Styles.menuOpen : ''}`}>
        <ul>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">O que fazemos</Link>
          </li>
          <li>
            <Link href="">Cases</Link>
          </li>
        </ul>

        <div className={`${Styles.action} ${Styles.mobile}`}>
          <Button title="Fale conosco" typeOf="primary" />
        </div>
      </div>

      <div className={Styles.action}>
        <Button title="Fale conosco" typeOfClass="primary" />
      </div>
    </div>
  );
};

export default Header;
