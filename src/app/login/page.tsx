import Link from "next/link";
import React from "react";

export default function Login() {
	return (
		

			<div
				className="cardconfig card shadow"
				style={{ width: "20rem" }}
			>
				<div className="card-body">
					<h5 className="card-title text-center">Conecte-se no iFormal</h5>
					<br />
					<form >
						<div className="mb-3">
							<label
								htmlFor="email"
								className="form-label"
							>
								Email:
							</label>
							<input
								id="email"
								type="email"
								className="form-control"
								aria-describedby="emailHelp"
								placeholder="Escreva aqui o seu e-mail"
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="senha"
								className="form-label"
							>
								Senha:
							</label>
							<input
								type="password"
								className="form-control"
								id="senha"
								placeholder="Escreva aqui sua senha"
							/>
						</div>
						<div className="mb-3 form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="lembrar"
							/>
							<label
								className="form-check-label"
								htmlFor="lembrar"
							>
								Lembrar de mim
							</label>
						</div>
						<div className="button text-center">
							<button
								type="submit"
								className="btn btn-primary"
							>
								Entrar
							</button>
						</div>
					</form>
					<br />
					<Link
						href="#"
						className="card-link"
					>
						Esqueceu sua senha?
					</Link>
					<Link
						href={'/user/cadastro'}
						className="card-link"
					>
						Cadastre-se
					</Link>
				</div>
			</div>
		
	);
}
