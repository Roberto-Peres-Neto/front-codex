import type { LoadMenuUseCase } from '../../domain/usecase'
import type { MenuItem } from '../models'

export class RemoteLoadMenuUseCase implements LoadMenuUseCase {
  constructor(private readonly url: string) {}

  async execute(): Promise<MenuItem[]> {
    const response = await fetch(this.url)
    if (!response.ok) {
      throw new Error('Failed to load menu')
    }
    return response.json() as Promise<MenuItem[]>
  }
}
