import {
	Brand,
	HeaderLayout,
	LogoLayout,
}             from '../../assets/styled-components/styled'
import styled from 'styled-components'

const StoreHeaderLayout = styled(HeaderLayout)`
	grid-template-areas:"logo . .";
`
const LogoLayoutStore = styled(LogoLayout)`
  max-width: 200px;
  max-height: 200px;
  min-width: 100px;
  min-height: 100px;
`
export const StoreHeader = () => {

	return (
		<StoreHeaderLayout>
			<LogoLayoutStore>
				<Brand>myllumi</Brand>
			</LogoLayoutStore>
		</StoreHeaderLayout>
	)
}