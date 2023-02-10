const { Emails } = require("../../database/models/emails");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");

module.exports = {
	createEmails: catchAsync(async (req, res) => {
		try {
			const { name, lastname, email, phone } = req.body;

			const newEmails = await Emails.create({
				name,
				lastname,
				email,
				phone,
			});

			endpointResponse({
				res,
				message: "Created Emails successfully",
				body: newEmails,
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
