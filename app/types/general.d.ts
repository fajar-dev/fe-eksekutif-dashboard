export interface RevenueStats {
    trend: 'up' | 'down'
    revenueCurrent: number
    revenuePrevious: number
    revenueGrowth: number
    revenuePercentage: number
}

export interface IspStats {
    trend: 'up' | 'down'
    customers: number
    newCustomers: number
    newCustomersPrevious: number
    newCustomersGrowth: number
    churnedCustomers: number
    churnedCustomersPercentage: number
}

export interface ApiResponse<T = any> {
    success: boolean
    statusCode: number
    message: string
    data: T
}

export interface NusaWorkStats {
    trend: 'up' | 'down'
    users: number
    usersPrevious: number
    usersGrowth: number
    usersPercentage: number
    stableCompanies: number
    totalCompanies: number
}

export interface HomeConnectStats {
    trend: 'up' | 'down'
    active: number
    activePrevious: number
    activeGrowth: number
    paid: number
    paidPercentage: number
}

export interface RevenuePeriodDataItem {
    name: string
    revenue: number
}

export interface RevenuePeriodItem {
    period: string
    monthName: string
    data: RevenuePeriodDataItem[]
}

export interface RevenueMonthlyItem {
    name: string
    revenue: number
    percentage: number
}

export interface HealthStats {
    churnRate: number
    sla: number
    collectionRate: number
    tickets: number
    arpu: number
}

export interface NocStatus {
    openTickets: number
    statusMessage: string
}

export interface AlertItem {
    id: number
    type: 'danger' | 'warning' | 'info' | 'success'
    title: string
    content: string
    time: string
}

export type RevenueResponse = ApiResponse<RevenueStats>
export type IspResponse = ApiResponse<IspStats>
export type NusaWorkResponse = ApiResponse<NusaWorkStats>