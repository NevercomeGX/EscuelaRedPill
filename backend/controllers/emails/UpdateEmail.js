const { catchAsync } = require("../../helpers/catchAsync");
const { endpointResponse } = require("../../helpers/success");

module.exports = {
	updateEmails: catchAsync(async (req, res) => {
		try {
			const { user } = req;
			const { name, lastname, email, type_id } = req.body;

			await email.update({
				name,
				lastname,
				email,
				type_id,
			});

			endpointResponse({
				res,
				message: "Email Update",
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
