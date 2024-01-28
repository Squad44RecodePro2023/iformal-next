'use client'
import useUsuarios from "@/services/usuario";
export default function Cadastro() {

	const { formValues, handleInputChange, handleSubmit } = useUsuarios();
	return (
		<div className="d-flex container-fluid justify-content-center">
			<div className="container m-5">
				<h2>Formulário de Cadastro</h2>
				<form
					onSubmit={handleSubmit}
				>
					{/* Nome */}
					<div className="mb-3">
						<label
							htmlFor="nome"
							className="form-label"
						>
							Nome*
						</label>
						<input
							type="text"
							className="form-control"
							id="nome"
							name="nome"
							value={formValues.nome} onChange={handleInputChange}
							required
						/>
					</div>
					{/* Email */}
					<div className="mb-3">
						<label
							htmlFor="email"
							className="form-label"
						>
							Email*
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							value={formValues.email} onChange={handleInputChange}
							required
						/>
					</div>
					{/* Data de Nascimento */}
					<div className="mb-3">
						<label
							htmlFor="dataNascimento"
							className="form-label"
						>
							Data de Nascimento*
						</label>
						<input
							type="date"
							className="form-control"
							id="dataNascimento"
							name="dataNascimento"
							value={formValues.dataNascimento} onChange={handleInputChange}
							required
						/>
					</div>
					{/* Telefone */}
					<div className="mb-3">
						<label
							htmlFor="telefone"
							className="form-label"
						>
							Telefone
						</label>
						<input
							type="tel"
							className="form-control"
							id="telefone"
							name="telefone"
							pattern="\d{11}"
							value={formValues.telefone} onChange={handleInputChange}
						/>
					</div>
					{/* CPF */}
					<div className="mb-3">
						<label
							htmlFor="cpf"
							className="form-label"
						>
							CPF*
						</label>
						<input
							type="text"
							className="form-control"
							id="cpf"
							name="cpf"
							value={formValues.cpf} onChange={handleInputChange}
							required
						/>
					</div>
					{/* Logradouro */}
					<div className="mb-3">
						<label
							htmlFor="logradouro"
							className="form-label"
						>
							Logradouro*
						</label>
						<input
							type="text"
							className="form-control"
							id="logradouro"
							name="logradouro"
							maxLength={55}
							value={formValues.logradouro} onChange={handleInputChange}
							required
						/>
					</div>
					{/* Número */}
					<div className="mb-3">
						<label
							htmlFor="numero"
							className="form-label"
						>
							Número*
						</label>
						<input
							type="number"
							className="form-control"
							id="numero"
							name="numero"
							value={formValues.numero} onChange={handleInputChange}
							required
						/>
					</div>
					{/* Bairro */}
					<div className="mb-3">
						<label
							htmlFor="bairro"
							className="form-label"
						>
							Bairro*
						</label>
						<input
							type="text"
							className="form-control"
							id="bairro"
							name="bairro"
							maxLength={55}
							value={formValues.bairro} onChange={handleInputChange}
							required
						/>
					</div>
					{/* CEP */}
					<div className="mb-3">
						<label
							htmlFor="cep"
							className="form-label"
						>
							CEP*
						</label>
						<input
							type="text"
							className="form-control"
							id="cep"
							name="cep"
							maxLength={9}
							minLength={9}
							pattern="\d{5}-\d{3}"
							value={formValues.cep} onChange={handleInputChange}
							required
						/>
					</div>
					{/* Complemento */}
					<div className="mb-3">
						<label
							htmlFor="complemento"
							className="form-label"
						>
							Complemento
						</label>
						<input
							type="text"
							className="form-control"
							id="complemento"
							name="complemento"
							maxLength={15}
							value={formValues.complemento} onChange={handleInputChange}
						/>
					</div>
					{/* Estado */}
					<div className="mb-3">
						<label
							htmlFor="estado"
							className="form-label"
						>
							Estado*
						</label>
						<input
							type="text"
							className="form-control"
							id="estado"
							name="estado"
							maxLength={2}
							minLength={2}
							value={formValues.estado} onChange={handleInputChange}
							required
						/>
					</div>
					{/* Cidade */}
					<div className="mb-3">
						<label
							htmlFor="cidade"
							className="form-label"
						>
							Cidade*
						</label>
						<input
							type="text"
							className="form-control"
							id="cidade"
							name="cidade"
							maxLength={55}
							value={formValues.cidade} onChange={handleInputChange}
							required
						/>
					</div>
					{/* Botão de envio */}
					<button
						type="submit"
						className="btn btn-primary"
					>
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
