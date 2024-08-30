import Image from 'next/image';
import Styles from './card.module.scss';
import Logo from '../../public/images/Outline.svg';

const Card = () => {
  const cardsContent = [
    {
      title: 'Card 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consectetur facilis id, ut praesentium veniam.',
      image: Logo,
    },
    {
      title: 'Card 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consectetur facilis id, ut praesentium veniam.',
      image: Logo,
    },
    {
      title: 'Card 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consectetur facilis id, ut praesentium veniam.',
      image: Logo,
    },
    {
      title: 'Card 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consectetur facilis id, ut praesentium veniam.',
      image: Logo,
    },
  ];

  return (
    <div className={Styles.cardContainer}>
      {cardsContent.map((card, index) => (
        <div key={index} className={Styles.cardWrapper}>
          <Image src={card.image} alt="Icone" className={Styles.cardImage} />
          <h1 className={Styles.cardTitle}>{card.title}</h1>
          <p className={Styles.cardDescription}>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
