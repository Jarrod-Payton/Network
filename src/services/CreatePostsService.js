import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class CreatePostsService {
  async createPost(body) {
    logger.log(body)
  }
}

export const createPostsService = new CreatePostsService()
