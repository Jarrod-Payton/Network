import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class CreatePostsService {
  async CreatePost(body) {
    logger.log('Hello')
  }
}

export const createPostsService = new CreatePostsService()
