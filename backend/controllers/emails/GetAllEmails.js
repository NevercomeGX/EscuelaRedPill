const createHttpError = require("http-errors");

// import Email from database
const { Emails } = require("../../database/models/emails");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");
const { ErrorObject } = require("../../helpers/error");
const { Op } = require("sequelize");
const { paginate } = require("../../middlewares/paginateUsersMiddleware");

module.exports = {
	getAllEmails: catchAsync(async (req, res) => {
		try {
			//get the query params

			const { email = null, page = 1, limit = 10 } = req.query;

			if (email === page) {
				throw new ErrorObject("the params query not found", 404);
			}

			let search = {};

			if (email) {
				search = {
					where: { email: { [Op.like]: `%${email}%` } },
				};
			}
			// transform function that can be passed to the paginate method

			const transform = (records) => records;

			// paginate method that takes in the model, limit, search object, order and transform

			const listEmails = await paginate(Emails, page, limit, search, transform);

			endpointResponse({
				res,
				message: "Users  retrieved successfully",
				body: listEmails,
			});
		} catch (error) {
			if (err) {
				const jsonError = {
					statusCode: err.statusCode || 500,
					message: err.message,
				};
				res.status(jsonError.statusCode).json(jsonError);
			}
		}
	}),
};
