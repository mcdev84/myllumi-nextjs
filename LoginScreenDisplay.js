import styled                  from 'styled-components'
import { LoginHeader }         from './components/loginhtml/LoginHeader'
import { LoginMain }           from './components/loginhtml/LoginMain'
import { loginContextWrapper } from './components/hocs/loginContextWrapper'

const ScreenLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "header"
												"main";
  grid-template-rows: auto;
`
export const LoginScreenDisplay = () => {
	const LoginMainWContext = loginContextWrapper(LoginMain)
	return (
		<ScreenLayout>
			<LoginHeader/>
			<LoginMainWContext/>
		</ScreenLayout>
	)
}