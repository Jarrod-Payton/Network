import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class PostsService {
  async getAll(query = '') {
    const res = await api.get('/api/posts' + query)
    console.log(res.data)
    AppState.posts = res.data
  }
}

export const postsService = new PostsService()