import dotenv from "dotenv";
dotenv.config();

const config = {
	CLIENT_URL: process.env.CLIENT_URL,
	PORT: process.env.PORT,
	DB_NAME: process.env.DB_NAME,
	DB_USER: process.env.DB_USER,
	DB_PASS: process.env.DB_PASS,
	DB_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@codercluster.tgft5r9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
	NODEMAILER: {
		service: process.env.NM_SERVICE,
		port: process.env.NM_PORT,
		user: process.env.NM_USER,
		password: process.env.NM_PASSWORD,
	},
	JWT: {
		cookieName: process.env.JWT_COOKIE_NAME,
		secret: process.env.JWT_SECRET,
	},
	GAS_TENDER_ENDPOINT:
		"https://ws2.energia.gob.ar/rest/exportaciongasnatual/rest/server.php?method=getLicitaciones&tipo=&estado=&rubro=&search=&nrolicitacion=&anio=#",
};

export default config;
