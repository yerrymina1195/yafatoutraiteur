import React from 'react'
import  "../section1/Section1.css";
import yft from "../../assets/yft.png";

export default function Menu
    () {
    return (
        <header id="header" class="fixed-top d-flex align-items-cente">
      <div
        class="container-fluid container-xl d-flex align-items-center justify-content-lg-between"
      >
        <h1 class="logo me-auto me-lg-0">
          <a href="index.html"><img src={yft} /></a>
        </h1>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#hero">Acceuil</a>
            </li>
            <li><a class="nav-link scrollto" href="#about">À propos</a></li>
            <li><a class="nav-link scrollto" href="#menu">Menu</a></li>
            <li>
              <a class="nav-link scrollto" href="#specials">Offres spéciales</a>
            </li>
            <li><a class="nav-link scrollto" href="#events">Événements</a></li>
            <li><a class="nav-link scrollto" href="#chefs">Chefs</a></li>
            <li><a class="nav-link scrollto" href="#gallery">Galerie</a></li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a
          href="#book-a-table"
          class="book-a-table-btn scrollto d-none d-lg-flex"
          >Commander</a
        >
      </div>
    </header>
    )
}
