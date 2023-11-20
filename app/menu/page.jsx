import FoodItem from '../components/FoodItem'
const Menu = () => (
	<div className='flex flex-col mt-32'>
		<h1 className='text-6xl m-auto'>Menu</h1>
		<div className='flex flex-row justify-center'>
			<FoodItem
				name='Hot Cakes'
				image='/Hot-cakes.png'
			/>
			<FoodItem
				name='Hot Cakes'
				image='/Hot-cakes.png'
			/>
			<FoodItem
				name='Hot Cakes'
				image='/Hot-cakes.png'
			/>
		</div>
		<div className='flex flex-row justify-center'>
			<FoodItem
				name='Hot Cakes'
				image='/Hot-cakes.png'
			/>
			<FoodItem
				name='Hot Cakes'
				image='/Hot-cakes.png'
			/>
			<FoodItem
				name='Hot Cakes'
				image='/Hot-cakes.png'
			/>
		</div>
	</div>
)

export default Menu
