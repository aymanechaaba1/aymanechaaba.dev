function MusicPlayer({ songs, user }) {
  const title = songs[0].desc;
  const items = Array.from(songs).unshift(2, 0, makeSong(user));
}
