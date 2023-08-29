import * as React from 'react';

import NextImage from '@/components/NextImage';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  return (
    <header className='absolute top-0 z-50 h-20 w-full px-5 '>
      <div className='flex h-full w-full items-center justify-between'>
        <span className='text-lg font-bold md:text-2xl '>Siwon's Profile</span>
        <NextImage
          useSkeleton
          src='/images/my-logo.png'
          width='180'
          height='180'
          alt='Logo'
          className='w-[40px]'
          imgClassName='rounded-full'
        />
      </div>
      {/* <div className='flex items-center justify-between w-full layout h-14'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}
    </header>
  );
}
