import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { navItems } from '../utils/data';

import Dropdown from './DropDown';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('about');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      setActiveItem('about');
      return;
    }
    const newValue = pathname.substring(1);
    setActiveItem(newValue);
  }, []);

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span
        className='font-bold capitalize text-cnc-yellow font-montserrat
        text-xl lg:text-2xl border-b-4 border-cnc-yellow md:text-2xl'>
        {activeItem}
      </span>
      <div className='text-lg flex space-x-5'>
        <Dropdown activeItem={activeItem} setActiveItem={setActiveItem}
                  navItems={navItems} />
      </div>
    </div>
  );
};

export default Navbar;
