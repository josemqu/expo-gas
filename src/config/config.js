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
		SERVICE: process.env.NM_SERVICE,
		PORT: process.env.NM_PORT,
		USER: process.env.NM_USER,
		PASSWORD: process.env.NM_PASSWORD,
		EMAIL_TO: process.env.EMAIL_TO,
	},
	JWT: {
		cookieName: process.env.JWT_COOKIE_NAME,
		secret: process.env.JWT_SECRET,
	},
	GAS_TENDER_ENDPOINT:
		"https://ws2.energia.gob.ar/rest/exportaciongasnatual/rest/server.php?method=getLicitaciones&tipo=&estado=&rubro=&search=&nrolicitacion=&anio=#",
};

export default config;
