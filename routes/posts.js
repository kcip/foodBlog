const { Router } = require('express')
const controllers = require('../controllers/posts')

const router = Router()
router.get('/', (req, res) => res.send('hello'))

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost)
router.post('/posts', controllers.createPost)
router.put('/posts/:id', controllers.updatePost)
router.delete('/posts/:id', controllers.deletePost)

module.exports = router