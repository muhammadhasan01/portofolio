import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiFillFacebook,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
import { FaGraduationCap } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { SiCodeforces } from 'react-icons/si';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

import Image from 'next/image';

const Sidebar = () => {

  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <div className='relative border-4 border-red-900 dark:border-cnc-yellow w-36 h-36 rounded-full mx-auto'
      >
        <Image
          src='/images/mhasan01.webp'
          alt='image profile'
          className='rounded-full'
          height='160'
          width='160'
          quality='100'
        />
      </div>
      <h3 className='my-4 text-xl xl:text-3xl md:text-2xl font-bold text-cnc-yellow tracking-wider font-montserrat'>
        Muhammad Hasan
      </h3>
      <div className='flex flex-col'>
        <p
          className='flex items-center justify-center px-2 py-2 my-3 border-2 border-red-800 cursor-pointer
          dark:border-cnc-yellow font-semibold dark:text-cnc-yellow text-orange-800 bg-cnc-yellow dark:bg-dark-500 rounded-full'>
          <FaGraduationCap className='mx-1' size={20} />
          <span className='font-montserrat'>Final Year Student</span></p>
        {/* Resume */}
        <a className='flex items-center justify-center px-2 py-2 my-2
        bg-cnc-yellow rounded-full text-orange-800 font-semibold
        dark:text-cnc-yellow border-2 border-red-800 dark:border-cnc-yellow cursor-pointer dark:bg-dark-500'
           href='https://drive.google.com/file/d/10t3m_i9c0N1O19P3nNRaPJJvKSEhwWbh/view?usp=sharing'
           target='_blank'
        >
          <TiDocumentText className='mx-1' size={25} />
          <span className='font-montserrat'>View CV</span>
        </a>
      </div>
      {/*Social Icons*/}
      <div className='flex justify-around my-5 text-cnc-yellow w-9/12 md:w-full mx-auto'>
        <a href='https://codeforces.com/profile/muhammadhasan01' target='_blank' rel="noopener" aria-label='codeforces'>
          <SiCodeforces className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.facebook.com/muhamad.hasan.7315/' target='_blank' rel="noopener" aria-label='linkedin'>
          <AiFillFacebook className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://github.com/muhammadhasan01' target='_blank' rel="noopener" aria-label='github'>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.linkedin.com/in/muhammadhasan01' target='_blank' rel="noopener" aria-label='linkedin'>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://medium.com/@muhammadhasan50' target='_blank' rel="noopener" aria-label='linkedin'>
          <AiFillMediumSquare className='w-8 h-8 cursor-pointer' />
        </a>
      </div>

      {/*  Address */}
      <div
        className='my-5 py-4 bg-cnc-yellow flex items-center justify-center flex-col space-y-2 font-semibold text-orange-800
        dark:text-cnc-yellow dark:bg-dark border-y-2 border-orange-800 dark:border-cnc-yellow font-montserrat'
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
          className='bg-cnc-yellow text-orange-800 font-semibold w-full rounded-full border-2 border-red-800 dark:border-cnc-yellow
        py-2 my-2 flex items-center justify-center dark:text-cnc-yellow dark:bg-dark-500 focus:outline-none'
          onClick={() => window.open('mailto:muhammadhasan50@gmail.com')}
        >
          <GrMail className='mx-2' size={22} />
          <span className='font-montserrat'>Email Me</span>
        </button>
        <button
          className='bg-cnc-yellow text-orange-800 font-semibold w-full rounded-full border-2 border-red-800 dark:border-cnc-yellow
        py-2 my-2 flex items-center justify-center dark:text-cnc-yellow dark:bg-dark-500 focus:outline-none'
          onClick={changeTheme}
        >
          {theme === 'light' ?
            <BsSunFill size={20} /> : <BsFillMoonFill size={20} />
          }
          <span className='mx-2 font-montserrat'>Toggle Theme</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
