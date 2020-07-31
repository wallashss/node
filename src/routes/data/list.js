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

// const MissingParameterError = require('src/errors/missing-parameter')
module.exports = (req, res, next) => {
  res.locals = []
  // next(new MissingParameterError('someparam'), req, res)
  // next(new Error(), req, res)
  next(null, req, res)
}
