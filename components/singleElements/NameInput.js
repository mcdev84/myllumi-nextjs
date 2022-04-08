import styled      from 'styled-components'
import {
	GenericInput,
	GenericSectionLayout,
}                  from '../../assets/styled-components/styled'
import { MdAccountCircle } from 'react-icons/md'

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

	return (
		<NameLayout gridArea={'name'} gridTArea={`'icon input'`}>
			<NameIcon/>
			<GenericInput type="text" gridArea={ 'input' } placeholder="Name"
			              onChange={ (e) => handleEmail(e) }/>
		</NameLayout>
	)
}