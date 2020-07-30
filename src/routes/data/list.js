/**
 * @swagger
 * path:
 *  /data:
 *    get:
 *      summary: Get data
 *      tags: [Data]
 *      responses:
 *        "200":
 *          description: A list of data objects
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Data'
 */

module.exports = (req, res, next) => {
  res.locals = []
  next(null, req, res)
}
