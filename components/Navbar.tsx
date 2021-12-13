import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  name: string,
  route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className='font-montserrat font-semibold hover:text-cnc-yellow'>{name}</span>
        </a>
      </Link>
    ) : null
  );
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      setActiveItem('About');
      return;
    }
    const newValue = pathname.charAt(1).toUpperCase() + pathname.substring(2);
    setActiveItem(newValue);
  }, []);

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='font-bold text-cnc-yellow font-montserrat text-xl border-b-4 border-cnc-yellow md:text-2xl'>
        {activeItem}
      </span>
      <div className='text-lg flex space-x-5'>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
      </div>
    </div>
  );
};

export default Navbar;
