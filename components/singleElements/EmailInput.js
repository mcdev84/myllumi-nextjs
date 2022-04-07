import styled                   from 'styled-components'
import { MdEmail }              from 'react-icons/md'
import { GenericSectionLayout } from '../../assets/styled-components/styled'


const EmailLayout = styled(GenericSectionLayout)``

const EmailIcon = styled(MdEmail)`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: icon;
  place-self: center start;
  padding-left: 1vw
`

export const EmailInput = () => {
	/*const [loginState, dispatch] = useContext(LoginContext)*/
	const handleEmail = (e) => dispatch(
		{ type: 'EMAIL', payload: e.target.value })
	return (
		<EmailLayout gridArea={'email'} gridTArea={`'icon input'`}>
			<EmailIcon/>
			<input type="email" placeholder="Email address"
			       onChange={ (e) => handleEmail(e) }/>
		</EmailLayout>
	)
}