"use client";
import React, { useEffect } from "react";
import useUsuarios from "@/services/usuario";
import Link from "next/link";

export default function User() {
	const { usuarios, listar, handleDelete } = useUsuarios();
	useEffect(() => {
		listar();
	}, []);
	return (
		<div className="container  my-5">
			<h1 className="mb-3 ">Usuários Iformal</h1>

			<table className="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Email</th>
						<th>Data</th>
						<th>Telefone</th>
						<th>Endereço</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{usuarios.map((e: any) => {
						return (
							<tr key={e.id}>
								<td>{e.id}</td>
								<td>{e.nome}</td>
								<td>{e.email}</td>
								<td>{e.dataNascimento}</td>
								<td>{e.telefone}</td>
								<td>
									{e.adress.cidade} - {e.adress.estado}
								</td>
								<td>
								<Link  href={`/user/atualizar/?id=${e.id}`}>  <button type="button" className="btn btn-success">Edit</button>
							</Link>
							<button type="button" className="btn btn-danger ms-3" onClick={() => handleDelete(e.id)}>Delet</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
