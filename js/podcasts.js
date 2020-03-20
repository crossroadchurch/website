let podcasts = {};

function initPodcasts() {
  Tabletop.init({
    key:
      "https://docs.google.com/spreadsheets/d/1-m5TI8lC1vT4nVl3WlYiQOpfw4r_GjO_TTUOfwqRIrs/edit?usp=sharing",
    simpleSheet: false
  }).then(function(data, tabletop) {
    const sundays = data.Podcasts.elements
      .filter(podcast => podcast.Category === "sunday")
      .sort((a, b) => (a.Date < b.Date ? 1 : -1))
      .map(entry => {
        return {
          title: entry.Title,
          artist: entry.Artist,
          mp3: entry.File,
          free: true,
          date: entry.Date,
          poster: `./posters/${entry.Poster}`
        };
      });
    const numberone = data.Podcasts.elements
      .filter(podcast => podcast.Category === "numberone")
      .sort((a, b) => (a.Date < b.Date ? 1 : -1))
      .map(entry => {
        return {
          title: entry.Title,
          artist: entry.Artist,
          mp3: entry.File,
          free: true,
          date: entry.Date,
          poster: `./posters/${entry.Poster}`
        };
      });
    const specials = data.Podcasts.elements
      .filter(podcast => podcast.Category === "specials")
      .sort((a, b) => (a.Date < b.Date ? 1 : -1))
      .map(entry => {
        return {
          title: entry.Title,
          artist: entry.Artist,
          mp3: entry.File,
          free: true,
          date: entry.Date,
          poster: `./posters/${entry.Poster}`
        };
      });
    podcasts["sundays"] = sundays;
    podcasts["numberone"] = numberone;
    podcasts["specials"] = specials;
    loadPlaylist("sundays");
  });
}
