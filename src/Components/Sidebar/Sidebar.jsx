import style from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.sidebarText}>sidebar</div>
    </aside>
  );
};

export default Sidebar;
