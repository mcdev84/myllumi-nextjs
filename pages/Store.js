import styled                    from 'styled-components'
import { AppLayout, MainLayout } from '../assets/styled-components/styled'
import Footer                    from '../components/html/Footer'
import { StoreHeader }           from '../components/html/StoreHeader'

const StoreLayout = styled(AppLayout)``
const StoreMainLayout = styled(MainLayout)`
	grid-template-areas:"aside content";
	grid-template-columns: .3fr 1fr;
`
const ProductsGrid = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: content;
  grid-template-areas:" product product product";
  grid-template-columns: repeat(3, auto-fill, 1fr)
`
const ProductLayout = styled.article`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: product;
`

export default function Store () {

	return (

		<StoreLayout>
			<StoreHeader/>
			<StoreMainLayout>
				<ProductsGrid>
					<ProductLayout>
					{/*	map()productsDb*/}
					</ProductLayout>
				</ProductsGrid>
			</StoreMainLayout>
			<Footer/>
		</StoreLayout>
	)
}