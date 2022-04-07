import { createContext, useReducer } from 'react'
import { loginReducer }              from '../../store/loginReducer'

export const LoginContext = createContext()

export const loginContextWrapper = (Component) => {
	return props => {
		const [loginState, dispatch] = useReducer(loginReducer, {
			user          : null,
			email         : null,
			passwd        : null,
			forgotPassword: false,
			signUp        : false,
		})

		return (
			<LoginContext.Provider value={ [loginState, dispatch] }>
				<Component { ...props }/>
			</LoginContext.Provider>
		)
	}
}