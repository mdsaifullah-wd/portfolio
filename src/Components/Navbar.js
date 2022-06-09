import React, { useState } from 'react';
import logo from '../Assets/Images/logo.png';
import CustomLink from './CustomLink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { GoLocation } from 'react-icons/go';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import ButtonPrimary from './ButtonPrimary';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className='bg-white py-8'>
      <div className='container flex justify-between items-center'>
        <div className='w-16'>
          <img src={logo} alt='Logo' className='w-full' />
        </div>
      </div>
      <button
        className={`${
          sidebar ? '' : 'shadow-2xl'
        }  bg-white text-3xl p-4 fixed top-8 right-12 z-50`}
        onClick={() => setSidebar(!sidebar)}>
        {sidebar ? <ImCross /> : <GiHamburgerMenu />}
      </button>
      <div
        className={`${
          sidebar ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 bottom-0 flex flex-col gap-20 justify-end items-center w-1/2 h-screen bg-black text-white transition-transform duration-200 ease-in-out pb-8`}>
        <nav>
          <ul className='flex flex-col items-center gap-8 text-3xl'>
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/about-me'}>About Me</CustomLink>
            <CustomLink to={'/blogs'}>Blogs</CustomLink>
          </ul>
        </nav>
        <ButtonPrimary>Contact Me</ButtonPrimary>
        <div className='flex justify-center gap-8 text-xl'>
          <a
            target='_blank'
            href='https://www.github.com/mdsaifullah-wd'
            rel='noreferrer'>
            <FaGithub />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/mdsaifullah365'
            rel='noreferrer'>
            <FaLinkedin />
          </a>
          <a
            target='_blank'
            href='mailto:mdsaifullah365@yahoo.com'
            rel='noreferrer'>
            <FaEnvelope />
          </a>
          <a href='tel:+8801766637772' rel='noreferrer'>
            <FaPhone />
          </a>
        </div>
        <div className='flex gap-2 items-center'>
          <GoLocation />
          <p>Chattogram, Bangladesh</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
