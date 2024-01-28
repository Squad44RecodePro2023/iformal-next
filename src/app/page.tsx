import Quote from "@/components/cards/quote/Quote";
import { getComment } from "@/services/cometario";



export default async function Home() {
	const comentarios = await getComment();	

	return (
		<>
			<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 m-3">
				{comentarios.map((e: any) => {
					return (
						<div
							className="col"
							key={e.id}
						>
							<Quote
								autor={e.autor}
								nota={e.nota}
								texto={e.comentario}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}
