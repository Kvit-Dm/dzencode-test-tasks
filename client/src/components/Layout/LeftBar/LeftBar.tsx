import LeftSidebar from '@/app/LeftSidebar';
import styles from './LeftBar.module.scss';

interface LeftBarProps {
  activeToggleMenu: boolean;
  toggleManu: (value: boolean) => void;
}

export default function LeftBar(props: LeftBarProps) {
  function ShowUpHandler() {
    props.toggleManu(!props.activeToggleMenu);
  }

  return (
    <div className={`${styles.leftBar} ${!props.activeToggleMenu ? styles.leftBarHide : ''}`}>
      <button className={styles.leftBarBtn} onClick={ShowUpHandler}>
        <div className={styles.leftBarBtnShell}>
          <div className={`${styles.leftBarBtnArrow} ${!props.activeToggleMenu ? styles.leftBarBtnArrowRotate : ''}`}></div>
        </div>
      </button>
      <LeftSidebar parentStyleProp="overflow-hidden" />
    </div>
  );
}
