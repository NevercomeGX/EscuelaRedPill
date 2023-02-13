import { Email } from "../models/email.js";
import dotenv from "dotenv";
import { transporter } from "../../config/mailer.js";
import nodemailer from "nodemailer";
dotenv.config();

export async function getProjects(req, res) {
	try {
		const projects = await Email.findAll({
			atributes: ["id", "name", "priority", "description", "deliverydate"],
		});
		res.json(projects);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
}

// function enviarCorreoConfirmacion(email) {
//   // Configuración del servicio de correo electrónico
//   const transporter = {
//     from: process.env.EMAIL, // sender address
//     to: email, // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   };

//   transporter.sendMail(transporter, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Correo electrónico enviado: " + info.response);
//     }
//   });
// }

async function main(email) {
	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: process.env.EMAIL, // sender address
		to: email, // list of receivers
		subject: "Gmail", // Subject line
		text: "Tu cuenta de gmail a sido eliminada", // plain text body
		html: "<b>Tu cuenta de gmail a sido eliminada</b>", // html body
	});

	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

export async function createProject(req, res) {
	const { name, lastName, email, country } = req.body;
	try {
		let newProject = await Email.create(
			{
				name,
				lastName,
				email,
				country,
			},
			{
				fields: ["name", "lastName", "email", "country"],
			}
		);
		// Ejemplo de llamada a la función enviarCorreoConfirmacion
		main(email);

		console.log("Email sent to:", email);
		return res.json(newProject);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
}

// export async function getProject(req, res) {
// 	const { id } = req.params;
// 	try {
// 		const project = await Email.findOne({
// 			where: {
// 				id,
// 			},
// 		});
// 		res.json(project);
// 	} catch (error) {
// 		res.status(500).json({
// 			message: error.message,
// 		});
// 	}
// }

// export const updateProject = async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const { name, priority, description } = req.body;

// 		const project = await Email.findByPk(id);
// 		project.name = name;
// 		project.priority = priority;
// 		project.description = description;
// 		await project.save();

// 		res.json(project);
// 	} catch (error) {
// 		return res.status(500).json({ message: error.message });
// 	}
// };
