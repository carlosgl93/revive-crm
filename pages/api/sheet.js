import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "GET") {
    //   Auth
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    //   Query

    const range = `Domiciliario!A1:Z999`;

    console.log(
      "google sheets doc id:",
      process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID
    );

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID,
      range,
    });

    //   Result

    const data = response.data.values;

    res.status(200).json(data);

    // return {
    //   data,
    // };
  }
}
