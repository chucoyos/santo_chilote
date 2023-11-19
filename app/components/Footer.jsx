import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='flex text-sm ml-4'>
				<ul className='flex justify-between w-3/4'>
					<Link
						href='/'
						className='mr-2'
					>
						<li>Condiciones de Servicio</li>
					</Link>
					<Link
						href='/'
						className='mr-2'
					>
						<li>Preguntas Frecuentes</li>
					</Link>
					<Link
						href='/'
						className='mr-2'
					>
						<li>Contactanos</li>
					</Link>
				</ul>
			</div>
			<div className='flex mt-2 ml-4'>
				<p className='text-2xl'>Santo Chilote</p>
			</div>
		</footer>
	)
}

export default Footer
