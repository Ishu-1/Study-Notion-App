const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.cloudinary_name,
			api_key: process.env.key,
			api_secret: process.env.secret,
		});
	} catch (error) {
		console.log(error);
	}
};