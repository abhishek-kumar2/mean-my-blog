/**
 * file: config.js
 * description: main application configuration file
 * author: abhishek kumar
 * date: 24/09/2016
 */

'use strict'

module.exports = {
    'blogdb' : 'mongodb://my-blog-root:blog3412@ds033956.mlab.com:33956/my-blog',
    'port' : process.env.PORT || 3000
}