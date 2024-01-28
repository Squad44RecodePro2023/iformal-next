import Image from "next/image";
import React from "react";
interface ArtigoProps{
	titulo:string,
	texto:string,
	autor:string,
}
export default function Artigo(props:ArtigoProps) {
	return (
		<div className="card h-100">
			<Image
				src="src/img/hero.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">
					{props.texto}
				</p>
			</div>
			<p className="text-end p-1">
				{" "}
				<a href="#">Leia mais...</a>
			</p>
			<div className="card-footer">
				<small>{props.autor}</small>
			</div>
		</div>
	);
}
