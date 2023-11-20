import PromoSection from './components/PromoSection'

export default function Home() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-between'>
			<div className='flex flex-col items-center hero'>
				<h1 className='text-4xl lg:text-6xl font-bold text-white mb-4'>
					Santo Chilote
				</h1>
				<p className='text-xl text-white text-center'>
					Best Mexican fish tacos in the Todos Santos area
				</p>
			</div>
			<PromoSection />
		</div>
	)
}
