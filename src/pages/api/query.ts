export default function getQuery(req, res) {
	const data = { message: 'Hello, World!' };
	res.status(200).json(data);
}
