const film = {
  film1: {
    naziv: "Začarani Grad",
    kratak_opis:
      "Devojčica Čihiro se vozi u autu sa svojim roditeljima koji se zajedno sa njom sele u novi grad, no putem se izgube i stižu u tajanstveni hram koji je, zapravo, svet duhova.",
    dug_opis:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo veniam distinctio voluptas harum, incidunt recusandae porro laboriosam veritatis odit culpa, amet perferendis aut quae. Quia unde excepturi quos non impedit nobis, consectetur at quo ea officiis inventore exercitationem similique aperiam a, error doloremque iure molestiae dolorem cupiditate cum illum dolor commodi. Veniam illum error accusantium veritatis hic, laboriosam ullam. Id minima delectus nulla voluptas harum non possimus quam, iure laudantium? Temporibus amet vel ea voluptates cupiditate a, aliquam eos molestiae?",
    zanr: "Animirani, Avantura",
    trajanje: "3h35m",
    rezija: "Cristofer Nolan",
    scenario: "Fran Walsh, Philippa Boyens",
    od_datum: "25.septembra",
    do_datum: "04.oktobra",
    vreme_1: "18:00h",
    vreme_2: "21:00h",
    cena: "350",
    sala: "SALA1",
    ocena: "8.6",
    imdb: "https://www.imdb.com/title/tt0816692/",
    slika: "images/uskoro-movie-p1.jpg",
    baner: "images/movie-b2.jpg",
    g_glumac1: "M. Mekonahi",
    g_glumac1_slika: "images/glumac-1.jpg",
    g_glumac2: "Dz. Cestejn",
    g_glumac2_slika: "images/glumac-2.jpg",
    g_glumac3: "M. Kejn",
    g_glumac3_slika: "images/glumac-3.jpg",
  },

  film2: {
    naziv: "Borilački klub",
    kratak_opis:
      "Pratite anonimnog naratora i njegovog tajanstvenog prijatelja Tajlera Durdena, dok zajedno formiraju podzemni klub gde se ljudi tuku do krvi. Ubrzo se klub širi, a situacija izmiče kontroli i stvari postaju sve opasnije. ",
    dug_opis:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo veniam distinctio voluptas harum, incidunt recusandae porro laboriosam veritatis odit culpa, amet perferendis aut quae. Quia unde excepturi quos non impedit nobis, consectetur at quo ea officiis inventore exercitationem similique aperiam a, error doloremque iure molestiae dolorem cupiditate cum illum dolor commodi. Veniam illum error accusantium veritatis hic, laboriosam ullam. Id minima delectus nulla voluptas harum non possimus quam, iure laudantium? Temporibus amet vel ea voluptates cupiditate a, aliquam eos molestiae?",
    zanr: "Drama",
    trajanje: "3h35m",
    rezija: "Cristofer Nolan",
    scenario: "Fran Walsh, Philippa Boyens",
    od_datum: "25.septembra",
    do_datum: "04.oktobra",
    vreme_1: "18:00h",
    vreme_2: "21:00h",
    cena: "350",
    sala: "SALA1",
    ocena: "8.8",
    imdb: "https://www.imdb.com/title/tt0816692/",
    slika: "images/uskoro-movie-p2.jpg",
    baner: "images/movie-b2.jpg",
    g_glumac1: "M. Mekonahi",
    g_glumac1_slika: "images/glumac-1.jpg",
    g_glumac2: "Dz. Cestejn",
    g_glumac2_slika: "images/glumac-2.jpg",
    g_glumac3: "M. Kejn",
    g_glumac3_slika: "images/glumac-3.jpg",
  },

  film3: {
    naziv: "Pijanist",
    kratak_opis:
      '"Pijanist" je istinita priča o Władysławu Szpilmanu, slavnom poljskom pijanisti koji je preživeo geto Varšavu i nacističku okupaciju tokom Drugog svetskog rata. Film, koji je režirao Roman Polanski, prati Szpilmanovu priču o preživljavanju, patnji i nadanju tokom jednog od najmračnijih perioda u istoriji čovečanstva. ',
    dug_opis:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo veniam distinctio voluptas harum, incidunt recusandae porro laboriosam veritatis odit culpa, amet perferendis aut quae. Quia unde excepturi quos non impedit nobis, consectetur at quo ea officiis inventore exercitationem similique aperiam a, error doloremque iure molestiae dolorem cupiditate cum illum dolor commodi. Veniam illum error accusantium veritatis hic, laboriosam ullam. Id minima delectus nulla voluptas harum non possimus quam, iure laudantium? Temporibus amet vel ea voluptates cupiditate a, aliquam eos molestiae?",
    zanr: "Bigrafija, Drama, Muzika",
    trajanje: "3h35m",
    rezija: "Cristofer Nolan",
    scenario: "Fran Walsh, Philippa Boyens",
    od_datum: "25.septembra",
    do_datum: "04.oktobra",
    vreme_1: "18:00h",
    vreme_2: "21:00h",
    cena: "350",
    sala: "SALA1",
    ocena: "8.5",
    imdb: "tt0816692/",
    slika: "images/uskoro-movie-p3.jpg",
    baner: "images/movie-b2.jpg",
    g_glumac1: "M. Mekonahi",
    g_glumac1_slika: "images/glumac-1.jpg",
    g_glumac2: "Dz. Cestejn",
    g_glumac2_slika: "images/glumac-2.jpg",
    g_glumac3: "M. Kejn",
    g_glumac3_slika: "images/glumac-3.jpg",
  },
};

