module.exports = async function (Activity) {
  const title = document.querySelector("track-page-player-title-name text-truncate")?.innerText;
  const artist = document.querySelector("user.feed({ username: data.creatorUsername.value, triggeredFrom: 'track_page' })")?.innerText;

  Activity.set({
    details: `Listening to ${title || "a track"}`,
    state: `By ${artist || "an artist"}`,
    assets: {
      large_image: "bandlab",
      large_text: "BandLab",
    }
  });
};
