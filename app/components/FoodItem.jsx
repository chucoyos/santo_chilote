import Image from 'next/image'
const FoodItem = ({ name, image }) => (
	<div className='food-item flex flex-col items-center w-1/8'>
		<Image
			src={image}
			alt={name}
			width={300}
			height={300}
		/>
		<h3 className=''>{name}</h3>
	</div>
)

export default FoodItem
