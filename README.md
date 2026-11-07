# LingoLeaf 🍃

A mobile-first, installable, free English-learning web app for Hebrew and Russian speakers.

## Features
- Switch the entire UI and lesson translations between Hebrew and Russian.
- Multiple learner profiles, each with its own language, progress, daily activity and review history.
- 60 lessons (480 English phrases) in A1–B2 levels, including grammar tips.
- Listen with the browser's speech-synthesis engine, adjustable playback speed, American/British accents when device voices are available.
- Vocabulary flashcards and interactive quizzes: translation, audio listening, multiple choice and typing.
- Optional pronunciation practice via browser speech recognition (only where supported).
- Flashcard reviews with simple spaced repetition, weekly progress, streak and achievements.
- Backup/export and import via JSON; local-only storage without login or database.
- Offline app shell, PWA and home-screen installation.

## Deploy (GitHub Pages)
1. Unzip the archive. Upload **all files**, including the `icons` folder, to a GitHub repository (at the repository root).
2. Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/(root)` → Save.
3. Your link will be `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/` (usually ready after deployment completes).
4. Open the published site on a phone and add it to the home screen.

You may alternatively upload the folder to Netlify as a static site.

## Developer use
A build tool and API keys are **not** required. Open `index.html` directly for basic inspection; for service-worker/PWA functionality, use HTTPS or localhost (`python -m http.server 8000`).

## Caveats
- English TTS quality and voice selection depend on the installed system/browser voices. Some voices may use an online provider.
- Speech recognition isn't universally available (notably varies in iOS browsers); recognition may depend on network and third-party/browser services. It does **not** evaluate true accent/pronunciation quality; it compares recognized text.
- Progress is stored in the browser (localStorage), separately for each device/browser. Export backups regularly; clearing browser data loses unsaved progress.
- This version contains a curated beginner course and deterministic answer checks, not an AI conversation partner.

## Update from the first release
This archive keeps the same localStorage key (`lingoleaf_state_v1`) and all original 12 lesson IDs. Updating the published files preserves prior progress and learner profiles on the same site and browser, provided you do not clear its stored data. Export a backup first from Settings.

## New in version 2
- 48 additional lessons, 384 new sentence-level practice cards.
- Intermediate B1 and upper-intermediate B2 filters.
- Brand-new LingoLeaf logo in app header and About, matching PWA icon and iOS home-screen icon.

To update an existing GitHub Pages site, replace all original files with the contents of this archive, including all files under `icons/` and `assets/`. Keep the same repository URL to retain saved browser data.

## Logo correction (v2.1)
The exact original LingoLeaf logo created for this project is now used across the app: the original wordmark next to its matching icon in the fixed app header and onboarding, plus the full-size designed logo on the About screen. Matching icon exports are included for installed apps. Changes are limited to branding, retaining all 60 lessons, profile data and localStorage key.

If an older icon remains visible on iPhone/Android, close the web app and reload the page. Existing home-screen icons can be cached by the operating system; removing and re-adding that shortcut may be needed to refresh its icon (the app's browser data is separate from the shortcut, but make a backup before changes).
