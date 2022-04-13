import styled           from 'styled-components'
import { MdLock }       from 'react-icons/md'
import {
	GenericInput,
	GenericSectionLayout,
}                       from '../../assets/styled-components/styled'
import { useContext }   from 'react'
import { LoginContext } from '../../pages/_app'




const PasswordLayout = styled(GenericSectionLayout)``
const PasswordIcon = styled(MdLock)`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: icon;
  place-self: center start;
  padding-left: 1vw
`

export const PasswordInput = () => {
	const [loginState, dispatch] = useContext(LoginContext)
	const handlePassword = (e) => dispatch(
		{ type: 'PASSWORD', payload: e.target.value })
	return (
		<PasswordLayout gridArea={ 'password' } gridTArea={ `'icon input'` }>
			<PasswordIcon/>
			<GenericInput type="password" placeholder="Password"
			onChange={(e)=>handlePassword(e)}/>
		</PasswordLayout>
	)
}