import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService {
  async getProfile(id) {
    const res = await api.get('/api/profiles/' + id)
    AppState.profile = res.data
  }
  async editProfile() {
    logger.log('hello')
  }
  async getPosts(id) {
    const res = await api.get('/api/profiles/' + id + '/posts/')
    logger.log(res.data)
    AppState.posts = res.data
  }
}

export const profileService = new ProfileService()