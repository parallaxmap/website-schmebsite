const username = "scuttlerpod";

const displayElement = document.getElementById("now-playing");

displayElement.href = `https://listenbrainz.org/user/${username}/`;
displayElement.dataset.username = username;

const endpoints = {
	nowPlaying: `https://api.listenbrainz.org/1/user/${username}/playing-now`,
	recentTrack: `https://api.listenbrainz.org/1/user/${username}/listens?count=1`,
};

async function fetchJson(url) {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
	return response.json();
}

function renderTrack(statusLabel, track) {
	const artist = track?.artist_name || "unknown artist";
	const title = track?.track_name || "unknown track";
	displayElement.textContent = `${artist} – ${title}`;
}

async function updateNowPlayingWidget() {
	try {
		const nowPlayingData = await fetchJson(endpoints.nowPlaying);
		const playingNow = nowPlayingData?.payload?.playing_now;
		const currentTrack = nowPlayingData?.payload?.listens?.[0]?.track_metadata;

		if (playingNow && currentTrack) {
			renderTrack("(now playing)", currentTrack);
			return;
		}

		const recentData = await fetchJson(endpoints.recentTrack);
		const recentTrack = recentData?.payload?.listens?.[0]?.track_metadata;

		if (recentTrack) {
			renderTrack("(last played)", recentTrack);
		}
	}

	catch (error) {
	console.error("failed to update listenbrainz widget: ", error);
	displayElement.textContent = "you will never know.";
	}
}

updateNowPlayingWidget();
setInterval(updateNowPlayingWidget, 60000);