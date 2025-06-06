import { RemoteLoadMenuUseCase } from '../../data/usecase/loadMenu'

export const makeLoadMenu = () => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/menu`
  return new RemoteLoadMenuUseCase(url)
}
