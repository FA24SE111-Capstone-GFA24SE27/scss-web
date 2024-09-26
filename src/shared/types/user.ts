export type User = {
  accessToken: string;
  account: Account | null
}

export type Account = {
  id: number,
  email: string,
  role: string,
  status: string,
  profile: Profile
}

export type Profile = {
  id: number,
  fullName: string,
  phoneNumber: string,
  dateOfBirth: number,
  avatarLink: string
}