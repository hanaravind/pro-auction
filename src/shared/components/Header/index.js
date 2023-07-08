import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header id="header" className='sticky top-0 left-0 w-full bg-white shadow'>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='h-16 flex items-center'>
              <div className='ml-4 flex lg:ml-0'>
                <Link href={'/'}><span className="text-2xl">Pro Auction</span></Link>
              </div>
              <div className="ml-auto flex gap-x-4 items-center justify-end">
                <Link href={'/faq'}><div>Faq</div></Link>
                <Link href={'/'}><div>Offers</div></Link>
                <Link href={'/blog'}><div>Blog</div></Link>
                <Link href={'/about'}><div>About us</div></Link>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Header