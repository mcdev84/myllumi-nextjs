import styled from 'styled-components'
import {
	GenericButtonLayout,
	GenericText,
}             from '../../assets/styled-components/styled'
import { signIn, } from "next-auth/react"

const SignInLayout = styled(GenericButtonLayout)`max-height: 45px;`
const SignInText = styled(GenericText)``



export const SignInButton = () => {

	return (
		<SignInLayout gridArea={ 'submit' }>
			<SignInText onClick={() => signIn()}>SIGN IN</SignInText>
		</SignInLayout>
	)
}