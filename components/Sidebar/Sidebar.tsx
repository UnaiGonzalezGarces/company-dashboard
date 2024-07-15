import Logo from '@/components/Logo/Logo';
import SidebarRoutes from '../SidebarRoutes/SidebarRoutes';

const Sidebar = () => {
  return (
    <div className='h-screen'>
      <div className='h-full flex flex-col border-r'>
        <Logo />
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
