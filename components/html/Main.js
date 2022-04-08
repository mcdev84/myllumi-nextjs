import {
	GenericButtonLayout,
	GenericText,
	MainContentLayout,
	MainLayout,
}             from '../../assets/styled-components/styled'
import styled from 'styled-components'
import Link from 'next/link'

const InitialText = styled(GenericText)``
const ProfessionalButton = styled(GenericButtonLayout)`
  max-height: 45px;
  padding: 1vw`

export default function Main () {
	const gridTemplateContent = `". init ." "pro . cust"`

	return (
		<MainLayout>
			<MainContentLayout gap={ '3vw 0' } rows={ 'repeat(2,auto)' }
			                   gridTArea={ gridTemplateContent }>
				<InitialText gridArea={ 'init' }>Choose your role</InitialText>
				<ProfessionalButton gridArea={ 'pro' }><p>Professional</p></ProfessionalButton>
				<ProfessionalButton gridArea={ 'cust' }>
					<Link href={'/LoginPage'} passHref>
						<p>Customer</p>
					</Link>


				</ProfessionalButton>
		</MainContentLayout>
</MainLayout>
)
}