export async function getComment() {
	const data = await fetch("http://localhost:8080/api/comentarios");
	const comentarios = await data.json();
	return  comentarios ;
}

