import { apiService } from "./api-service"
import { handleServiceError } from "../composables/error-helper"
import type { ApiResponse, RevenueStats, IspStats, NusaWorkStats, HomeConnectStats, RevenuePeriodItem, RevenueMonthlyItem, HealthStats, AlertItem, NocStatus } from "../types/general"

export class GeneralService {

    private get authHeaders() {
        return { headers: { Authorization: `Bearer ${useAuth().state.token}` } }
    }

    async getRevenueStats(): Promise<ApiResponse<RevenueStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<RevenueStats>>('direksi/general/revenue', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getIspStats(): Promise<ApiResponse<IspStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<IspStats>>('direksi/general/isp', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getNusaWorkStats(): Promise<ApiResponse<NusaWorkStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<NusaWorkStats>>('direksi/general/nusawork', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getHomeConnectStats(): Promise<ApiResponse<HomeConnectStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<HomeConnectStats>>('direksi/general/homeconnect', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getRevenuePeriod(): Promise<ApiResponse<RevenuePeriodItem[]>> {
        try {
            const response = await apiService.client.get<ApiResponse<RevenuePeriodItem[]>>('direksi/general/revenue/period', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getRevenueMonthly(): Promise<ApiResponse<RevenueMonthlyItem[]>> {
        try {
            const response = await apiService.client.get<ApiResponse<RevenueMonthlyItem[]>>('direksi/general/revenue/monthly', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getHealthStats(): Promise<ApiResponse<HealthStats>> {
        try {
            const response = await apiService.client.get<ApiResponse<HealthStats>>('direksi/general/health', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getNocStatus(): Promise<ApiResponse<NocStatus>> {
        try {
            const response = await apiService.client.get<ApiResponse<NocStatus>>('direksi/general/noc', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }

    async getAlerts(): Promise<ApiResponse<AlertItem[]>> {
        try {
            const response = await apiService.client.get<ApiResponse<AlertItem[]>>('direksi/general/alerts', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }
}

export const generalService = new GeneralService()
