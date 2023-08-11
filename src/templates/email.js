export const emailTemplates = {
	newGasTendersMail: (email, newGasTenders) => `
    <!DOCTYPE html>
      <html>
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <title>Gas Tenders</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; background-color: #f6f6f6; height: 100%; hyphens: auto; line-height: 1.4; margin: 0; -moz-hyphens: auto; -ms-word-break: break-all; width: 100% !important; -webkit-hyphens: auto; -webkit-text-size-adjust: none; word-break: break-word;">
            <table style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                <tr>
                    <td align="center" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;">
                        <table style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                            <tr>
                                <td style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box;">
                                    <h1>Nuevas licitaciones de gas!</h1>
                                    <p>Estimado, este correo es para notificar que fueron publicadas nuevas licitaciones de exportación de Gas Natural.</p>
                                    <p>Las licitaciones se detallan a continuación:</p>
                                    <table style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                        <thead>
                                            <tr>
                                                <th style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">N° Id</th>
                                                <th style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">N° Expediente</th>
                                                <th style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">Objeto</th>
                                                <th style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">Síntesis</th>
                                                <th style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">Obtención</th>
                                                <th style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">Fecha Apertura</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${newGasTenders
																							.map(
																								(gasTender) => `
                                            <tr>
                                                <td style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">${gasTender.id}</td>
                                                <td style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">${gasTender.nro_expediente}</td>
                                                <td style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">${gasTender.objeto}</td>
                                                <td style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">${gasTender.sintesis}</td>
                                                <td style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">${gasTender.obtencion}</td>
                                                <td style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; border: 1px solid #ddd; padding: 8px;">${gasTender.fecha_apertura}</td>
                                            </tr>
                                            `
																							)
																							.join("")}
                                        </tbody>
                                    </table>
                                    <p>Para más información, ingrese a <a href="https://exportaciongasnatural.energia.gob.ar/exportacion-gas-natural">https://exportaciongasnatural.energia.gob.ar/exportacion-gas-natural</a></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>`,
};
