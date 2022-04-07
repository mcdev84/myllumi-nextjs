import styled from 'styled-components'
import {
	GenericSectionLayout,
	GenericText,
}             from '../assets/styled-components/styled'

const SignUpPageLayout = styled(GenericSectionLayout)``
const ForgotText = styled(GenericText)``

export default function SignUpPage () {

	return (
		<SignUpPageLayout>
			<ForgotText>
				Forgot password?
			</ForgotText>
		</SignUpPageLayout>
	)
}