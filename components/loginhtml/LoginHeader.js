import styled                     from 'styled-components'
import { Brand, LogoLayoutLogin } from '../../assets/styled-components/styled'


const HeaderLayout = styled.header`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: header;
  grid-template-areas: ". logo .";
  grid-template-columns: .5fr minmax(auto, 500px) .5fr;
  grid-template-rows:minmax(.25fr, .5fr);
  place-items: center;
  place-self: center;
  place-content: center;
`
export const LoginHeader = () => {

	return (
		<HeaderLayout>
			<LogoLayoutLogin>
				<Brand wid={ '50vw' } maxW={ '500px' } gridArea={ 'brand' }>
				 myllumi
				 </Brand>
			</LogoLayoutLogin>
		</HeaderLayout>
	)
}