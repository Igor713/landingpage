import Styles from './menuFooter.module.scss';

const MenuFooter = ({ menuItem }) => {
  return (
    <>
      <h1 className={Styles.menuFooterTitle}>{menuItem.title}</h1>
      <ul className={Styles.menuFooterList}>
        {menuItem?.itens?.map((item, index) => (
          <li className={Styles.menuFooterItem} key={index}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuFooter;
