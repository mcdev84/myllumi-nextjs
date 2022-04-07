import styled from 'styled-components'

const PasswordResetLayout = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: login;
  grid-row-gap: 5%;
  grid-template-areas: ". checkemail ."
												". sent ."
  											". notreceived ."
  											" . recover .";
  grid-template-columns: .5fr minmax(1fr, 500px) .5fr;
  grid-template-rows: repeat(5, auto-fit, minmax(40px, 3vw));
  grid-auto-flow: column;
  place-items: center;
  gap: 0
`
const CheckText = styled.h3`
  width: 50%;
  height: auto;
  display: grid;
  grid-area: ${ props => props.gridArea };
  color: whitesmoke;
  text-align: center;
  > a {
    color: whitesmoke;
  }
`

export const SuccefullyPasswordReset = () => {

	return (
		<PasswordResetLayout>
			<CheckText gridArea={ 'checkemail' }>Check your email
			<p><small style={{color:'lightgray'}}>We have sent a password reser
			                               instructionsto your email
			</small></p></CheckText>
			<CheckText gridArea={ 'notreceived' }>
				<p><small style={{color:'lightgray'}}>Did not received the email? Check your spam folder,
				or try resending the reset link.</small></p>
			</CheckText>

			<CheckText gridArea={ 'recover' }>
				<a href={ '#' }> Resend reset link</a>
			</CheckText>

		</PasswordResetLayout>
	)

}