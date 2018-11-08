const router = require("koa-router")();

router.prefix('/auth');

/**
 * @swagger
 * /users:
 *   post:
 *     responses:
 *       200:
 *         description: Signin
 *         schema:
 *           $ref: "#/definitions/User"
 *     tags: ["/users"]
 *     summary: Updates current user
 *     notes: Returns updated user or an error
 *     nickname: update_user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - description: provider data
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/User"
 *
 */

router.post('/signin', async (ctx) => {
    console.log(ctx.request.body);
    ctx.body = {data: ctx.request.body}
});

router.delete('/logout', async (ctx) => {
    ctx.body = {success: true}
});

router.post('/signup', async (ctx) => {
    ctx.body = {success: true}
});

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: uuid
 *         example: 100
 *       latitude:
 *         type: float
 *         format: float
 *         example: 51.34342
 *       longitude:
 *         type: float
 *         format: float
 *         example: 39.34312
 *       notification_token:
 *         type: string
 *         format: string
 *         example: 8250eaf6-1a58-489e-b136-7c74a864b434
 *       auth0_id:
 *         type: string
 *         format: string
 *         example: YXV0aDAlN0M1YjI4MDM0OTg3NjNlZjM1Njk3NmM5NjU
 *       platform:
 *         type: integer
 *         format: integer
 *         description: 0 for iOS, 1 for android
 *         example: 0
 */



export default router;
