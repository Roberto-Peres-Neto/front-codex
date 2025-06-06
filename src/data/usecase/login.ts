import type { Credentials, LoginUseCase } from '../../domain/usecase'
import type { LoginResponse } from '../models'

export class RemoteLoginUseCase implements LoginUseCase {
  constructor(private readonly url: string) {}

  async execute(credentials: Credentials): Promise<LoginResponse> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new Error('Login failed')
    }

    return response.json() as Promise<LoginResponse>
  }
}
