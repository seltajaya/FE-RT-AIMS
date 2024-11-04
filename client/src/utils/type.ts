export interface IUserState {
  id: number
  uuid: string
  username: string
  email: string
  password: string
  role: string
  refresh_token?: string
  id_history?: string
  isLoading: boolean
}
