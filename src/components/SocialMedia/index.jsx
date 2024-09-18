import Link from 'next/link';
import Image from 'next/image';
import Styles from './menuFooter.module.scss';

const SocialMedia = ({ socialMediaData }) => {
  return (
    <>
      <h1 className={Styles.socialMediaTitle}>{socialMediaData.title}</h1>
      <ul className={Styles.socialMediaList}>
        {socialMediaData?.itens?.map((item, index) => (
          <Link className={Styles.url} href={item.link} key={index}>
            <Image src={item.icon} alt="Icon" className={Styles.icon} />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default SocialMedia;
