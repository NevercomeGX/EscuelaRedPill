const createHttpError = require("http-errors");
const { catchAsync } = require("../../helpers/catchAsync");
const { endpointResponse } = require("../../helpers/success");
const { Emails } = require("../../database/models/emails");
const { ErrorObject } = require("../../helpers/error");

module.exports = {
	deleteEmails: catchAsync(async (req, res) => {
		try {
			const { id } = req.params;

			const email = await Emails.destroy({ where: { id } });

			if (!email) {
				throw new ErrorObject("ID not found", 404);
			}

			endpointResponse({
				res,
				message: "email deleted",
				body: email,
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
