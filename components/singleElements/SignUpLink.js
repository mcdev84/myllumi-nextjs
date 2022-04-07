import styled                   from 'styled-components'
import Link from 'next/link'
import {
	GenericSectionLayout,
	GenericText,
}           from '../../assets/styled-components/styled'

const SignUpLinkLayout = styled(GenericSectionLayout)`
  background-color: transparent;
  place-content: center`
const SignUpLinkText = styled(GenericText)``

export const SignUpLink = () => {

	return (
		<SignUpLinkLayout gridArea={ 'signup' }>
			<SignUpLinkText>
				Doesn't have an account?

				<a>Sign Up</a>

			</SignUpLinkText>
		</SignUpLinkLayout>
	)
}