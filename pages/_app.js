import '../styles/globals.css'
import { SessionProvider }           from 'next-auth/react'
import { createContext, useReducer } from 'react'
import { loginReducer }              from '../store/loginReducer'

export const LoginContext = createContext()

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
	const [loginState, dispatch] = useReducer(loginReducer, {
		user          : null,
		email         : null,
		password      : null,
		forgotPassword: false,
		signUp        : false,
	})
	return (
		<LoginContext.Provider value={ [loginState, dispatch] }>
			<SessionProvider session={ session }>
				<Component { ...pageProps } />
			</SessionProvider>
		</LoginContext.Provider>
	)
}

export default MyApp