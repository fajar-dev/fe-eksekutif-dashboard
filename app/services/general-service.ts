import { apiService } from "./api-service"
import { handleServiceError } from "../composables/error-helper"
import type { ApiResponse, RevenueStats, IspStats, NusaWorkStats, HomeConnectStats, RevenuePeriodItem, RevenueMonthlyItem, HealthStats, AlertItem, NocStatus } from "../types/general"

export class GeneralService {

    async getNocStatus(): Promise<ApiResponse<NocStatus>> {
        try {
            const response = await apiService.client.get<ApiResponse<NocStatus>>('/general/noc', {
                headers: { Authorization: `Bearer ${useAuth().state.token}` }
            })
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getHealthStats(): Promise<ApiResponse<HealthStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<HealthStats>>('/general/health', {
                headers: { Authorization: `Bearer ${useAuth().state.token}` }
            })
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getIspStats(): Promise<ApiResponse<IspStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<IspStats>>('/general/isp', {
                headers: { Authorization: `Bearer ${useAuth().state.token}` }
            })
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getNusaWorkStats(): Promise<ApiResponse<NusaWorkStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<NusaWorkStats>>('/general/nusawork', {
                headers: { Authorization: `Bearer ${useAuth().state.token}` }
            })
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getRevenuePeriod(): Promise<ApiResponse<RevenuePeriodItem[]>> {
        try {
            const response = await apiService.client.get<ApiResponse<RevenuePeriodItem[]>>('/general/revenue/period', {
                headers: { Authorization: `Bearer ${useAuth().state.token}` }
            })
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getHomeConnectStats(): Promise<ApiResponse<HomeConnectStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<HomeConnectStats>>('/general/homeconnect', {
                headers: { Authorization: `Bearer ${useAuth().state.token}` }
            })
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getRevenueMonthly(): Promise<ApiResponse<RevenueMonthlyItem[]>> {
        try {
            const response = await apiService.client.get<ApiResponse<RevenueMonthlyItem[]>>('/general/revenue/monthly', {
                headers: { Authorization: `Bearer ${useAuth().state.token}` }
            })
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getRevenueStats(): Promise<ApiResponse<RevenueStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<RevenueStats>>('/general/revenue', {
                headers: {
                    Authorization: `Bearer ${useAuth().state.token}`
                }
            })
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getAlerts(): Promise<ApiResponse<AlertItem[]>> {
        try {
            const response = await apiService.client.get<ApiResponse<AlertItem[]>>('/general/alerts', {
                headers: { Authorization: `Bearer ${useAuth().state.token}` }
            })
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }
}

export const generalService = new GeneralService()
