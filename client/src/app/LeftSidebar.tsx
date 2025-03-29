import { useState } from 'react';
import './LeftSidebar.scss';
function LeftSidebar() {
  const [activeItem, setActiveItem] = useState('ПРИХОД');

  const menuItems = [
    'ПРИХОД',
    'ГРУППЫ',
    'ПРОДУКТЫ',
    'ПОЛЬЗОВАТЕЛИ',
    'НАСТРОЙКИ',
  ];

  return (
    <div className={`d-flex flex-column p-3 'sidebar'`}>
      <ul className="nav flex-column">
        {menuItems.map((item) => (
          <li key={item} className="nav-item">
            <button
              className={`nav-link ${activeItem === item ? 'active' : ''}`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default LeftSidebar;
