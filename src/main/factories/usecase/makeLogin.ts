import { RemoteLoginUseCase } from '../../data/usecase/login'

export const makeLogin = () => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/login`
  return new RemoteLoginUseCase(url)
}
