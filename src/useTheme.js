import { useState, useCallback, useMemo } from 'react';

// ── Pink theme assets ────────────────────────────────────
import pinkFrame from '../assets/pink/frame.png';
import pinkFrameNoBg from '../assets/pink/frame_no_background.png';
import pinkPlant from '../assets/pink/plant.png';
import pinkRecordPlayer from '../assets/pink/record_player.png';
import pinkAlbumFrame from '../assets/pink/album_frame.png';
import pinkBackwardsButton from '../assets/pink/backwards_button.png';
import pinkPauseButton from '../assets/pink/pause_button.png';
import pinkPlayButton from '../assets/pink/play_button.png';
import pinkForwardsButton from '../assets/pink/forwards_button.png';
import pinkExitButton from '../assets/pink/exit_button.png';
import pinkMinimizerButton from '../assets/pink/minimizer_button.png';
import pinkWindowButton from '../assets/pink/window_button.png';
import pinkFavicon from '../assets/pink/favicon.png';
import pinkProgressBar from '../assets/pink/progress_bar.png';
import pinkSettings from '../assets/pink/settings.png';
import pinkVolumeButton from '../assets/pink/volume_button.png';
import pinkMuteButton from '../assets/pink/mute_button.png';
import pinkShuffleButton from '../assets/pink/shuffle_button.png';
import pinkRepeatButton from '../assets/pink/repeat_button.png';
import pinkVolumeBarHigh from '../assets/pink/volume_bar_high.png';
import pinkVolumeBarLow from '../assets/pink/volume_bar_low.png';

// ── Shared record animations ────────────────────────────
import recordA1 from '../assets/animations/record-pink/frame-1.png';
import recordA2 from '../assets/animations/record-pink/frame-2.png';
import recordA3 from '../assets/animations/record-pink/frame-3.png';
import recordA4 from '../assets/animations/record-pink/frame-4.png';
import recordB1 from '../assets/animations/record-blue/frame-1.png';
import recordB2 from '../assets/animations/record-blue/frame-2.png';
import recordB3 from '../assets/animations/record-blue/frame-3.png';
import recordB4 from '../assets/animations/record-blue/frame-4.png';

// ── Pink needle animations ──────────────────────────────
import pinkNeedlePlay1 from '../assets/animations/pink/needle-playing/frame-1.png';
import pinkNeedlePlay2 from '../assets/animations/pink/needle-playing/frame-2.png';
import pinkNeedlePlay3 from '../assets/animations/pink/needle-playing/frame-3.png';
import pinkNeedleChange1 from '../assets/animations/pink/needle-change/frame-1.png';
import pinkNeedleChange2 from '../assets/animations/pink/needle-change/frame-2.png';
import pinkNeedleChange3 from '../assets/animations/pink/needle-change/frame-3.png';

// ── Blue needle animations ──────────────────────────────
import blueNeedlePlay1 from '../assets/animations/blue/needle-playing/frame-1.png';
import blueNeedlePlay2 from '../assets/animations/blue/needle-playing/frame-2.png';
import blueNeedlePlay3 from '../assets/animations/blue/needle-playing/frame-3.png';
import blueNeedleChange1 from '../assets/animations/blue/needle-change/frame-1.png';
import blueNeedleChange2 from '../assets/animations/blue/needle-change/frame-2.png';
import blueNeedleChange3 from '../assets/animations/blue/needle-change/frame-3.png';

const SHARED_RECORD_FRAMES = {
  recordFramesA: [recordA1, recordA2, recordA3, recordA4],
  recordFramesB: [recordB1, recordB2, recordB3, recordB4],
};

// ── Blue theme assets ────────────────────────────────────
import blueFrame from '../assets/blue/frame.png';
import blueFrameNoBg from '../assets/blue/frame_no_background.png';
import bluePlant from '../assets/blue/plant.png';
import blueRecordPlayer from '../assets/blue/record_player.png';
import blueAlbumFrame from '../assets/blue/album_frame.png';
import blueBackwardsButton from '../assets/blue/backwards_button.png';
import bluePauseButton from '../assets/blue/pause_button.png';
import bluePlayButton from '../assets/blue/play_button.png';
import blueForwardsButton from '../assets/blue/forwards_button.png';
import blueExitButton from '../assets/blue/exit_button.png';
import blueMinimizerButton from '../assets/blue/minimizer_button.png';
import blueWindowButton from '../assets/blue/window_button.png';
import blueFavicon from '../assets/blue/favicon.png';
import blueProgressBar from '../assets/blue/progress_bar.png';
import blueSettings from '../assets/blue/settings.png';
import blueVolumeButton from '../assets/blue/volume_button.png';
import blueMuteButton from '../assets/blue/mute_button.png';
import blueShuffleButton from '../assets/blue/shuffle_button.png';
import blueRepeatButton from '../assets/blue/repeat_button.png';
import blueVolumeBarHigh from '../assets/blue/volume_bar_high.png';
import blueVolumeBarLow from '../assets/blue/volume_bar_low.png';

// ── Men theme assets ─────────────────────────────────────
import menFrame from '../assets/men/frame.png';
import menFrameNoBg from '../assets/men/frame_no_background.png';
import menPlant from '../assets/men/plant.png';
import menRecordPlayer from '../assets/men/record_player.png';
import menAlbumFrame from '../assets/men/album_frame.png';
import menBackwardsButton from '../assets/men/backwards_button.png';
import menPauseButton from '../assets/men/pause_button.png';
import menPlayButton from '../assets/men/play_button.png';
import menForwardsButton from '../assets/men/forwards_button.png';
import menExitButton from '../assets/men/exit_button.png';
import menMinimizerButton from '../assets/men/minimizer_button.png';
import menWindowButton from '../assets/men/window_button.png';
import menFavicon from '../assets/men/favicon.png';
import menProgressBar from '../assets/men/progress_bar.png';
import menSettings from '../assets/men/settings.png';
import menVolumeButton from '../assets/men/volume_button.png';
import menMuteButton from '../assets/men/mute_button.png';
import menShuffleButton from '../assets/men/shuffle_button.png';
import menRepeatButton from '../assets/men/repeat_button.png';
import menVolumeBarHigh from '../assets/men/volume_bar_high.png';
import menVolumeBarLow from '../assets/men/volume_bar_low.png';

