const Group = require('./group')
const errorHandle = require('../common/errorHandler')

Group.methods(['get', 'post', 'put', 'delete'])
Group.updateOptions({ new: true, runValidators: true })
Group.after('post', errorHandle).after('put', errorHandle)

Group.route('count', (req, res, next) => {
    Group.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = Group