const filmovi_uskoro = document.querySelectorAll(".film_uskoro");

filmovi_uskoro.forEach((film_uskoro) => {
  film_uskoro.addEventListener("click", () => {
    removeActiveClass();
    film_uskoro.classList.add("aktivan");
    switch (true) {
      case filmovi_uskoro[0].classList.contains("aktivan"): {
        document.getElementById("u-zanr").innerHTML = film.film1.zanr;
        document.getElementById("u-naziv").innerHTML = film.film1.naziv;
        document.getElementById("u-ocena").innerHTML = film.film1.ocena;
        document.getElementById("u-ocena").innerHTML = film.film1.ocena;
        document.getElementById("u-dug_opis").innerHTML =
          film.film1.kratak_opis;
        document.getElementById("u-trejler").src =
          "https://www.youtube.com/embed/CHCUkXUPkFM";
        break;
      }
      case filmovi_uskoro[1].classList.contains("aktivan"): {
        document.getElementById("u-zanr").innerHTML = film.film2.zanr;
        document.getElementById("u-naziv").innerHTML = film.film2.naziv;
        document.getElementById("u-ocena").innerHTML = film.film2.ocena;
        document.getElementById("u-ocena").innerHTML = film.film2.ocena;
        document.getElementById("u-dug_opis").innerHTML =
          film.film2.kratak_opis;
        document.getElementById("u-trejler").src =
          "https://www.youtube.com/embed/6JnN1DmbqoU";
        break;
      }
      case filmovi_uskoro[2].classList.contains("aktivan"): {
        document.getElementById("u-zanr").innerHTML = film.film3.zanr;
        document.getElementById("u-naziv").innerHTML = film.film3.naziv;
        document.getElementById("u-ocena").innerHTML = film.film3.ocena;
        document.getElementById("u-ocena").innerHTML = film.film3.ocena;
        document.getElementById("u-dug_opis").innerHTML =
          film.film3.kratak_opis;
        document.getElementById("u-trejler").src =
          "https://www.youtube.com/embed/BFwGqLa_oAo";
        break;
      }
      default: {
        document.getElementById("u-zanr").innerHTML = film.film1.zanr;
        document.getElementById("u-naziv").innerHTML = film.film1.naziv;
        document.getElementById("u-ocena").innerHTML = film.film1.ocena;
        document.getElementById("u-ocena").innerHTML = film.film1.ocena;
        document.getElementById("u-dug_opis").innerHTML =
          film.film1.kratak_opis;
        document.getElementById("u-trejler").src = film.film1.trejler;
      }
    }
  });
});

function removeActiveClass() {
  filmovi_uskoro.forEach((film_uskoro) => {
    film_uskoro.classList.remove("aktivan");
  });
}
