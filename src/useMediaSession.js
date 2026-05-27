import { useEffect, useRef } from 'react';

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
      artwork: track.art
        ? [{ src: track.art, sizes: '512x512' }]
        : [],
    });
  }, [track?.title, track?.artist, track?.art]);

  useEffect(() => {
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
  }, [isPlaying]);
}
