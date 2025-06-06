import { makeLogin } from '../../usecase/makeLogin'
import { Login } from '../../../../presentation/modules/login'

export const makeLoginModule = () => <Login loginUseCase={makeLogin()} />
