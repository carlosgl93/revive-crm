import { CryptoJS } from "crypto-js";

export default async function handler(req, res) {
  const baseUrl = process.env.PAYKU_SANDBOX_URL;
  const publickToken = process.env.PAYKU_TOKEN;
  const bearer = process.env.PAYKU_BEARER_NAME;
  console.log(publickToken);
  const request = async () => {
    const response = await fetch(`${baseUrl}/transaction`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${bearer} ${publickToken}`,
      },
    });
    const result = await response.json();
    console.log(result);
  };

  request();
}
