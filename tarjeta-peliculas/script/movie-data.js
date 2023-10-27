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
        id: "forrest-gump",
        title: "Forrest Gump",
        rating: 8.8,
        year: 1994,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 22min",
            minutes: "142min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        genre: ["Drama", "Romance"],
        plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        language: "English",
        country: "United States"
    },
    {
        id: "pulp-fiction",
        title: "Pulp Fiction",
        rating: 8.9,
        year: 1994,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 34min",
            minutes: "154min",
            extension: "MP4",
            format: "HDrip"
        },
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        genre: ["Crime", "Drama"],
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        language: "English",
        country: "United States"
    },
    {
        id: "the-silence-of-the-lambs",
        title: "The Silence of the Lambs",
        rating: 8.6,
        year: 1991,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "1h 58min",
            minutes: "118min",
            extension: "MP4",
            format: "DVDRip"
        },
        director: "Jonathan Demme",
        cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
        genre: ["Crime", "Drama", "Thriller"],
        plot: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        language: "English",
        country: "United States"
    },
    {
        id: "the-batman",
        title: "The Batman",
        rating: 8.7,
        year: 2022,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 55min",
            minutes: "175min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Matt Reeves",
        cast: ["Robert Pattinson", "Zoë Kravitz", "Colin Farrell"],
        genre: ["Action", "Crime", "Drama"],
        plot: "Two years of nights have turned Bruce Wayne into a nocturnal animal. Alfred Pennyworth waits in Wayne Manor, ready to receive his master.",
        language: "English",
        country: "United States"
    },
    {
        id: "spider-man-into-the-spider-verse",
        title: "Spider-Man: Into the Spider-Verse",
        rating: 8.4,
        year: 2018,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "1h 57min",
            minutes: "117min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
        genre: ["Animation", "Action", "Adventure"],
        plot: "Phil Lord and Christopher Miller, the creative minds behind The Lego Movie and 21 Jump Street, bring their unique talents to a fresh vision of a different Spider-Man Universe,",
        language: "English",
        country: "United States"
    },
    {
        id: "the-truman-show",
        title: "The Truman Show",
        rating: 8.1,
        year: 1998,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/vuza0WqY239yBXOadKlGwJsZJFE.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "1h 43min",
            minutes: "103min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Peter Weir",
        cast: ["Jim Carrey", "Ed Harris", "Laura Linney"],
        genre: ["Comedy", "Drama", "Sci-Fi"],
        plot: "An insurance salesman discovers his whole life is actually a reality TV show.",
        language: "English",
        country: "United States"
    },
    {
        id: "the-green-mile",
        title: "The Green Mile",
        rating: 8.6,
        year: 1999,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "3h 9min",
            minutes: "189min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Frank Darabont",
        cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
        genre: ["Crime", "Drama", "Fantasy"],
        plot: "Based on Stephen King's 1996 novel of the same name. Stars Tom Hanks as a death row corrections officer during the U.S. Great Depression who witnesses supernatural events that occur after an enigmatic inmate (Michael Clarke Duncan) is brought to his facility.",
        language: "English",
        country: "United States"
    },
    {
        id: "jojo-rabbit",
        title: "Jo Jo Rabbit",
        rating: 7.9,
        year: 2019,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "1h 48min",
            minutes: "108min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Taika Waititi",
        cast: ["Roman Griffin Davis", "Thomasin McKenzie", "Scarlett Johansson"],
        genre: ["Comedy", "Drama", "War"],
        plot: "A World War II satire that follows a lonely German boy named Jojo (Roman Griffin Davis) whose world view is turned upside down when he discovers his single mother (Scarlett Johansson) is hiding a young Jewish girl (Thomasin McKenzie) in their attic.",
        language: "English",
        country: "United States"
    },
    {
        id: "american-psycho",
        title: "American Psycho",
        rating: 7.6,
        year: 2000,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "1h 42min",
            minutes: "102min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Mary Harron",
        cast: ["Christian Bale", "Justin Theroux", "Josh Lucas"],
        genre: ["Comedy", "Crime", "Drama"],
        plot: "Patrick Bateman (Christian Bale) is a Wall Street yuppie, obsessed with success, status and style, with a stunning fiancée (Reese Witherspoon). He is also a psychotic killer who rapes, murders and dismembers both strangers and acquaintances without provocation or purpose.",
        language: "English",
        country: "United States"
    },
    {
        id: "jhon-wick",
        title: "Jhon Wick",
        rating: 7.4,
        year: 2014,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "1h 41min",
            minutes: "101min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Chad Stahelski, David Leitch",
        cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
        genre: ["Action", "Crime", "Thriller"],
        plot: "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
        language: "English",
        country: "United States"
    },
    {
        id: "deadpool",
        title: "Deadpool",
        rating: 8,
        year: 2016,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "1h 48min",
            minutes: "108min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Tim Miller",
        cast: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"],
        genre: ["Action", "Adventure", "Comedy"],
        plot: "This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool.",
        language: "English",
        country: "United States"
    },
    {
        id: "the-wolf-of-wall-street",
        title: "The Wolf of Wall Street",
        rating: 8.2,
        year: 2013,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "3h",
            minutes: "180min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Martin Scorsese",
        cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
        genre: ["Biography", "Crime", "Drama"],
        plot: "In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratton Oakmont. Their company quickly grows from a staff of 20 to a staff of more than 250 and their status in the trading community and Wall Street grows exponentially. So much that companies file their initial public offerings through them. As their status grows, so do the amount of substances they abuse, and so do their lies. They draw attention like no other, throwing lavish parties for their staff when they hit the jackpot on high trades. That ultimately leads to Belfort featured on the cover of Forbes Magazine, being called \"The Wolf Of Wall St.\". With the FBI onto Belfort's trading schemes, he devises new ways to cover his tracks and watch his fortune grow. Belfort ultimately comes up with a scheme to stash their cash in a European bank. But with the FBI watching him like a hawk, how long will Belfort and Azoff be able to maintain their elaborate wealth and luxurious lifestyles?",
        language: "English",
        country: "United States"
    },
    {
        id: "shrek",
        title: "Shrek",
        rating: 7.8,
        year: 2001,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/dyhaB19AICF7TO7CK2aD6KfymnQ.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "1h 30min",
            minutes: "90min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Andrew Adamson, Vicky Jenson",
        cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
        genre: ["Animation", "Adventure", "Comedy"],
        plot: "When a green ogre named Shrek discovers his swamp has been 'swamped' with all sorts of fairytale creatures by the scheming Lord Farquaad, Shrek sets out with a very loud donkey by his side to 'persuade' Farquaad to give Shrek his swamp back. Instead, a deal is made. Farquaad, who wants to become the King, sends Shrek to rescue Princess Fiona, who is awaiting her true love in a tower guarded by a fire-breathing dragon. But once they head back with Fiona, it starts to become apparent that not only does Shrek, an ugly ogre, begin to fall in love with the lovely princess, but Fiona is also hiding a huge secret.",
        language: "English",
        country: "United States"
    },
    {
        id: "avatar",
        title: "Avatar",
        rating: 7.8,
        year: 2009,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 42min",
            minutes: "162min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        genre: ["Action", "Adventure", "Fantasy"],
        plot: "When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridge's intentions of driving off the native humanoid \"Na'vi\" in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers intel for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na'vi people with the use of an \"avatar\" identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.",
        language: "English",
        country: "United States"
    },
    {
        id: "the-avengers-infinity-war",
        title: "The Avengers: Infinity War",
        rating: 8.4,
        year: 2018,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 29min",
            minutes: "149min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Anthony Russo, Joe Russo",
        cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
        genre: ["Action", "Adventure", "Sci-Fi"],
        plot: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        language: "English",
        country: "United States"
    },
    {
        id: "dune",
        title: "Dune",
        rating: 8.3,
        year: 2021,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 35min",
            minutes: "155min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Denis Villeneuve",
        cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"],
        genre: ["Action", "Adventure", "Drama"],
        plot: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
        language: "English",
        country: "United States"
    },


    // Add more movies here
];

