import styles        from '../styles/Home.module.css'
import { Header }    from '../components/html/Header'
import { AppLayout } from '../assets/styled-components/styled'
import Main          from '../components/html/Main'
import Footer        from '../components/html/Footer'

export default function Home () {
	const gridTemplateContent = `". init ." "pro . cust"`
	return (
		<AppLayout>
			<Header/>
			<Main gridTemplateContent={gridTemplateContent}/>
			<Footer/>
		</AppLayout>
	)
}
