const router = require('express').Router();
const http = require('./http');
http.getAll
http.getById
http.create
http.deletetodoByid
http.update
/*manejo de rutas forma breve */
router.route('/todo')
.get(http.getAll)
.post(http.create)

router.route('/todo/:id')
.get(http.getById)
.put(http.update)
.delete(http.deletetodoByid)

module.exports = {
router
}