// Array de favoritos
const favorites = [];

// Array de películas vistas
const watched = [];

// Crear tarjetas de películas
movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";

    const movieImage = document.createElement("div");
    movieImage.className = "movie-image";

    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;

    movieImage.appendChild(img);
    movieCard.appendChild(movieImage);

    const favorite = document.createElement("div");
    favorite.className = "favorite";
    const favoriteIcon = document.createElement("i");
    favoriteIcon.className = "bx bx-heart";
    favorite.appendChild(favoriteIcon);
    movieCard.appendChild(favorite);

    const watchedButton = document.createElement("div");
    watchedButton.className = "watched";
    const watchedIcon = document.createElement("i");
    watchedIcon.className = "bx bx-show";
    watchedButton.appendChild(watchedIcon);
    movieCard.appendChild(watchedButton);

    const rating = document.createElement("div");
    rating.className = "rating";
    const ratingIcon = document.createElement("i");
    ratingIcon.className = "bx bx-star";
    const ratingText = document.createElement("span");
    ratingText.textContent = movie.rating;
    rating.appendChild(ratingIcon);
    rating.appendChild(ratingText);
    movieCard.appendChild(rating);

    const year = document.createElement("div");
    year.className = "year";
    const yearText = document.createElement("span");
    yearText.textContent = movie.year;
    year.appendChild(yearText);
    movieCard.appendChild(year);

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    movieCard.appendChild(overlay);

    const movieDetails = document.createElement("div");
    movieDetails.className = "movie-details";

    const title = document.createElement("div");
    title.className = "title";
    const titleText = document.createElement("h2");
    titleText.textContent = movie.title;
    title.appendChild(titleText);

    const quality = document.createElement("div");
    quality.textContent = movie.download.quality;
    quality.className = "quality";

    const resolution = document.createElement("div");
    resolution.textContent = movie.download.resolution;
    resolution.className = "resolution";

    const minutes = document.createElement("div");
    minutes.textContent = movie.download.minutes;
    minutes.className = "minutes";

    const downloadLink = document.createElement("div");
    downloadLink.className = "download";
    const downloadIcon = document.createElement("i");
    downloadIcon.className = "bx bxs-magnet";
    const downloadText = document.createElement("a");
    downloadLink.appendChild(downloadIcon);
    downloadLink.appendChild(downloadText);

    const format = document.createElement("div");
    format.textContent = movie.download.format;
    format.className = "format";

    movieDetails.appendChild(title);
    movieDetails.appendChild(quality);
    movieDetails.appendChild(resolution);
    movieDetails.appendChild(minutes);
    movieDetails.appendChild(downloadLink);
    movieDetails.appendChild(format);
    movieCard.appendChild(movieDetails);

    document.querySelector(".container-movies").appendChild(movieCard);

    // Agregar evento de clic a la tarjeta
    movieCard.addEventListener("click", () => {
        // Redirigir a la página de la película
        const movieTitle = encodeURIComponent(movie.id);
        window.location.href = `./movie.html?movie=${movieTitle}`;
    });
});