// ── Men needle animations ────────────────────────────────
// Use blue needle frames initially (user can replace later)
import menNeedlePlay1 from '../assets/animations/blue/needle-playing/frame-1.png';
import menNeedlePlay2 from '../assets/animations/blue/needle-playing/frame-2.png';
import menNeedlePlay3 from '../assets/animations/blue/needle-playing/frame-3.png';
import menNeedleChange1 from '../assets/animations/blue/needle-change/frame-1.png';
import menNeedleChange2 from '../assets/animations/blue/needle-change/frame-2.png';
import menNeedleChange3 from '../assets/animations/blue/needle-change/frame-3.png';

const THEME_ASSETS = {
  pink: {
    frame: pinkFrame,
    frameNoBg: pinkFrameNoBg,
    plant: pinkPlant,
    recordPlayer: pinkRecordPlayer,
    albumFrame: pinkAlbumFrame,
    backwardsButton: pinkBackwardsButton,
    pauseButton: pinkPauseButton,
    playButton: pinkPlayButton,
    forwardsButton: pinkForwardsButton,
    exitButton: pinkExitButton,
    minimizerButton: pinkMinimizerButton,
    windowButton: pinkWindowButton,
    favicon: pinkFavicon,
    progressBar: pinkProgressBar,
    settings: pinkSettings,
    volumeButton: pinkVolumeButton,
    muteButton: pinkMuteButton,
    shuffleButton: pinkShuffleButton,
    repeatButton: pinkRepeatButton,
    volumeBarHigh: pinkVolumeBarHigh,
    volumeBarLow: pinkVolumeBarLow,
    ...SHARED_RECORD_FRAMES,
    needlePlayFrames: [pinkNeedlePlay1, pinkNeedlePlay2, pinkNeedlePlay3],
    needleChangeFrames: [pinkNeedleChange1, pinkNeedleChange2, pinkNeedleChange3],
  },
  blue: {
    frame: blueFrame,
    frameNoBg: blueFrameNoBg,
    plant: bluePlant,
    recordPlayer: blueRecordPlayer,
    albumFrame: blueAlbumFrame,
    backwardsButton: blueBackwardsButton,
    pauseButton: bluePauseButton,
    playButton: bluePlayButton,
    forwardsButton: blueForwardsButton,
    exitButton: blueExitButton,
    minimizerButton: blueMinimizerButton,
    windowButton: blueWindowButton,
    favicon: blueFavicon,
    progressBar: blueProgressBar,
    settings: blueSettings,
    volumeButton: blueVolumeButton,
    muteButton: blueMuteButton,
    shuffleButton: blueShuffleButton,
    repeatButton: blueRepeatButton,
    volumeBarHigh: blueVolumeBarHigh,
    volumeBarLow: blueVolumeBarLow,
    ...SHARED_RECORD_FRAMES,
    needlePlayFrames: [blueNeedlePlay1, blueNeedlePlay2, blueNeedlePlay3],
    needleChangeFrames: [blueNeedleChange1, blueNeedleChange2, blueNeedleChange3],
  },
  men: {
    frame: menFrame,
    frameNoBg: menFrameNoBg,
    plant: menPlant,
    recordPlayer: menRecordPlayer,
    albumFrame: menAlbumFrame,
    backwardsButton: menBackwardsButton,
    pauseButton: menPauseButton,
    playButton: menPlayButton,
    forwardsButton: menForwardsButton,
    exitButton: menExitButton,
    minimizerButton: menMinimizerButton,
    windowButton: menWindowButton,
    favicon: menFavicon,
    progressBar: menProgressBar,
    settings: menSettings,
    volumeButton: menVolumeButton,
    muteButton: menMuteButton,
    shuffleButton: menShuffleButton,
    repeatButton: menRepeatButton,
    volumeBarHigh: menVolumeBarHigh,
    volumeBarLow: menVolumeBarLow,
    ...SHARED_RECORD_FRAMES,
    needlePlayFrames: [menNeedlePlay1, menNeedlePlay2, menNeedlePlay3],
    needleChangeFrames: [menNeedleChange1, menNeedleChange2, menNeedleChange3],
  },
};

const STORAGE_KEY = 'cupid-player-theme';

const THEMES = ['pink', 'blue', 'men'];

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (THEMES.includes(stored)) return stored;
  } catch {
    // localStorage unavailable
  }
  return 'pink';
}

/**
 * Theme hook — stores preference in localStorage and provides
 * the correct asset set for the active theme.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const idx = THEMES.indexOf(prev);
      const next = THEMES[(idx + 1) % THEMES.length];
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      window.cupid?.setTheme(next);
      return next;
    });
  }, []);

  const setThemeDirect = useCallback((name) => {
    if (!THEMES.includes(name)) return;
    setTheme(name);
    try {
      localStorage.setItem(STORAGE_KEY, name);
    } catch {
      // ignore
    }
    window.cupid?.setTheme(name);
  }, []);

  const assets = useMemo(() => THEME_ASSETS[theme], [theme]);

  return { theme, toggleTheme, setTheme: setThemeDirect, assets };
}
