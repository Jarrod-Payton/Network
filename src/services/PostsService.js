import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class PostsService {
  async getAll(query = '') {
    const res = await api.get('/api/posts' + query)
    console.log(res.data)
    AppState.posts = res.data
    logger.log(AppState.account)
  }
  async likePost(post) {
    await api.post('/api/posts/' + post.id + '/like')
    this.getAll
  }
  async createPost(body) {
    const res = await api.post('/api/posts', body)
    // AppState.posts.unshift(res.data)
  }
  async deletePost(postId) {
    await api.delete('api/posts/' + postId)
    this.getAll
  }
}

export const postsService = new PostsService()