import Button from '../Button';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/images/logo.png';
import Styles from './header.module.scss';

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.brand}>
        <Image src={Logo} alt="Logomarca" />
      </div>
      <div className={Styles.menu}>
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
      </div>
      <div className={Styles.action}>
        <Button title="Fale conosco" typeOf="primary" />
      </div>
    </div>
  );
};

export default Header;
