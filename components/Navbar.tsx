import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    <header className='absolute w-full z-10'>
      <nav className='max-w[90rem] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="CarHub Logo"
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
        <CustomButton 
          title='Sign In'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[8.125rem]'
          btnType='button'
        />
      </nav>
    </header>
  )
}

export default Navbar