// Añadir evento de clic para favoritos
document.querySelectorAll(".favorite").forEach(favorite => {
    favorite.addEventListener("click", event => {
        const icon = event.currentTarget.querySelector("i");
        const movieCard = event.currentTarget.closest(".movie-card");
        const index = favorites.indexOf(movieCard);
        if (index === -1) {
            favorites.push(movieCard);
            icon.classList.remove("bx-heart");
            icon.classList.add("bxs-heart");
            icon.style.color = "red";
        } else {
            favorites.splice(index, 1);
            icon.classList.remove("bxs-heart");
            icon.classList.add("bx-heart");
            icon.style.color = "";
        }
    });
});

// Añadir evento de clic para películas vistas
document.querySelectorAll(".watched").forEach(watchedButton => {
    watchedButton.addEventListener("click", event => {
        const icon = event.currentTarget.querySelector("i");
        const movieCard = event.currentTarget.closest(".movie-card");
        const index = watched.indexOf(movieCard);
        if (index === -1) {
            watched.push(movieCard);
            icon.classList.remove("bx-show");
            icon.classList.add("bxs-show");
            icon.style.color = "#0974f1";
        } else {
            watched.splice(index, 1);
            icon.classList.remove("bxs-show");
            icon.classList.add("bx-show");
            icon.style.color = "";
        }
    });
});