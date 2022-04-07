

export const loginReducer = (state, action) => {
	const { type, payload } = action
	let newState = { ...state }

	switch (type) {

		case 'EMAIL':
			return ({ ...newState, email: newState.email = payload })

		case 'PASSWD':
			return ({ ...newState, passwd: newState.passwd = payload })

		case 'SIGN_IN':

		case 'FORGOT_PASS':
			newState.forgotPassword = !newState.forgotPassword
			return newState

		case 'SIGN_UP':
			newState.signUp = !newState.signUp
			return newState

		default:
			return newState

	}

}