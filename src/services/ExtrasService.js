import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ExtrasService {
  async getExtras() {
    const res = await api.get("/api/ads")
    AppState.extras = res.data
  }

}

export const extrasService = new ExtrasService()