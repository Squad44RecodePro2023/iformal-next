'use client'

import Link from "next/link";
import { useEffect, useState } from "react";


    
  
function NavCategoria() {
    const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/categorias");
        const data = await response.json();
        setCategorias(data); // Aqui você verá os dados no console
      } catch (error) {
        console.error("Erro ao buscar comentários:", error);
      }
    };
  
    fetchData();
  }, []);

    return ( <>
    <nav>
  <input className="show-more" type="checkbox" id="show-more" />
  <div className="container-fluid" id="categorias-servicos">
    <ul>
    {categorias.map((e: any) => {
                return (
                  <li className="m-2" key={e.id}>
                <Link href={`/categoria${e.id}`} className="nav-link p-0">
                  {e.nome}
                </Link>
              </li>
                )
              })}
    </ul>
  </div>
  <label className="show-more" htmlFor="show-more">
    {" "}
    <span>
      <i className="fa-solid fa-circle-plus" />
    </span>
  </label>
  <label className="show-less" htmlFor="show-more">
    {" "}
    <span>
      <i className="fa-solid fa-circle-minus" />
    </span>
  </label>
</nav>

    </> );
}

export default NavCategoria;