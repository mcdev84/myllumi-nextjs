import styled                  from 'styled-components'
import { EmailInput }          from '../components/singleElements/EmailInput'
import {
	PasswordInput,
}                              from '../components/singleElements/PasswordInput'
import {
	SignInButton,
}                              from '../components/singleElements/SignInButton'
import {
	ForgotPasswordLink,
}                              from '../components/singleElements/ForgotPasswordLink'
import { SignUpLink }          from '../components/singleElements/SignUpLink'
import { LoginHeader }         from '../components/html/LoginHeader'
import Footer                  from '../components/html/Footer'
import {
	AppLayout,
	GenericFormLayout,
	MainLayout,
}                                    from '../assets/styled-components/styled'
import { createContext, useReducer } from 'react'
import { loginReducer }              from '../store/loginReducer'

export const LoginLayout = styled(GenericFormLayout)`
  grid-template-areas:		". email ."
													". password ."
	  											". . ."
													". submit ."
													". recover ."
	  											". . ."
													". signup .";`
export const LoginContext = createContext()

export default function LoginPage () {
	const [loginState, dispatch] = useReducer(loginReducer, {
		user          : null,
		email         : null,
		password      : null,
		forgotPassword: false,
		signUp        : false,
	})


	return (
		<LoginContext.Provider value={ [loginState, dispatch] }>
			<AppLayout>
				<LoginHeader/>
				<MainLayout>
					<LoginLayout>
						<EmailInput/>
						<PasswordInput/>
						<SignInButton/>
						<ForgotPasswordLink/>
						<SignUpLink/>
					</LoginLayout>
				</MainLayout>
				<Footer/>
			</AppLayout>
		</LoginContext.Provider>
	)

}
