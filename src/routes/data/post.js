/**
 * @swagger
 * path:
 *  /data:
 *    post:
 *      summary: Create data
 *      tags: [Data]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Data'
 *      responses:
 *        "200":
 *          description: Created data object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Data'
 */

module.exports = (req, res, next) => {
  res.locals = req.body
  next(null, req, res)
}
