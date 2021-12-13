import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
import { FaGraduationCap } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { SiGmail } from 'react-icons/si';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

import Image from 'next/image';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <div className='mt-2'>
        <Image
          src='/images/mypicture.jpg'
          alt='image profile'
          className='w-32 h-32 rounded-full mx-auto'
          height='150'
          width='150'
          quality='100'
        />
      </div>
      <h3 className='my-4 text-3xl font-bold text-cnc-yellow tracking-wider font-montserrat'>
        Muhammad Hasan
      </h3>
      <div className='flex flex-col'>
        <p
          className='flex items-center justify-center px-2 py-2 my-3 border-2 border-red-800 dark:border-cnc-yellow font-semibold dark:text-cnc-yellow text-orange-800 bg-cnc-yellow dark:bg-dark-700 rounded-full'>
          <FaGraduationCap className='mx-1' size={20} />
          <span>Final Year Student</span></p>
        {/* Resume */}
        <a className='flex items-center justify-center px-2 py-2 my-2
        bg-cnc-yellow rounded-full text-orange-800 font-semibold
        dark:text-cnc-yellow border-2 border-red-800 dark:border-cnc-yellow cursor-pointer dark:bg-dark-700'
           href='/assets/cv-hasan.pdf'
           target='_blank'
        >
          <TiDocumentText className='mx-1' size={25} />
          <span>View CV</span>
        </a>
      </div>
      {/*Social Icons*/}
      <div className='flex justify-around my-5 text-cnc-yellow w-9/12 md:w-full mx-auto'>
        <a href='https://github.com/muhammadhasan01' target='_blank' aria-label='github'>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.linkedin.com/in/muhammadhasan01' target='_blank' aria-label='linkedin'>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.instagram.com/muhammadhasan01/' target='_blank' aria-label='linkedin'>
          <AiFillInstagram className='w-8 h-8 cursor-pointer' />
        </a>
      </div>

      {/*  Address */}
      <div
        className='my-5 py-4 bg-cnc-yellow flex items-center justify-center flex-col space-y-2 font-semibold text-orange-800 dark:text-cnc-yellow dark:bg-dark-700'
        style={{ 'marginLeft': '-1rem', 'marginRight': '-1rem' }}>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation size={18} />
          <span>Bandung, Indonesia</span>
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <AiFillPhone size={18} />
          <span>+62-859-5606-4292</span>
        </div>
      </div>
      {/*  Email Button */}
      <div className='flex flex-col space-y-3'>
        <button
          className='bg-cnc-yellow text-orange-800 font-semibold w-full rounded-full
        py-2 my-2 flex items-center justify-center dark:text-cnc-yellow dark:bg-dark-700 focus:outline-none'
          onClick={() => window.open('mailto:muhammadhasan50@gmail.com')}
        >
          <SiGmail className='mx-2' size={20} />
          <span>Email Me</span>
        </button>
        <button
          className='bg-cnc-yellow text-orange-800 font-semibold w-full rounded-full
        py-2 my-2 flex items-center justify-center dark:text-cnc-yellow dark:bg-dark-700 focus:outline-none'
          onClick={changeTheme}
        >
          {theme === 'dark' ?
            <BsSunFill size={20} /> : <BsFillMoonFill size={20} />
          }
          <span className='mx-1'>Toggle Theme</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
