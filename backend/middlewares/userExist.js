const { Emails } = require("../database/models/emails");
const { catchAsync } = require("../helpers/catchAsync");
const { ErrorObject } = require("../helpers/error");

module.exports = {
	userExist: catchAsync(async (req, _res, next) => {
		try {
			const { id } = req.params;

			const email = await Emails.findOne({ where: { id } });

			if (!email) {
				throw new ErrorObject("ID not found", 404);
			}

			req.email = email;
			next();
		} catch (error) {}
	}),
};
