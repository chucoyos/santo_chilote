import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
	return (
		<nav className='nav flex items-center justify-between border border-gray-300'>
			<Link
				href='/'
				className=''
			>
				<div className='flex flex-col items-center'>
					<p className='text-orange-900 text-center italic'>Fish Tacos</p>
					<Image
						src='/logo.jpeg'
						alt='Santo Chilote logo'
						width={40}
						height={40}
						className='rounded-full'
					/>
					<p className='text-orange-900 text-center italic'>Santo Chilote</p>
				</div>
			</Link>
			<div className='flex items-center text-orange-900'>
				<Link
					href='/menu'
					className='mr-4'
				>
					Menu
				</Link>
				<a href='/about'>About</a>
			</div>
		</nav>
	)
}

export default Nav
