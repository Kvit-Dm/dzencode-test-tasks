import Image from 'next/image';
import logo from '@/assets/images/Green-Shield-Icon.png';
import styles from './Header.module.scss';

export default function LayoutHeader() {
  return (
    <div className={styles.header}>
      <div className="d-flex align-items-center">
        <Image className={styles.headerLogo} src={logo} alt={'logo'} />
        <h2 className={styles.headerTitle}>INVENTORY</h2>
      </div>
      <div>
        <p>some text ?</p>
      </div>
    </div>
  );
}
