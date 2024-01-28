"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import 'bootstrap/dist/js/bootstrap.bundle';

const links = [
	{
		nome: "Home",
		link: "/",
	},
	{
		nome: "Usuários",
		link: "/user",
	},
	{
		nome: "Login",
		link: "/login",
	},
	{
		nome: "Serviços",
		link: "/servicos",
	},
	{
		nome: "Contato",
		link: "/contato",
	},
];

export default function Navbar() {
	useEffect(() => {
		
		const toggleMenu = document.getElementById("toggleMenu");

		const navIco = document.querySelector("#nav-icon1");

		const handleClick = () => {
			const ariaExpanded = toggleMenu!!.getAttribute("aria-expanded");

			if (ariaExpanded === "true") {
				navIco!!.classList.add("open");
			} else {
				navIco!!.classList.remove("open");
			}
		};
		toggleMenu!!.addEventListener("click", handleClick);
		return () => {
			toggleMenu!!.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<div id="nav-top">
			<nav className="navbar navbar-expand-lg shadow position-absolute container-fluid z-3">
				<div className="container-fluid">
					<Link
						className="navbar-brand"
						href={"/"}
					>
						iFormal
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						id="toggleMenu"
					>
						<div id="nav-icon1">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{links.map((e, i) => {
								return (
									<li className="nav-item" key={i} >
										<Link
											className="nav-link"
											aria-current="page"
											href={e.link}
										>
											{e.nome}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</div>
		
	);
}
