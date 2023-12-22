import React, { useEffect } from 'react';
import "./Section1.css";
import Menu from '../menu/Menu';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import img1 from"../../assets/farhad-ibrahimzade-isHUj3N0194-unsplash.jpg"


 

export default function Section1() {
  useEffect(() => {
    AOS.init();
  }, []); 
  return (
    <div className=''>
      <div className="hero">
      <p className='text-white'>+221 77 256 64 08</p>
        < Menu />
        <section id="hero" class="d-flex align-items-center">
      <div
        class="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div class="row">
          <div class="col-lg-8">
            <h1>Bienvenue à<span>Ya Fatou Traiteur</span></h1>
            <h2>"Offrir une excellente cuisine depuis plus de 5 ans !"</h2>

            <div class="btns">
              <a href="#menu" class="btn-menu animated fadeInUp scrollto"
                >Nos Menus</a
              >
              <a
                href="#book-a-table"
                class="btn-book animated fadeInUp scrollto"
                >Passer une Commande</a
              >
            </div>
          </div>
          <div
            class="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
          <a href="assets/traiteur.mp4" class="glightbox play-btn"><i class="bi bi-play-circle width=1040 height=1060"></i></a>
          </div>
        </div>
      </div>
    </section>

      </div>
      <section id="about" class="about text-white">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="about-img">
                <img src={img1} alt="about" />
              </div>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>
                Quand l'Art de la Cuisine Rencontre l'Esthétique de la
                Présentation.
              </h3>
              <p class="fst-italic">
                Chez Ya Fatou Traiteur chaque Service en une expérience
                inoubliable.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i> Nous faisons du traiteur.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Nous prenons des commandes
                  et les livrer a temps.
                </li>
                <li>
                  <i class="bi bi-check-circle"
                    >Nous vous vendons des vaisselles aussi pour une dressages
                    exeptionnelles</i
                  >
                </li>
              </ul>
              <p>
                Ya fatou traiteur, est une cheffe cuisinière tres passionné,
                elle ne se limite pas seulement à préparer des plats délicieux,
                mais elle offre une expérience culinaire complète. Son talent ne
                se cantonne pas uniquement à la préparation des repas, mais
                s'étend également à la mise en scène de ces plats dans des
                environnements d'exception. Sa vision dépasse les simples
                assiettes pour inclure tout ce qui les entoure. Ce qui rend Ya
                Fatou Traiteur unique. Non seulement elle crée des plats qui
                enchantent les papilles, mais elle propose également des
                services de traiteur inégalés. elle va même plus loin en offrant
                à ses clients la possibilité d'acquérir les vaisselles et les
                ustensiles qu'il utilise lors de ses services de traiteur.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="why-us" class="why-us">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Pourquoi Nous</h2>
            <p>Pourquoi Nous choisir</p>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="box" data-aos="zoom-in" data-aos-delay="100">
                <span>01</span>
                <h4>Expérience culinaire complète</h4>
                <p>
                  Ya Fatou Traiteur offre bien plus que des plats délicieux.
                  Elle crée une expérience culinaire complète en mettant
                  l'accent sur la présentation et l'esthétique des plats. Son
                  talent ne se limite pas à la simple préparation des repas,
                  mais s'étend à la mise en scène de ces plats dans des
                  environnements exceptionnels, offrant ainsi une expérience
                  globale à ses clients.
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box" data-aos="zoom-in" data-aos-delay="200">
                <span>02</span>
                <h4>Services de traiteur exceptionnels</h4>
                <p>
                  En plus de la préparation de plats délectables, Ya Fatou
                  Traiteur propose des services de traiteur de qualité
                  supérieure. Elle ne se contente pas seulement de ravir les
                  papilles, mais offre également une attention particulière à la
                  présentation et à l'esthétique des événements, assurant une
                  expérience complète et mémorable pour ses clients.
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box" data-aos="zoom-in" data-aos-delay="300">
                <span>03</span>
                <h4>Opportunité d'acquérir des ustensiles uniques</h4>
                <p>
                  Outre la gastronomie, Ya Fatou Traiteur permet à ses clients
                  d'acquérir les ustensiles et la vaisselle utilisés lors de ses
                  services de traiteur. Cette offre unique permet aux clients de
                  recréer chez eux l'expérience culinaire et esthétique
                  exceptionnelle qu'elle propose, ajoutant ainsi une dimension
                  exclusive à son service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="menu" class="menu section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Menu</h2>
            <p>Veuillez consulter notre délicieux menu.</p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" class="filter-active">Tous</li>
                <li data-filter=".filter-starters">Entrées</li>
                <li data-filter=".filter-salads">Salades</li>
                <li data-filter=".filter-specialty">Spécialités</li>
              </ul>
            </div>
          </div>

          <div
            class="row menu-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="col-lg-6 menu-item filter-starters">
              <img
                src="assets/img/menu/lobster-bisque.jpg"
                class="menu-img"
                alt=""
              />
              <div class="menu-content">
                <a href="#">Nems</a><span>3000fca</span>
              </div>
              <div class="menu-ingredients">
                Des délicats nems à la viande, accompagnés de vermicelles chinois et d'une sauce.
              </div>
            </div>

            <div class="col-lg-6 menu-item filter-specialty">
              <img
                src="assets/img/menu/bread-barrel.jpg"
                class="menu-img"
                alt=""
              />
              <div class="menu-content">
                <a href="#">Bread Barrel</a><span>2000cfca</span>
              </div>
              <div class="menu-ingredients">
                chaque bouchée raconte une histoire de fraîcheur
              </div>
            </div>

            <div class="col-lg-6 menu-item filter-starters">
              <img src="assets/img/menu/cake.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">gâteau</a><span>10000fca</span>
              </div>
              <div class="menu-ingredients">
                Un délicat gâteau au chocolat accompagnés de ."
              </div>
            </div>

            <div class="col-lg-6 menu-item filter-salads">
              <img src="assets/img/menu/caesar.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Caesar Selections</a><span>$8.95</span>
              </div>
              <div class="menu-ingredients">
                chaque bouchée raconte une histoire de fraîcheur
              </div>
            </div>

            <div class="col-lg-6 menu-item filter-specialty">
              <img
                src="assets/img/menu/tuscan-grilled.jpg"
                class="menu-img"
                alt=""
              />
              <div class="menu-content">
                <a href="#">Tuscan Grilled</a><span>$9.95</span>
              </div>
              <div class="menu-ingredients">
                Grilled chicken with provolone, artichoke hearts, and roasted
                red pesto
              </div>
            </div>

            <div class="col-lg-6 menu-item filter-starters">
              <img
                src="assets/img/menu/mozzarella.jpg"
                class="menu-img"
                alt=""
              />
              <div class="menu-content">
                <a href="#">Mozzarella Stick</a><span>$4.95</span>
              </div>
              <div class="menu-ingredients">
                chaque bouchée raconte une histoire de fraîcheur
              </div>
            </div>

            <div class="col-lg-6 menu-item filter-salads">
              <img
                src="assets/img/menu/greek-salad.jpg"
                class="menu-img"
                alt=""
              />
              <div class="menu-content">
                <a href="#">Greek Salad</a><span>$9.95</span>
              </div>
              <div class="menu-ingredients">
                Fresh spinach, crisp romaine, tomatoes, and Greek olives
              </div>
            </div>

            <div class="col-lg-6 menu-item filter-salads">
              <img
                src="assets/img/menu/spinach-salad.jpg"
                class="menu-img"
                alt=""
              />
              <div class="menu-content">
                <a href="#">Spinach Salad</a><span>$9.95</span>
              </div>
              <div class="menu-ingredients">
                Fresh spinach with mushrooms, hard boiled egg, and warm bacon
                vinaigrette
              </div>
            </div>

            <div class="col-lg-6 menu-item filter-specialty">
              <img
                src="assets/img/menu/lobster-roll.jpg"
                class="menu-img"
                alt=""
              />
              <div class="menu-content">
                <a href="#">Lobster Roll</a><span>$12.95</span>
              </div>
              <div class="menu-ingredients">
                Plump lobster meat, mayo and crisp lettuce on a toasted bulky
                roll
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
