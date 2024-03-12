export interface User {
    fullName?: String,
    age?: Number,
    email: String,
    posts?: Posts[],
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date
    password?: String

}

export interface Posts {
    title: string
    content: string
    likes: string | number | null | undefined,
    createdAt: Date,
    updatedAt?: Date,
    deletedAt?: Date
    userId: User
}


export interface JwtToken  {
    token : string
    user: User
}