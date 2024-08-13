import Image from 'next';
import Styles from './card.module.scss';
import Logo from '../../public/images/logo.png';

const Card = () => {
  const cardsData = [
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
      {cardsData.map((card, index) => (
        <div key={index} className={Styles.card}>
          <Image src={card.image} alt="Icone" />
          <h1>{card.title}</h1>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
