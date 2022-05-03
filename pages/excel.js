// import { google } from "googleapis";

// export async function getServerSideProps({ query }) {
//   //   Auth
//   const auth = await google.auth.getClient({
//     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });

//   //   Query

//   const { id } = query;
//   // const range = `Domiciliario!A1:O999`;

//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID,
//     range,
//   });

//   //   Result
//   console.log(response.data.values[0]);
//   console.log(response.data.values);
//   const data = response.data.values;
//   const [customer, phone] = response.data.values;

//   return {
//     props: {
//       data,
//     },
//   };
// }

// export default function Excel({ data }) {
//   console.log(data);
//   return (
//     <article>
//       {data.map((customer) => {
//         return (
//           <>
//             <h3>Nombre Contacto</h3>
//             <p>{customer[0]}</p>
//             <h3>Telefono</h3>
//             <p>{customer[1]}</p>
//           </>
//         );
//       })}
//       {/* <h1>{customer}</h1>
//       <p>{phone}</p> */}
//     </article>
//   );
// }
