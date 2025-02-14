import databese from "../../../../infra/databases.js";

async function status(request, response) {
  const result = await databese.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ frase: "Oi tudo bem com vocês é" });
}
export default status;
