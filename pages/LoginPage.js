import styled                 from 'styled-components'
import { EmailInput }         from '../components/singleElements/EmailInput'
import { PasswordInput }      from '../components/singleElements/PasswordInput'
import { SignInButton }       from '../components/singleElements/SignInButton'
import { ForgotPasswordLink } from '../components/singleElements/ForgotPasswordLink'
import { SignUpLink }         from '../components/singleElements/SignUpLink'
import { BackArrow }          from '../components/singleElements/BackArrow'
import { Header }             from '../components/html/Header'
import Main                   from '../components/html/Main'
import Footer                 from '../components/html/Footer'
import { AppLayout }          from '../assets/styled-components/styled'

export const LoginLayout = styled.form`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: login; //give iteractive area
  grid-row-gap: 5%;
  grid-template-areas: ". email ."
												". password ."
  											". . ."
												". submit ."
												". recover ."
  ". . ."
												". signup ."
  											" . backarrow .";
  grid-template-columns: .5fr minmax(1fr, 500px) .5fr;
  grid-template-rows: repeat(6, minmax(30px, 45px));
  grid-auto-flow: column;
`

export default function LoginPage () {

	return (
		<AppLayout>
					<Header/>
			<Main><LoginLayout>
						<EmailInput/>
						<PasswordInput/>
						<SignInButton/>
						<ForgotPasswordLink/>
						<SignUpLink/>
						<BackArrow/>
					</LoginLayout></Main>
					<Footer/>
				</AppLayout>

	)

}
