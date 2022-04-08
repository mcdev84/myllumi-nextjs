import styled                   from 'styled-components'
import {GenericText, GenericSectionLayout } from '../../assets/styled-components/styled'
import Link from 'next/link'

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
				<Link href={'/ForgotPassword'}><p>Forgot password?</p></Link>

			</ForgotPasswordLinkText>
		</ForgotPasswordLinkLayout>
	)
}