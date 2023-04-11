import styles from './Toolbar.module.css';

const Toolbar = ({children}) => {

  return <div className={styles.toolbar}>
    {children}
  </div>
}

export default Toolbar;