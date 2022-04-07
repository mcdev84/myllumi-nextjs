import styled from 'styled-components'
import {
	GenericButtonLayout,
	GenericText,
}             from '../../assets/styled-components/styled'

const SignInLayout = styled(GenericButtonLayout)`max-height:45px;`
const SignInText = styled(GenericText)``

export const SignInButton = () => {
/*	const [loginState, dispatch]= useContext(LoginContext)*/
	const handleSignIn=()=>dispatch({type:'SIGN_IN'})
	return (
		<SignInLayout gridArea={'submit'} onClick={()=> handleSignIn()}>
			<SignInText>SING IN</SignInText>
		</SignInLayout>
	)
}