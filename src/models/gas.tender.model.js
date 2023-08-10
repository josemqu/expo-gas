import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const gasTenderCollection = "gasTender";

/**
 * example of tender
 * {
      "id": "313",
      "id_tipo": "1",
      "id_rubro": "0",
      "id_estado": "1",
      "id_etapa": "0",
      "nro_expediente": "EX-2023-63127002-  -APN-DTYR#MEC",
      "nro_licitacion": null,
      "objeto": "Vendedor: Shell Argentina S.A.\r\n\t\r\nComprador: Shell Chile S.A.\r\n",
      "sintesis": "Sierras Blancas, Bajada de Añelo, Bandurria Sur, CASO, La Escalonada, Rincón La Ceniza y Cruz de Lorena, de la Cuenca Neuquina, en la República Argentina.",
      "obtencion": "República de Chile.\r\n",
      "recepcion": "Firme.",
      "apertura": "Ver documento adjunto.",
      "contactos": "Nombre y apellido: Sergio Alvarez Castelao\r\nDomicilio: Av Roque Saenz Peña 788\r\nTeléfono: +541139858367\r\nMail: s.alvarezcastelao@shell.com\r\n",
      "valor": null,
      "fecha_apertura": "08/08/2023",
      "fecha_cierre": "14/08/2023 00:00",
      "anio": null,
      "nombre_tipo": "Sol. permiso exportación",
      "nombre_rubro": null,
      "nombre_estado": "Abierto a Terceros Interesados",
      "nombre_etapa": null,
      "tipo_descripcion": "Solicitud de permiso de exportación",
      "timestamp_alta": "2023-08-08 09:43:18",
      "order_master": "1"
    },
 *  
 */

const gasTenderSchema = new mongoose.Schema({
	id: { type: String, required: true },
	id_tipo: { type: String, required: true },
	id_rubro: { type: String, required: true },
	id_estado: { type: String, required: true },
	id_etapa: { type: String, required: true },
	nro_expediente: { type: String, required: false },
	nro_licitacion: { type: String, required: false },
	objeto: { type: String, required: true },
	sintesis: { type: String, required: true },
	obtencion: { type: String, required: true },
	recepcion: { type: String, required: true },
	apertura: { type: String, required: true },
	contactos: { type: String, required: true },
	valor: { type: String, required: false },
	fecha_apertura: { type: String, required: true },
	fecha_cierre: { type: String, required: true },
	anio: { type: String, required: false },
	nombre_tipo: { type: String, required: true },
	nombre_rubro: { type: String, required: false },
	nombre_estado: { type: String, required: true },
	nombre_etapa: { type: String, required: false },
	tipo_descripcion: { type: String, required: true },
	timestamp_alta: { type: String, required: true },
	order_master: { type: String, required: true },
});

gasTenderSchema.plugin(mongoosePaginate);

export const gasTenderModel = mongoose.model(
	gasTenderCollection,
	gasTenderSchema
);
