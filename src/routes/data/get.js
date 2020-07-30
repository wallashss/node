/**
 * @swagger
 * path:
 *  /data/{id}:
 *    get:
 *      summary: Get data by id
 *      tags: [Data]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Data id
 *      responses:
 *        "200":
 *          description: A data object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Data'
 */

module.exports = (req, res, next) => {
  next(null, req, res)
}
