import { Agbalumo } from 'next/font/google'
import './globals.css'
import './layout.css'

import Footer from './components/Footer'
import Nav from './components/Nav'
import DrawerNav from './components/DrawerNav'

const agbalumo = Agbalumo({ weight: '400', subsets: ['latin'] })

export const metadata = {
	title: 'Santo Chilote',
	description: 'Best Mexican food in the Todos Santos area',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={agbalumo.className}>
				<DrawerNav />
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
