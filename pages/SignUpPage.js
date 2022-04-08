import styled            from 'styled-components'
import {
	AppLayout, GenericButtonLayout,
	GenericFormLayout,
	GenericSectionLayout,
	GenericText, MainLayout,
}                      from '../assets/styled-components/styled'
import { LoginHeader } from '../components/html/LoginHeader'
import { EmailInput }  from '../components/singleElements/EmailInput'
import { PasswordInput } from '../components/singleElements/PasswordInput'
import Footer            from '../components/html/Footer'
import { NameInput }     from '../components/singleElements/NameInput'
import Link              from 'next/link'

const SignUpPageLayout = styled(GenericFormLayout)`
  grid-template-areas:		  ". name ."
														". email ."
		  											". password ."
														". .  ."
  													". signup ."
														". signin .";
`
const ForgotText = styled(GenericText)``
const SignUpButton = styled(GenericButtonLayout)`max-height: 45px;`
export default function SignUpPage () {

	return (
		<AppLayout>
			<LoginHeader/>
			<MainLayout>
				<SignUpPageLayout>
					<NameInput/>
					<EmailInput/>
					<PasswordInput/>
					<SignUpButton gridArea={ 'signup' }>
						<Link href={ '/SuccefullySignupPage' }>
							<ForgotText>SUGN UP</ForgotText>
						</Link>
					</SignUpButton>

					<ForgotText gridArea={ 'signin' }>
						Forgot password?
					</ForgotText>
				</SignUpPageLayout>
			</MainLayout>
			<Footer/>
		</AppLayout>
	)
}