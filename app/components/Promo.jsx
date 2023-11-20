import Image from 'next/image'
export default function Promo() {
	return (
		<div className='drop-shadow cursor-pointer hover:scale-105 transition ease-in-out duration-200 hover:drop-shadow-lg'>
			<Image
				src='/promo.png'
				alt='hot cake promo'
				width={2650}
				height={1840}
				className='rounded-xl'
			/>
		</div>
	)
}
