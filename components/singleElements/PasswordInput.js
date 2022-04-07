import styled                   from 'styled-components'
import { MdLock } from 'react-icons/md'
import {
	GenericInput,
	GenericSectionLayout,
}                 from '../../assets/styled-components/styled'




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
	return (
		<PasswordLayout gridArea={ 'password' } gridTArea={ `'icon input'` }>
			<PasswordIcon/>
			<GenericInput type="password" placeholder="Password"/>
		</PasswordLayout>
	)
}