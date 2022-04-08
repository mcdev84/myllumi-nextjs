import styled          from 'styled-components'
import { LoginLayout } from './LoginPage'
import {
	PasswordInput,
}                      from '../components/singleElements/PasswordInput'
import {
	SignInLayout,
	SignInText,
}                      from '../components/singleElements/SignInButton'
import {
	AppLayout, GenericButtonLayout,
	GenericFormLayout, GenericText,
	MainLayout,
}                      from '../assets/styled-components/styled'
import { LoginHeader } from '../components/html/LoginHeader'

const CreatePasswordLayout = styled(GenericFormLayout)`
  grid-template-areas:    ". text ."
												  ". email ."
  												". password ."
													". . ."
  												". submit ."
													". . ."
													". . ."`
const CreatePasswordButton = styled(GenericButtonLayout)`max-height: 45px;`

export const CreateNewPassword = () => {

	return (

		<AppLayout>
			<LoginHeader/>
			<MainLayout>
				<CreatePasswordLayout>
					<GenericText>Create new password</GenericText>
					<PasswordInput/>
					<PasswordInput/>
					<CreatePasswordButton>
						<GenericText>RESET PASSWORD</GenericText>
					</CreatePasswordButton>
				</CreatePasswordLayout>
			</MainLayout>
		</AppLayout>
	)

}