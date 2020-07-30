/**
 * @swagger
 * path:
 *  /data/{id}:
 *    delete:
 *      summary: Delete data by id
 *      tags: [Data]
 *      responses:
 *        "200":
 *          description: A list of data objects
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Data'
 */

module.exports = (req, res, next) => {
  next(null, req, res)
}
