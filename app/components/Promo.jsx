import Image from 'next/image'
export default function Promo() {
	return (
		<div className=''>
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
