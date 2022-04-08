import { HeaderLayout, LogoLayout, Brand } from '../../assets/styled-components/styled'
import styled                                   from 'styled-components'

const LoginHeaderLayout= styled(HeaderLayout)`
  font-size: clamp(2.2rem, 6.75vw, 6.76vw);
`
const LogoLayoutLogin=styled(LogoLayout)`
	min-width: 200px;
	min-height: 200px;
`
export const LoginHeader = () => {
	return (
		<LoginHeaderLayout >
			<LogoLayoutLogin>
				<Brand>myllumi</Brand>
			</LogoLayoutLogin>
		</LoginHeaderLayout>
	)
}