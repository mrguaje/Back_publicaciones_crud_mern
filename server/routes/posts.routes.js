import {Router} from 'express'
import {
  getPosts, 
  createPost, 
  updatePost, 
  deletePost, 
  getPost,
} from '../controllers/posts.controllers.js'

const router = Router()
//lista de publicaciones
router.get('/posts', getPosts)

//crear publicaciones
router.post('/posts', createPost)

// actualizar publicaicon
router.put('/posts/:id', updatePost)

// delete
router.delete('/posts/:id', deletePost)

router.get('/posts/:id', getPost)

export default router

