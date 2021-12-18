import React, { FunctionComponent } from 'react';
import { createPopper } from '@popperjs/core';
import { TiThMenu } from 'react-icons/ti';
import Link from 'next/link';
import { INavItem } from '../utils/type';

const Dropdown: FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  navItems: INavItem[]
}> = ({ activeItem, setActiveItem, navItems }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef: React.RefObject<any> = React.createRef();
  const popoverDropdownRef: React.RefObject<any> = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-end',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const handleClickItem = (item: string) => {
    if (item !== activeItem) {
      setDropdownPopoverShow(false);
    }
    setActiveItem(item);
  };
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full sm:w-6/12 md:w-4/12 px-2'>
          <div className='relative inline-flex align-middle w-full'>
            <button
              className={'rounded shadow hover:shadow-lg ' +
              'outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 '}
              type='button'
              aria-label='menu-button'
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <TiThMenu className='text-cnc-yellow' size={28} />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                'bg-gray-900 border border-gray-900 dark:border-cnc-yellow ' +
                'text-white dark:text-cnc-yellow text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-5'
              }
              style={{ minWidth: '10rem' }}
            >
              {navItems.map(({ name, route }) => {
                return (
                  <Link href={route} scroll={false} key={name}>
                     <span onClick={() => handleClickItem(name)}
                           className={'text-medium py-2 px-4 cursor-pointer ' +
                           (name === activeItem ? ' font-bold ' : '') +
                           ' capitalize block w-full whitespace-nowrap'}>
                       {name}
                     </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
