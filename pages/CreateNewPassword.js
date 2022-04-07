import styled            from 'styled-components'
import { LoginLayout }              from './LoginPage'
import { PasswordInput }            from '../components/singleElements/PasswordInput'
import { SignInLayout, SignInText } from '../components/singleElements/SignInButton'

const CreateNewPasswordLayout = styled(LoginLayout)`
  grid-template-areas:  ". create ." 
												". password ."
												". confirm ."
 												 ". reset .";
`
const Text = styled.h4`
  display: grid;
  grid-area: create;
  color: whitesmoke
`
const ResetPasswordButton = styled(SignInLayout)`
  grid-area: reset;
`
const ResetButtonText=styled(SignInText)

export const CreateNewPassword = () => {

	return (
		<CreateNewPasswordLayout>
			<Text>Create new password</Text>
			<PasswordInput/>
			<PasswordInput/>
			<ResetPasswordButton>
				<ResetButtonText>RESET PASSWORD</ResetButtonText>
			</ResetPasswordButton>
		</CreateNewPasswordLayout>
	)

}