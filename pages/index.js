
import { LoginHeader } from '../components/html/LoginHeader'
import { AppLayout }   from '../assets/styled-components/styled'
import Main            from '../components/html/Main'


export default function Home () {

	return (
		<AppLayout>
			<LoginHeader/>
			<Main />
			{/*<Link href={'/Store'}><a>STORE</a></Link>*/}
		</AppLayout>
	)
}
