import {
	AppLayout, GenericButtonLayout, GenericFormLayout, GenericInput,
	GenericSectionLayout, GenericText,
	MainLayout,
}                      from '../assets/styled-components/styled'
import { LoginHeader } from '../components/html/LoginHeader'
import Footer          from '../components/html/Footer'
import styled                    from 'styled-components'
import { EmailIcon, EmailInput } from '../components/singleElements/EmailInput'
import Link                    from 'next/link'

const ForgotPasswordLayout = styled(GenericFormLayout)`
grid-template-areas:    ". text ."
												". . ."
  											". email ."
												". . ."
												". submit ."
  											". . ."
												". signin ."`
const ResetPassButton = styled(GenericButtonLayout)`max-height: 45px;`

export default function ForgotPassword () {

	return (
		<AppLayout>
			<LoginHeader/>
			<MainLayout>
				<ForgotPasswordLayout>
						<GenericText gridArea={ 'text' }>Forgot password?
						<small>No worries! Enter your email and we will send a reset link</small>
					</GenericText>
					<EmailInput/>
					<ResetPassButton gridArea={ 'submit'}>
						<GenericText>SEND RESET LINK</GenericText>
					</ResetPassButton>
					<GenericText gridArea={ 'signin' }>
						<Link href={'/LoginPage'}>
						<a>Back to Sign In</a>
					</Link>
					</GenericText>
				</ForgotPasswordLayout>
			</MainLayout>
			<Footer/>
		</AppLayout>

	)
}