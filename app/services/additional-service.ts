import { apiService } from "./api-service"
import { handleServiceError } from "../composables/error-helper"
import type { ApiResponse } from "../types/general"
import type { PeriodBreakdown } from "../types/additional"

export class AdditionalService {
    private get authHeaders() {
        return { headers: { Authorization: `Bearer ${useAuth().state.token}` } }
    }

    async getPeriod(): Promise<ApiResponse<PeriodBreakdown>> {
        try {
            const response = await apiService.client.get<ApiResponse<PeriodBreakdown>>('/additional/period', this.authHeaders)
            return response.data
        } catch (error: any) {
            return handleServiceError(error)
        }
    }
}

export const additionalService = new AdditionalService()
