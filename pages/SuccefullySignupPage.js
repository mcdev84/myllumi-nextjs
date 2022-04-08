import styled         from 'styled-components'
import {
	AppLayout,
	GenericButtonLayout,
	GenericFormLayout, GenericText, MainLayout,
}                      from '../assets/styled-components/styled'
import { LoginHeader } from '../components/html/LoginHeader'

import Footer         from '../components/html/Footer'
import Link from 'next/link'

const SuccefullySignupLayout = styled(GenericFormLayout)`
  grid-template-areas:    ". text ."
												". text1 ."
  											". . ."
												". submit ."
  											". . ."
												". . ."
												". . ."`
const ContinueButton = styled(GenericButtonLayout)`max-height: 45px;`

export default function  SuccefullySignupPage ()  {

	return (
		<AppLayout>
			<LoginHeader/>
			<MainLayout>
				<SuccefullySignupLayout>
					<GenericText gridArea={ 'text' }>
						Thank you for signinup!
					</GenericText>
					<GenericText gridArea={ 'text1' }>
						<small>You will receive confirmation email shortly</small>
					</GenericText>
					<ContinueButton gridArea={ 'submit' }>
						<Link href={'/LoginPage'} passHref>
						<GenericText>CONTINUE</GenericText>
						</Link>
					</ContinueButton>
				</SuccefullySignupLayout>
			</MainLayout>
			<Footer/>
		</AppLayout>
	)
}
