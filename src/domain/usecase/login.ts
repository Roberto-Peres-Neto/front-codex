import type { LoginResponse } from '../../data/models'

export interface Credentials {
  email: string
  password: string
}

export interface LoginUseCase {
  execute(credentials: Credentials): Promise<LoginResponse>
}
