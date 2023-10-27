// Base de datos de películas
const movies = [
  {
      id: 1,
      title: "The Joker",
      rating: 8.5,
      year: 2019,
      image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      download: {
          quality: "Full HD",
          resolution: "1080p",
          duration: "2h 2min",
          minutes: 122,
          extension: "MP4",
          format: "WEB/DL"
      },
      director: "Todd Phillips",
      cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
      genres: ["Crime", "Drama", "Thriller"],
      plot: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      language: "English",
      country: "United States"
  },
  {
      id: 2,
      title: "The Matrix",
      rating: 8.7,
      year: 1999,
      image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      download: {
          quality: "Full HD",
          resolution: "1080p",
          duration: "2h 16min",
          minutes: 136,
          extension: "MP4",
          format: "BDRip"
      },
      director: "Lana Wachowski, Lilly Wachowski",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      genres: ["Action", "Sci-Fi"],
      plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      language: "English",
      country: "United States"
  },

  {
    titulo: "El señor de los anillos: La comunidad del anillo",
    director: "Peter Jackson",
    genero: "Fantasía",
    anio: 2001,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 3,
    descripcion: "El señor de los anillos: La comunidad del anillo es una película de fantasía y aventuras de 2001 dirigida por Peter Jackson y basada en el primer volumen de la novela homónima de J. R. R. Tolkien. Es la primera entrega de la trilogía cinematográfica El Señor de los Anillos, producida por New Line Cinema y protagonizada por Elijah Wood, Ian McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Cate Blanchett, John Rhys-Davies, Billy Boyd, Dominic Monaghan, Orlando Bloom, Christopher Lee, Hugo Weaving, Sean Bean, Ian Holm y Andy Serkis.",
    duracion: "2h 58min",
    actores: ["Elijah Wood", "Ian McKellen", "Liv Tyler", "Viggo Mortensen"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$93,000,000",
    recaudacion: "$871,530,324"
  },

  {
    titulo: "El club de la pelea",
    director: "David Fincher",
    genero: "Drama",
    anio: 1999,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 4,
    descripcion: "El club de la pelea es una película estadounidense de 1999 basada en la novela homónima de Chuck Palahniuk. Fue dirigida por David Fincher y protagonizada por Edward Norton, Brad Pitt y Helena Bonham Carter. Norton interpreta al protagonista, un hombre que sufre de insomnio. Este se encuentra con un vendedor de jabón llamado Tyler Durden (Pitt) y se une a un club de pelea clandestino con él para aliviar su insomnio. La película muestra cómo el protagonista se ve envuelto en algo mucho más grande de lo que imaginaba, y su lucha por deshacerse de su alter ego, Tyler Durden.",
    duracion: "2h 19min",
    actores: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter", "Meat Loaf"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$63,000,000",
    recaudacion: "$100,853,753"
  },
  {
    titulo: "Cadena perpetua",
    director: "Frank Darabont",
    genero: "Drama",
    anio: 1994,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 5,
    descripcion: "Cadena perpetua es una película estadounidense de 1994 basada en la novela corta Rita Hayworth y la redención de Shawshank de Stephen King. Escrita y dirigida por Frank Darabont, está protagonizada por Tim Robbins y Morgan Freeman. Andy Dufresne (Tim Robbins), un joven banquero, es condenado a cadena perpetua por el asesinato de su esposa y el amante de esta. A pesar de que todos los indicios le incriminan, él insiste en su inocencia. Es entonces cuando es enviado a una prisión estatal, donde conocerá a Ellis Boyd 'Red' Redding (Morgan Freeman), un interno que lleva más de 20 años en ella.",
    duracion: "2h 22min",
    actores: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$25,000,000",
    recaudacion: "$58,500,000"
  },
  {
    titulo: "Interestelar",
    director: "Christopher Nolan",
    genero: "Ciencia ficción",
    anio: 2014,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 4,
    descripcion: "Interestelar es una película británico-estadounidense de ciencia ficción de 2014 dirigida por Christopher Nolan y protagonizada por Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine y Matt Damon. La película presenta un equipo de astronautas que viajan a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.​ Calificada por Nolan como «su película más ambiciosa», el guion fue escrito por él y su hermano Jonathan Nolan, basándose en las teorías del físico Kip Thorne sobre los agujeros de gusano y el viaje en el tiempo.",
    duracion: "2h 49min",
    actores: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$165,000,000",
    recaudacion: "$675,120,017"
  },
  {
    titulo: "El caballero oscuro",
    director: "Christopher Nolan",
    genero: "Acción",
    anio: 2008,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 5,
    descripcion: "El caballero oscuro es una película de superhéroes británico-estadounidense de 2008 dirigida, producida y coescrita por Christopher Nolan. Basada en el personaje Batman de DC Comics, la película es la secuela de Batman Begins (2005) y la segunda entrega de la trilogía de El caballero oscuro. Christian Bale repite el papel protagónico de Bruce Wayne/Batman, con un reparto de Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal y Morgan Freeman en papeles principales. En la película, Bruce Wayne/Batman, el teniente James Gordon y el fiscal de distrito Harvey Dent forman una alianza para desmantelar las organizaciones criminales de Gotham City que son lideradas por el Joker.",
    duracion: "2h 32min",
    actores: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$185,000,000",
    recaudacion: "$1,004,558,444"
  },
  {
    titulo: "Matrix",
    director: "The Wachowskis",
    genero: "Ciencia ficción",
    anio: 1999,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 4,
    descripcion: "Matrix es una película de ciencia ficción escrita y dirigida por las hermanas Wachowski y protagonizada por Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss y Hugo Weaving. Estrenada en los Estados Unidos el 31 de marzo de 1999, es la primera entrega de la trilogía de Matrix, y está producida por Joel Silver. La película fue un éxito de crítica y taquilla, recaudando más de 460 millones de dólares en todo el mundo, y ganó cuatro Premios Óscar en la 72.ª edición de los Premios de la Academia, incluyendo Mejor Montaje, Mejor Sonido, Mejor Edición de Sonido y Mejores Efectos Visuales.",
    duracion: "2h 16min",
    actores: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$63,000,000",
    recaudacion: "$463,517,383"
  },
  {
    titulo: "El resplandor",
    director: "Stanley Kubrick",
    genero: "Terror",
    anio: 1980,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 5,
    descripcion: "El resplandor es una película de terror psicológico producida y dirigida por Stanley Kubrick, coescrita con Diane Johnson, y basada en la novela homónima de Stephen King. La película está protagonizada por Jack Nicholson, Shelley Duvall, Scatman Crothers y Danny Lloyd. La película narra la historia de Jack Torrance, un aspirante a escritor que acepta el puesto de vigilante de invierno en un aislado hotel de alta montaña llamado Overlook, en Colorado, y que se convierte en el huésped permanente del hotel con su esposa y su hijo. Jack se vuelve loco gradualmente bajo la influencia de los espíritus malignos del hotel, y trata de asesinar a su esposa y a su hijo.",
    duracion: "2h 26min",
    actores: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd", "Scatman Crothers"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$19,000,000",
    recaudacion: "$44,017,374"
  },
  {
    titulo: "La naranja mecánica",
    director: "Stanley Kubrick",
    genero: "Drama",
    anio: 1971,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 4,
    descripcion: "La naranja mecánica es una película de culto de 1971, producida, escrita y dirigida por Stanley Kubrick. Es una adaptación de la novela homónima de 1962 escrita por Anthony Burgess. La película está protagonizada por Malcolm McDowell como el protagonista, Alex, y presenta una actuación destacada de Patrick Magee, Adrienne Corri, Miriam Karlin y Warren Clarke. La banda sonora sintetizada de Wendy Carlos, que contiene adaptaciones de música clásica, fue aclamada por la crítica. La película narra la historia de Alex DeLarge, un joven delincuente, líder de una pandilla de matones callejeros, que se dedica a cometer actos de ultraviolencia, como violaciones y asesinatos, en un futuro distópico.",
    duracion: "2h 16min",
    actores: ["Malcolm McDowell", "Patrick Magee", "Adrienne Corri", "Miriam Karlin"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$2,200,000",
    recaudacion: "$26,589,355"
  },
  {
    titulo: "Forrest Gump",
    director: "Robert Zemeckis",
    genero: "Drama",
    anio: 1994,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 5,
    descripcion: "Forrest Gump es una película estadounidense de 1994 dirigida por Robert Zemeckis y protagonizada por Tom Hanks. La trama se centra en la vida de Forrest Gump, un hombre con un bajo coeficiente intelectual desde su infancia hasta su madurez, y su encuentro con diferentes personajes históricos, quienes influyen en su vida. La película está basada en la novela homónima de 1986 escrita por Winston Groom. Forrest Gump fue un éxito comercial, convirtiéndose en la película más taquillera en Norteamérica en 1994, y la segunda película más taquillera de 1994 en todo el mundo. La película ganó seis Premios Óscar, incluyendo Mejor Película, Mejor Director y Mejor Actor para Tom Hanks, y recibió muchas otras nominaciones. En 1996, una secuela, Gump and Co., fue escrita por Groom, pero no fue adaptada al cine debido a diferencias entre él y los productores.",
    duracion: "2h 22min",
    actores: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$55,000,000",
    recaudacion: "$677,945,399"
  },
  {
    titulo: "El gran dictador",
    director: "Charles Chaplin",
    genero: "Comedia",
    anio: 1940,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 5,
    descripcion: "El gran dictador es una película estadounidense de 1940 escrita, dirigida y protagonizada por Charles Chaplin. La película fue estrenada en plena Segunda Guerra Mundial, y en ella Chaplin denuncia el nazismo, el fascismo y el antisemitismo. El gran dictador fue la primera película sonora de Chaplin, aunque en ella se escucha su voz únicamente en una canción. La película está considerada como una de las mejores comedias de la historia del cine, y en 1997 fue seleccionada para su conservación en el National Film Registry de Estados Unidos por ser «cultural, histórica o estéticamente significativa».",
    duracion: "2h 5min",
    actores: ["Charles Chaplin", "Paulette Goddard", "Jack Oakie", "Reginald Gardiner"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$2,000,000",
    recaudacion: "$5,000,000"
  },
  {
    titulo: "Gladiador",
    director: "Ridley Scott",
    genero: "Acción",
    anio: 2000,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 4,
    descripcion: "Gladiador es una película épica estadounidense de 2000 dirigida por Ridley Scott y protagonizada por Russell Crowe, Joaquin Phoenix, Connie Nielsen, Ralf Möller, Oliver Reed, Djimon Hounsou, Derek Jacobi, John Shrapnel y Richard Harris. El guion de David Franzoni, John Logan y William Nicholson está inspirado en la vida del emperador romano Marco Aurelio y en la Roma del siglo II. La película fue un éxito de taquilla, recaudando más de 457 millones de dólares en todo el mundo, y fue la primera película ganadora del Óscar a la mejor película en el siglo XXI. También ganó los premios a mejor actor para Crowe y mejor diseño de vestuario, y fue nominada a otras doce categorías, incluyendo mejor director, mejor actor de reparto para Joaquin Phoenix y mejor guion original. La película fue bien recibida por la crítica, que elogió las actuaciones, la historia, la dirección, la partitura musical, los efectos visuales y la recreación de la antigua Roma.",
    duracion: "2h 35min",
    actores: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$103,000,000",
    recaudacion: "$457,640,427"
  },
  {
    titulo: "El sexto sentido",
    director: "M. Night Shyamalan",
    genero: "Drama",
    anio: 1999,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 4,
    descripcion: "El sexto sentido es una película estadounidense de 1999 del género de terror psicológico escrita y dirigida por M. Night Shyamalan y protagonizada por Bruce Willis y Haley Joel Osment. La película fue un éxito de taquilla, recaudando cerca de 673 millones de dólares en todo el mundo, y fue el segundo filme más taquillero de 1999, solo por detrás de Star Wars: Episodio I - La amenaza fantasma. La película fue bien recibida por la crítica, que elogió la dirección, la actuación, la historia, la partitura musical y el suspenso. El sexto sentido fue nominada a seis premios Óscar, incluyendo mejor película, mejor director para Shyamalan, mejor actor de reparto para Osment y mejor actriz de reparto para Toni Collette.",
    duracion: "1h 47min",
    actores: ["Bruce Willis", "Haley Joel Osment", "Toni Collette", "Olivia Williams"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$40,000,000",
    recaudacion: "$672,806,292"
  },
  {
    titulo: "La vida es bella",
    director: "Roberto Benigni",
    genero: "Comedia",
    anio: 1997,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 5,
    descripcion: "La vida es bella es una película italiana de 1997 del género comedia dramática dirigida por Roberto Benigni. La película está ambientada en la Italia de 1939, antes y durante la Segunda Guerra Mundial. La película fue un éxito de taquilla, recaudando más de 229 millones de dólares en todo el mundo, y fue la película extranjera más taquillera en Estados Unidos hasta el estreno de Crouching Tiger, Hidden Dragon en 2000. La vida es bella fue bien recibida por la crítica, que elogió la actuación, la dirección, la historia, la partitura musical y el humor. La película ganó el Óscar a la mejor película de habla no inglesa y a mejor banda sonora, y fue nominada a otras cinco categorías, incluyendo mejor película, mejor director para Benigni y mejor actor para él mismo. La película también ganó tres premios BAFTA, incluyendo mejor película en lengua no inglesa, y dos Globos de Oro, incluyendo mejor película en lengua no inglesa.",
    duracion: "1h 56min",
    actores: ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini", "Giustino Durano"],
    pais: "Italia",
    idioma: "Italiano",
    presupuesto: "$20,000,000",
    recaudacion: "$229,200,000"
  },
  {
    titulo: "Titanic",
    director: "James Cameron",
    genero: "Drama",
    anio: 1997,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 5,
    descripcion: "Titanic es una película estadounidense de 1997 del género drama romántico dirigida, escrita, coproducida y coeditada por James Cameron. La película está protagonizada por Leonardo DiCaprio y Kate Winslet, quienes interpretan a dos jóvenes enamorados que, pese a las diferencias de clase social, se embarcan en el Titanic en su viaje inaugural desde Southampton, Inglaterra, a Nueva York, Estados Unidos, pero el viaje se ve truncado por el hundimiento del barco. La película fue un éxito de taquilla, recaudando más de 2186 millones de dólares en todo el mundo, y fue la película más taquillera de la historia hasta el estreno de Avatar, también de Cameron, en 2009. Titanic fue bien recibida por la crítica, que elogió la dirección, la actuación, la historia, la partitura musical, los efectos visuales y la fotografía. La película ganó el Óscar a la mejor película, mejor director para Cameron, mejor fotografía, mejor dirección artística, mejor edición de sonido, mejor mezcla de sonido, mejor montaje, mejor banda sonora y mejor canción original, y fue nominada a otras tres categorías, incluyendo mejor actriz para Winslet.",
    duracion: "3h 14min",
    actores: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$200,000,000",
    recaudacion: "$2,186,772,302"
  },
  {
    titulo: "Apocalypse Now",
    director: "Francis Ford Coppola",
    genero: "Drama",
    anio: 1979,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 4,
    descripcion: "Apocalypse Now es una película estadounidense de 1979 del género drama bélico dirigida, producida y coescrita por Francis Ford Coppola. La película está protagonizada por Marlon Brando, Robert Duvall, Martin Sheen, Frederic Forrest, Albert Hall, Sam Bottoms, Laurence Fishburne y Dennis Hopper. La película está ambientada en la guerra de Vietnam y sigue a un capitán del ejército estadounidense que es enviado en una peligrosa misión a Camboya para asesinar a un coronel renegado que se ha vuelto loco. La película fue un éxito de taquilla, recaudando más de 150 millones de dólares en todo el mundo, y fue la película más taquillera de 1979. Apocalypse Now fue bien recibida por la crítica, que elogió la dirección, la actuación, la historia, la partitura musical, los efectos visuales y la fotografía. La película ganó el Óscar a la mejor fotografía y mejor sonido, y fue nominada a otras siete categorías, incluyendo mejor película y mejor director para Coppola.",
    duracion: "2h 27min",
    actores: ["Marlon Brando", "Robert Duvall", "Martin Sheen", "Frederic Forrest"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$31,500,000",
    recaudacion: "$150,000,000"
  },
  {
    titulo: "Ratatouille",
    director: "Brad Bird",
    genero: "Animación",
    anio: 2007,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 4,
    descripcion: "Ratatouille es una película estadounidense de 2007 del género comedia animada producida por Pixar Animation Studios y distribuida por Walt Disney Pictures. La película está protagonizada por Patton Oswalt como Remy, una rata que sueña con convertirse en un chef francés y que tiene una habilidad inusual para el gusto, que le da la oportunidad de cumplir su sueño. La película fue un éxito de taquilla, recaudando más de 620 millones de dólares en todo el mundo, y fue la película animada más taquillera de 2007. Ratatouille fue bien recibida por la crítica, que elogió la dirección, la actuación, la historia, la partitura musical, los efectos visuales y la fotografía. La película ganó el Óscar a la mejor película animada y fue nominada a otras cuatro categorías, incluyendo mejor película, siendo la segunda película animada en ser nominada a mejor película, después de La bella y la bestia en 1991.",
    duracion: "1h 51min",
    actores: ["Patton Oswalt", "Ian Holm", "Lou Romano", "Brian Dennehy"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$150,000,000",
    recaudacion: "$620,702,951"
  },
  {
    titulo: "El bueno, el malo y el feo",
    director: "Sergio Leone",
    genero: "Western",
    anio: 1966,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 5,
    descripcion: "El bueno, el feo y el malo es una película italo-hispano-alemana de 1966 del género western dirigida por Sergio Leone y protagonizada por Clint Eastwood, Lee Van Cleef y Eli Wallach en los papeles principales. La película está ambientada durante la Guerra Civil estadounidense y sigue a tres pistoleros que compiten por encontrar un tesoro de oro enterrado. La película fue un éxito de taquilla, recaudando más de 25 millones de dólares en todo el mundo, y fue la película más taquillera de Italia en 1966. El bueno, el feo y el malo fue bien recibida por la crítica, que elogió la dirección, la actuación, la historia, la partitura musical, los efectos visuales y la fotografía. La película ganó el premio David de Donatello a la mejor película extranjera y fue nominada a otros dos premios, incluyendo mejor director para Leone.",
    duracion: "2h 58min",
    actores: ["Clint Eastwood", "Lee Van Cleef", "Eli Wallach", "Aldo Giuffrè"],
    pais: "Italia",
    idioma: "Inglés",
    presupuesto: "$1,200,000",
    recaudacion: "$25,100,000"
  },
  {
    titulo: "La lista de Schindler",
    director: "Steven Spielberg",
    genero: "Drama",
    anio: 1993,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 5,
    descripcion: "La lista de Schindler es una película estadounidense de 1993 del género drama histórico dirigida y producida por Steven Spielberg y escrita por Steven Zaillian. La película está protagonizada por Liam Neeson como Oskar Schindler, un empresario alemán que salvó la vida de más de mil judíos polacos durante el Holocausto al emplearlos en sus fábricas. La película fue un éxito de taquilla, recaudando más de 321 millones de dólares en todo el mundo, y fue la película más taquillera de 1993. La lista de Schindler fue bien recibida por la crítica, que elogió la dirección, la actuación, la historia, la partitura musical, los efectos visuales y la fotografía. La película ganó siete premios Óscar, incluyendo mejor película, mejor director y mejor guion adaptado, y fue nominada a otras cinco categorías, incluyendo mejor actor para Neeson.",
    duracion: "3h 15min",
    actores: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Caroline Goodall"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$22,000,000",
    recaudacion: "$321,306,305"
  },
  {
    titulo: "Blade Runner",
    director: "Ridley Scott",
    genero: "Ciencia ficción",
    anio: 1982,
    portada_vertical: "https://placehold.co/300x450",
    portada_horizontal: "https://placehold.co/360x200",
    calificacion: 4,
    descripcion: "Blade Runner es una película estadounidense de 1982 del género ciencia ficción neo-noir dirigida por Ridley Scott y protagonizada por Harrison Ford, Rutger Hauer, Sean Young y Edward James Olmos. La película está ambientada en un futuro distópico de 2019 en el que un fabricante de androides llamado replicantes escapa de su colonia en Marte y llega a la Tierra, donde un oficial de policía es encargado de cazarlos. La película fue un fracaso de taquilla, recaudando solo 33 millones de dólares en todo el mundo, y fue la película más taquillera de 1982. Blade Runner fue bien recibida por la crítica, que elogió la dirección, la actuación, la historia, la partitura musical, los efectos visuales y la fotografía. La película ganó el premio BAFTA a los mejores efectos visuales y fue nominada a otros dos premios, incluyendo mejor diseño de producción.",
    duracion: "1h 57min",
    actores: ["Harrison Ford", "Rutger Hauer", "Sean Young", "Edward James Olmos"],
    pais: "Estados Unidos",
    idioma: "Inglés",
    presupuesto: "$28,000,000",
    recaudacion: "$33,139,618"
  }
  // ... Aquí van las demás películas
];


const peliculasContainer = document.querySelector('.peliculas');
const toggleButton = document.querySelector('.toggle-button');
let portadaVertical = localStorage.getItem('portadaVertical') === 'true';

peliculas.forEach(pelicula => {
  const peliculaElement = document.createElement('div');
  peliculaElement.classList.add('pelicula');

  const imagenElement = document.createElement('img');
  imagenElement.src = pelicula.portada_horizontal;
  imagenElement.alt = pelicula.titulo;

  const tituloElement = document.createElement('h2');
  tituloElement.textContent = pelicula.titulo;

  const datosElement = document.createElement('div');
  datosElement.classList.add('datos');

  // colocar titulo al elemento de datos

  const tituloDatosElement = document.createElement('h3');
  tituloDatosElement.textContent = pelicula.titulo;
  datosElement.appendChild(tituloDatosElement);

  const directorElement = document.createElement('div');
  directorElement.classList.add('dato');
  directorElement.innerHTML = `<span class="etiqueta director">Director:</span> ${pelicula.director}`;

  const generoElement = document.createElement('div');
  generoElement.classList.add('dato');
  generoElement.innerHTML = `<span class="etiqueta genero">Género:</span> ${pelicula.genero}`;

  const anioElement = document.createElement('div');
  anioElement.classList.add('dato');
  anioElement.innerHTML = `<span class="etiqueta year">Año:</span> ${pelicula.anio}`;

  const descripcionElement = document.createElement('p');
  descripcionElement.classList.add('descripcion');
  descripcionElement.textContent = pelicula.descripcion;

  const duracionElement = document.createElement('div');
  duracionElement.classList.add('dato');
  duracionElement.innerHTML = `<span class="etiqueta">Duración:</span> ${pelicula.duracion}`;

  const actoresElement = document.createElement('div');
  actoresElement.classList.add('dato');
  actoresElement.innerHTML = `<span class="etiqueta">Actores:</span> ${pelicula.actores.join(", ")}`;

  const infoAdicionalElement = document.createElement('div');
  infoAdicionalElement.classList.add('info-adicional');

  const paisElement = document.createElement('div');
  paisElement.classList.add('item');
  paisElement.innerHTML = `<span>País:</span> ${pelicula.pais}`;

  const idiomaElement = document.createElement('div');
  idiomaElement.classList.add('item');
  idiomaElement.innerHTML = `<span>Idioma:</span> ${pelicula.idioma}`;

  infoAdicionalElement.appendChild(paisElement);
  infoAdicionalElement.appendChild(idiomaElement);

  datosElement.appendChild(directorElement);
  datosElement.appendChild(generoElement);
  datosElement.appendChild(anioElement);
  datosElement.appendChild(descripcionElement);
  datosElement.appendChild(duracionElement);
  datosElement.appendChild(actoresElement);
  datosElement.appendChild(infoAdicionalElement);

  peliculaElement.appendChild(imagenElement);
  peliculaElement.appendChild(tituloElement);
  peliculaElement.appendChild(datosElement);

  peliculasContainer.appendChild(peliculaElement);
});




function togglePortada() {
  portadaVertical = !portadaVertical;
  const peliculaElements = peliculasContainer.querySelectorAll('.pelicula');
  peliculaElements.forEach((peliculaElement) => {
    const imagenElement = peliculaElement.querySelector('img');
    const pelicula = peliculas.find((p) => p.titulo === peliculaElement.querySelector('h2').textContent);
    if (portadaVertical) {
      imagenElement.src = pelicula.portada_vertical;
      imagenElement.classList.add('vertical');
      imagenElement.classList.remove('horizontal');
      peliculasContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(170px, 1fr))';
    } else {
      imagenElement.src = pelicula.portada_horizontal;
      imagenElement.classList.add('horizontal');
      imagenElement.classList.remove('vertical');
      peliculasContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    }
  });
  localStorage.setItem('portadaVertical', portadaVertical);
}

window.addEventListener('load', () => {
  const peliculaElements = peliculasContainer.querySelectorAll('.pelicula');
  peliculaElements.forEach((peliculaElement) => {
    const imagenElement = peliculaElement.querySelector('img');
    const pelicula = peliculas.find((p) => p.titulo === peliculaElement.querySelector('h2').textContent);
    if (portadaVertical) {
      imagenElement.src = pelicula.portada_vertical;
      imagenElement.classList.add('vertical');
      imagenElement.classList.remove('horizontal');
      peliculasContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(170px, 1fr))';
    } else {
      imagenElement.src = pelicula.portada_horizontal;
      imagenElement.classList.add('horizontal');
      imagenElement.classList.remove('vertical');
      peliculasContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    }
  });
});

/*
const peliculasContainer = document.querySelector('.peliculas');
const toggleButton = document.querySelector('.toggle-button');
let portadaVertical = localStorage.getItem('portadaVertical') === 'true';

function togglePortada() {
  portadaVertical = !portadaVertical;
  const peliculaElements = peliculasContainer.querySelectorAll('.pelicula');
  peliculaElements.forEach((peliculaElement) => {
    const imagenElement = peliculaElement.querySelector('img');
    const pelicula = peliculas.find((p) => p.titulo === peliculaElement.querySelector('h2').textContent);
    if (portadaVertical) {
      imagenElement.src = pelicula.portada_vertical;
      imagenElement.classList.add('vertical');
      imagenElement.classList.remove('horizontal');
    } else {
      imagenElement.src = pelicula.portada_horizontal;
      imagenElement.classList.add('horizontal');
      imagenElement.classList.remove('vertical');
    }
  });
  localStorage.setItem('portadaVertical', portadaVertical);
}

window.addEventListener('load', () => {
  const peliculaElements = peliculasContainer.querySelectorAll('.pelicula');
  peliculaElements.forEach((peliculaElement) => {
    const imagenElement = peliculaElement.querySelector('img');
    const pelicula = peliculas.find((p) => p.titulo === peliculaElement.querySelector('h2').textContent);
    if (portadaVertical) {
      imagenElement.src = pelicula.portada_vertical;
      imagenElement.classList.add('vertical');
      imagenElement.classList.remove('horizontal');
    } else {
      imagenElement.src = pelicula.portada_horizontal;
      imagenElement.classList.add('horizontal');
      imagenElement.classList.remove('vertical');
    }
  });
});
*/