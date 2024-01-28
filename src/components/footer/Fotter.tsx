'use client'
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import Image from "next/image";


function Footer() {
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

    return ( <footer className="py-5 container-fluid shadow-lg">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3">
          <div>
            <h5>Serviços</h5>
            <ul className="nav flex-column">
              {categorias.map((e: any) => {
                return (
                  <li className="nav-item mb-2" key={e.id}>
                <Link href="#" className="nav-link p-0">
                  {e.nome}
                </Link>
              </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 mt-3">
          <div>
            <h5>Institucional</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Quem somos
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Nossa visão
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Trabalhe Conosco
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Parceiros
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Juridico
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Comunidade iFormal
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Blog iFormal
                </Link>
              </li>
            </ul>
          </div>

        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3">
          <div>
            <h5>Ajuda</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Perguntas Frequentes
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Termos de Uso
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Politica de Privacidade
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Mapa do Site
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 downloads mt-3">
          <h5>Downloads</h5>
          <Link href="#">
            <Image
              src="/imgs/google.png"
              width={200}
              height={70}
              alt="Disponível no Google Play"
              className="mb-3"
            />
          </Link>
          <Link href="#">
            <Image
              src="/imgs/apple.png"
              alt="Disponível na App Store"
              className="mb-3"
              width={200}
              height={70}
            />
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 Squad44, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex justify-content-center">
          <li className="ms-3">
            <Link href="#">
              <i className="fa-brands fa-facebook-f" />
            </Link>
          </li>
          <li className="ms-3">
            <Link href="#">
              <i className="fab fa-instagram mr-3" />
            </Link>
          </li>
          <li className="ms-3">
            <Link href="#">
              <i className="fa-brands fa-twitter" />
            </Link>
          </li>
          <li className="ms-3">
            <Link href="#">
              <i className="fa-brands fa-youtube" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
   );
}

export default Footer;