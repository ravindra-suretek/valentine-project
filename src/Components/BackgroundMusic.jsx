import song from "../assets/song.mp3";

let audio = null;

export default function BackgroundMusic() {
  if (!audio) {
    audio = new Audio(song);
    audio.loop = true;
    audio.volume = 0.35;
  }

  audio.play().catch(() => {});
}
