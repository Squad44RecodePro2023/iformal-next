import React from "react";
interface QuoteProps {
	nota: number;
	autor: string;
	texto: string;
}
function Quote(props: QuoteProps) {
	return (
		<div className="citacao">
			<span>
				<i className="fa-solid fa-quote-left" />
			</span>
			<div className="star">
				{Array.from({ length: props.nota }, (_, index) => (
					<i
						key={index}
						className="fa-solid fa-star"
					/>
				))}
			</div>
			<p>{props.texto}</p>
			<p>
				<small>
					<a href="#">{props.autor}</a>
				</small>
			</p>
			<span>
				<i className="fa-solid fa-quote-right" />
			</span>
		</div>
	);
}

export default Quote;
