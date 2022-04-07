import styled                   from 'styled-components'
import { useContext }                       from 'react'
import { LoginContext }                     from '../hocs/loginContextWrapper'
import {GenericText, GenericSectionLayout } from '../../assets/styled-components/styled'


const ForgotPasswordLinkLayout = styled(GenericSectionLayout)`
  background-color: transparent;
  place-content: center;`

const ForgotPasswordLinkText = styled(GenericText)`
`
export const ForgotPasswordLink = () => {
	/*const [loginState, display] = useContext(LoginContext)
	const handleForgotPassword=()=> <ForgotPassword/>*/
	return (
		<ForgotPasswordLinkLayout gridArea={ 'recover' }>
			<ForgotPasswordLinkText as={ 'a' } href={ '#' }>
				Forgot password?
			</ForgotPasswordLinkText>
		</ForgotPasswordLinkLayout>
	)
}