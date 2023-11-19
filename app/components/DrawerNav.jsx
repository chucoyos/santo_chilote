'use client'
export default function DrawerNav() {
	const closeDrawer = () => {
		const drawer = document.querySelector('.drawerNav')
		drawer.classList.remove('drawerOpen')
		drawer.classList.add('drawerClose')
	}
	return (
		<div
			className='drawerNav drawerClose z-0'
			onClick={closeDrawer}
		>
			<div className='closeBtn absolute top-4 right-0 mt-4 mr-4'>
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
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</div>
			<h1>DrawerNav</h1>
		</div>
	)
}
