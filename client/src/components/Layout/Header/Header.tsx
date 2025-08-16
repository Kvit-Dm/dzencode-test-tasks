import Image from 'next/image';
import logo from '@/assets/images/Green-Shield-Icon.png';
import styles from './Header.module.scss';

export default function LayoutHeader() {
  return (
    <div className={styles.header}>
      <Image className={styles.headerLogo} src={logo} alt={'logo'} />
      <h2 className={styles.headerTitle}>INVENTORY</h2>
    </div>
  );
}
