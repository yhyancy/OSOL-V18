//node 写法
// var template = require('art-template')
// var path = require('path')
// var views = path.join(__dirname,'views','mainContent.html')

var data = { msg: ' this is test' }
var html = template('mainContent', data)
document.getElementById('content').innerHTML = html




