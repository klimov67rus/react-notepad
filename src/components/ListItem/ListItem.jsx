import { useState, useEffect } from 'react';
import styles from './ListItem.module.css';


const ListItem = ({item, isSelect, onSelectNote}) => {

  const cls = (isSelect == item.id) ? `${styles.list_item} ${styles.selected}` : `${styles.list_item}`;

  const onClickHandler = () => {
    onSelectNote(item.id);
  }
  return (
    <div 
      className={cls} 
      onClick={onClickHandler}
    >
      <h4 className={styles.list_item__title}>
        {item.title}
      </h4>
      <div className={styles.list_item__bottom}>
        <div className={styles.list_item__date}>
          {item.date}
        </div>
        <div className={styles.list_item__text}>
          {item.text.slice(0, 25)}
        </div>
      </div>
     
    </div>
  );
}

export default ListItem;