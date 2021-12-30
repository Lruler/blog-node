const handleBlogRouter = (req, res) => {

    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    // 获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        return {
            msg: '博客列表'
        }
    }

    // 博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        return {
            msg: '博客详情'
        }
    }

    // 新建
    if (method === 'POST' && path === '/api/blog/new') {
        return {
            msg: '新建博客'
        }
    }

    // 更新
    if (method === 'POST' && path === '/api/blog/update') {
        return {
            msg: '更新博客'
        }
    }
    // 删除
    if (method === 'POST' && path === '/api/blog/del') {
        return {
            msg: '删除博客'
        }
    }
}

module.exports = handleBlogRouter