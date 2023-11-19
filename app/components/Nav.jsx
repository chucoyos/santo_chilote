import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
	return (
		<nav className='px-5 flex nav items-center justify-between border border-gray-300'>
			<Link
				href='/'
				className=''
			>
				<div className='flex flex-col items-center '>
					<p className='hidden lg:block text-orange-900 text-center italic'>
						Fish Tacos
					</p>
					<Image
						src='/logo.jpeg'
						alt='Santo Chilote logo'
						width={40}
						height={40}
						className='rounded-full'
					/>
					<p className='hidden lg:block text-orange-900 text-center italic'>
						Santo Chilote
					</p>
				</div>
			</Link>
			<div className='hidden lg:block flex items-center text-orange-900'>
				<Link
					href='/menu'
					className='mr-4'
				>
					Menu
				</Link>
				<a href='/about'>About</a>
			</div>
			<div className='lg:hidden md:block flex text-orange-900'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-10 h-10'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</div>
		</nav>
	)
}

export default Nav
