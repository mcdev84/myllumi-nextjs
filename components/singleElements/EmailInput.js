import styled           from 'styled-components'
import { MdEmail }      from 'react-icons/md'
import {
	GenericInput,
	GenericSectionLayout,
}                       from '../../assets/styled-components/styled'
import { useContext }   from 'react'
import { LoginContext } from '../../pages/LoginPage'


const EmailLayout = styled(GenericSectionLayout)``

export const EmailIcon = styled(MdEmail)`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: icon;
  place-self: center start;
  padding-left: 1vw
`

export const EmailInput = () => {
	const [loginState, dispatch] = useContext(LoginContext)
	const handleEmail = (e) => dispatch(
		{ type: 'EMAIL', payload: e.target.value })

	return (
		<EmailLayout gridArea={'email'} gridTArea={`'icon input'`}>
			<EmailIcon/>
			<GenericInput type="email" gridArea={'input'} placeholder="Email address"
			  onChange={(e)=>handleEmail(e)}     />
		</EmailLayout>
	)
}