export interface IUserState {
  id: number
  uuid: string
  username: string
  email: string
  password: string
  role: string
  accessToken?: string
  id_history?: string
  isLoading: boolean
}
