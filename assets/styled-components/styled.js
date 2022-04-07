import styled from 'styled-components'

export const AppLayout = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  display: grid;
  grid-template-areas: "header"
	                        "main"
	                        "footer";
  grid-template-columns: auto;
  grid-template-rows: minmax(50px, auto) minmax(1fr, auto) minmax(50px, auto);
  padding: 2rem;
  grid-gap: 3vw 0
`
export const HeaderLayout = styled.header`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: header;
  grid-template-areas:". logo .";
  grid-template-columns:.25fr .5fr .25fr;
  grid-template-rows: fit-content();
  background-color: transparent;
  place-content: start center;
`
export const MainLayout = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: main;
  grid-template-areas:". content .";
  grid-template-columns:.25fr .5fr .25fr;
  grid-template-rows:${ props => props.rows };
  background-color: transparent;
  grid-gap: ${ props => props.gap };
`
export const GenericSectionLayout = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: ${ props => props.gridArea };
  grid-template-areas:  ${ props => props.gridTArea };
  border-radius: 8px;
  place-content: center start;
  background-color: whitesmoke;
`
export const GenericInput = styled.input.attrs(
	(props) => ({ type: props.type, placeholder: props.placeholder }),
)`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: ${ props => props.gridArea };
  border: none;
  place-content: center start;
  background-color: whitesmoke;

  :focus {
    outline: transparent;
  }
`

export const GenericButtonLayout = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: ${ props => props.gridArea };
  border-radius: clamp(20px, 5vw, 50px);
  place-content: center;
  place-self: center stretch;
  background: #EDE753;
`

export const GenericText = styled.p`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: ${ props => props.gridArea };
  text-align: center;
  font-size: medium;
  font-weight: bold;
  color: whitesmoke;
`

export const MainContentLayout = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: content;
  grid-template-areas:${ props => props.gridTArea };
  grid-template-rows: ${ props => props.rows };
  background-color: transparent;
  place-content: start center;
  grid-gap: ${ props => props.gap };
`

export const FooterLayout = styled.footer`
  width: 100%;
  height: auto;
  display: grid;
  grid-area: footer;
  grid-template-areas:". backarrow .";
  grid-template-columns:.25fr .5fr .25fr;
  background-color: transparent;
  place-items: center;
  place-content: center;
`
export const LogoLayout = styled.section`
  width: fit-content;
  max-width: fit-content;
  min-width: 200px;
  height: auto;
  max-height: fit-content;
  min-height: 200px;
  display: grid;
  grid-area: logo;
  grid-template-columns: minmax(100px, 300px);
  grid-template-areas: "brand";
  place-items: center;
  place-self: center;
  place-content: center;
  background: radial-gradient(circle at center, yellow 0, transparent 50%);
`
export const Brand = styled.h4`
  display: grid;
  grid-area: ${ props => props.gridArea };;
  place-items: center;
  color: white;
  font-size: clamp(2.2rem, 6.75vw, 6.76vw);
  background: radial-gradient(circle at 95.75% 31%, yellow 0, transparent 5%);
`