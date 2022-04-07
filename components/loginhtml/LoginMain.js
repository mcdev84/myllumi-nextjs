import styled        from 'styled-components'
import { LoginPage } from '../../pages/LoginPage'

const MainLayout = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: main;
  grid-template-areas: ".login .";
  grid-template-columns: .5fr minmax(auto, 500px) .5fr;
  grid-template-rows: 1fr;
`

export const LoginMain = () => {

	return (
		<MainLayout>
			<LoginPage/>
		</MainLayout>
	)
}