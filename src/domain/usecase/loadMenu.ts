import type { MenuItem } from '../../data/models'

export interface LoadMenuUseCase {
  execute(): Promise<MenuItem[]>
}
