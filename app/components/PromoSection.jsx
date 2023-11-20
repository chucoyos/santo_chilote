import Promo from './Promo'
export default function PromoSection() {
	return (
		<div>
			<div className='flex flex-col md:flex-row justify-between md:items-end mt-8 mx-8'>
				<h1 className='text-4xl text-center'>Promos</h1>
				<p className='text-lg text-center'>Check out our latest promos</p>
			</div>
			<div className='hidden lg:block'>
				<div className='flex flex-row my-24 mx-8 gap-8'>
					<Promo />
					<Promo />
					<Promo />
				</div>
				<div className='flex flex-row mb-32 mx-8 gap-8'>
					<Promo />
					<Promo />
					<Promo />
				</div>
			</div>
			<div className='lg:hidden'>
				<div className='flex flex-row my-24 mx-8 gap-8'>
					<Promo />
					<Promo />
				</div>
				<div className='flex flex-row mb-32 mx-8 gap-8'>
					<Promo />
					<Promo />
				</div>
			</div>
		</div>
	)
}
