
export const loginReducer = (state, action) => {
	const { type, payload } = action
	let newState = { ...state }

	switch (type) {

		case 'EMAIL':
			/*console.log('LOGINSTATE=>',state.email)*/
			return ({ ...newState, email: newState.email = payload })

		case 'PASSWORD':

			return ({ ...newState, passwd: newState.password = payload })

		case 'NAME':
			console.log('LOGINSTATE=>',state.name)
			return ({ ...newState, passwd: newState.name = payload })

		case 'FORGOT_PASS':
			newState.forgotPassword = !newState.forgotPassword
			return newState

		case 'SIGN_UP':
			newState.signUp = !newState.signUp
			return newState

		case 'SEND_EMAIL':

			return newState

		default:
			return newState

	}

}