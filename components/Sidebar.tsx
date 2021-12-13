import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
import { GiTie } from 'react-icons/gi';

import Image from 'next/image';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <Image
        src='/images/mypicture.jpg'
        alt='image profile'
        className='w-32 h-32 rounded-full mx-auto'
        height='128'
        width='128'
        quality='100'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-montserrat'>
        <span className='text-green'>Muhammad </span>
        Hasan
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-700 rounded-full'>Final Year Student</p>
      {/* Resume */}
      <a className='flex items-center justify-center px-2 py-1 my-2
        bg-gray-200 rounded-full cursor-pointer dark:bg-dark-700'
         href='/assets/cv-hasan.pdf'
         target='_blank'
      >
        <GiTie className='w-6 h-6' />
        <span>View CV</span>
      </a>
      {/*Social Icons*/}
      <div className='flex justify-around my-5 text-green w-9/12 md:w-full mx-auto'>
        <a href='https://github.com/muhammadhasan01' target='_blank' aria-label='github'>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.linkedin.com/in/muhammadhasan01' target='_blank' aria-label='linkedin'>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/*  Address */}
      <div className='my-5 py-4 bg-gray-200 dark:bg-dark-700' style={{ 'marginLeft': '-1rem', 'marginRight': '-1rem' }}>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Bandung, Indonesia</span>
        </div>
        <p className='my-2'>muhammadhasan50@gmail.com</p>
        <p className='my-2'>+62-859-5606-4292</p>
      </div>
      {/*  Email Button */}
      <button
        className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none'
        onClick={() => window.open('mailto:muhammadhasan50@gmail.com')}
      >Email Me
      </button>
      <button
        className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2'
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
