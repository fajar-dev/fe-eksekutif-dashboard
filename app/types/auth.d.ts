export interface User {
    id: number
    name: string
    email: string
    role: string
    avatar: string
    lastLoginAt: string
    lastLoginIp: string
    isActive: boolean
}

export interface AuthData {
    user: User
    accessToken: string
    refreshToken: string
}

export interface ApiResponse<T = any> {
    success: boolean
    statusCode: number
    message: string
    data: T
}

export type AuthResponse = ApiResponse<AuthData>