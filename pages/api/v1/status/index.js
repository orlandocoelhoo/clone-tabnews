function status(request, response) {
  response.status(200).json({ frase: "Oi tudo bem com vocês é" });
}
export default status;
