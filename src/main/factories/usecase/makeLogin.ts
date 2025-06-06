import { RemoteLoginUseCase } from '../../data/usecase/login'

export const makeLogin = () => {
  const url = '/api/login'
  return new RemoteLoginUseCase(url)
}
