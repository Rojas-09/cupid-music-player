import { useEffect, useRef } from 'react';

const FALLBACK_ARTWORK = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">' +
  '<rect width="512" height="512" fill="#5a3a4a"/>' +
  '<circle cx="256" cy="256" r="180" fill="#8a6a7a"/>' +
  '<text x="256" y="290" text-anchor="middle" font-size="180" fill="white" font-family="serif">♫</text>' +
  '</svg>'
);

export default function useMediaSession({ track, isPlaying, togglePlay, next, prev }) {
  const togglePlayRef = useRef(togglePlay);
  togglePlayRef.current = togglePlay;
  const nextRef = useRef(next);
  nextRef.current = next;
  const prevRef = useRef(prev);
  prevRef.current = prev;

  useEffect(() => {
    if (!('mediaSession' in navigator)) return;

    navigator.mediaSession.setActionHandler('play', () => togglePlayRef.current());
    navigator.mediaSession.setActionHandler('pause', () => togglePlayRef.current());
    navigator.mediaSession.setActionHandler('previoustrack', () => prevRef.current());
    navigator.mediaSession.setActionHandler('nexttrack', () => nextRef.current());

    return () => {
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
    };
  }, []);

  useEffect(() => {
    if (!('mediaSession' in navigator)) return;
    if (!track || track.title === 'No track') return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist || '',
      album: '',
      artwork: [{ src: track.art || FALLBACK_ARTWORK, sizes: '512x512' }],
    });
  }, [track?.title, track?.artist, track?.art]);

  useEffect(() => {
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
  }, [isPlaying]);
}
