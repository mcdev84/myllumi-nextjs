import { LoginHeader }           from '../components/html/LoginHeader'
import { AppLayout, MainLayout } from '../assets/styled-components/styled'
import Footer                    from '../components/html/Footer'
import { LoginLayout }           from './LoginPage'

export default function AccessDenied () {
	return (
		<AppLayout>
			<LoginHeader/>
			<MainLayout>
				<div>
					<h1>Access Denied</h1>
				</div>
			</MainLayout>
			<Footer/>
		</AppLayout>
	)
}
