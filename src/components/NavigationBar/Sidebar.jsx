//importing from react-redux
import { useSelector } from "react-redux";
import Logo from "../Logo";
import NavLinks from "./NavLinks";


const Sidebar = () => {
  const { showSidebar } = useSelector((state) => state.ui);
  return (
    <>
     <aside className='sidebar'>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header className="header">
           <Logo className='nav-logo' />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
    </>
   
  );
};

export default Sidebar;
