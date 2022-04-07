import styled                   from 'styled-components'
import {
	MdOutlineArrowBackIos,
	MdOutlineArrowForwardIos,
}                               from 'react-icons/md'
import { GenericSectionLayout } from '../../assets/styled-components/styled'

const BackArrowLayout = styled(GenericSectionLayout)`
background-color:transparent`

const BackText = styled.h4`
  display: grid;
  grid-area: text;
  color: whitesmoke;
	place-self: center start;
`
const ArrowIcon = styled(MdOutlineArrowBackIos)`
  display: grid;
  grid-area: arrow;
  color: whitesmoke;
  place-self: center start;
`
export const BackArrow = () => {

	return (
		<BackArrowLayout gridArea={'backarrow'} gridTArea={`'arrow text'`}>
			<ArrowIcon/>
			<BackText>BACK</BackText>
		</BackArrowLayout>
	)
}