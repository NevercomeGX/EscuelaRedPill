"use strict";
module.exports = (sequelize, DataTypes) => {
	Emails.init(
		{
			name: DataTypes.STRING,
			lastname: DataTypes.STRING,
			email: DataTypes.STRING,
			phone: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Emails",
		}
	);
	return Emails;
};
