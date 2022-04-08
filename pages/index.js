import styles          from '../styles/Home.module.css'
import { LoginHeader } from '../components/html/LoginHeader'
import { AppLayout }   from '../assets/styled-components/styled'
import Main            from '../components/html/Main'
import Link            from 'next/link'

export default function Home () {

	return (
		<AppLayout>
			<LoginHeader/>
			<Main />
			<Link href={'/Store'}><a>STORE</a></Link>
		</AppLayout>
	)
}
