import styled              from 'styled-components'
import {
	GenericInput,
	GenericSectionLayout,
}                          from '../../assets/styled-components/styled'
import { MdAccountCircle } from 'react-icons/md'
import { useContext }      from 'react'
import { LoginContext }    from '../../pages/_app'

const NameLayout = styled(GenericSectionLayout)``
const NameIcon = styled(MdAccountCircle)`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: icon;
  place-self: center start;
  padding-left: 1vw
`
export const NameInput = () => {
	const [loginState, dispatch] = useContext(LoginContext)
	const handleName = (e) => dispatch(
		{ type: 'NAME', payload: e.target.value })
	return (
		<NameLayout gridArea={'name'} gridTArea={`'icon input'`}>
			<NameIcon/>
			<GenericInput type="text" gridArea={ 'input' } placeholder="Name"
			              onChange={ (e) => handleName(e) }/>
		</NameLayout>
	)
}