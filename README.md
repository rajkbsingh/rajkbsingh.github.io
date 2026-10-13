# Academic homepage with Google Scholar citations

## Changes made
- Reduced the hero name from an oversized display heading to a moderate, responsive heading.
- Added a Google Scholar citation metrics section (total citations, h-index, i10-index).
- Added automatic citation-count labels to existing publication cards when titles match retrieved Scholar data.
- Added a weekly GitHub Actions workflow to refresh `data/scholar.json` and deploy GitHub Pages.
- Preserved the supplied page sections and styles, and corrected one malformed DOI URL.

## Setup
1. Copy `index.html`, `style.css`, `script.js`, `data/`, `scripts/`, and `.github/workflows/` into the root of your existing Pages repository. Keep `ProfilePic.png` in the root if your original site uses it.
2. In GitHub, open Settings → Secrets and variables → Actions → Variables → New repository variable. Name it `SCHOLAR_ID` and set its value to the ID in your Google Scholar profile URL (`...citations?user=PROFILE_ID`).
3. Open Settings → Pages and select **GitHub Actions** as the deployment source.
4. Check Settings → Actions → General to ensure workflow write permissions are permitted by your repository/organization policy.
5. Open Actions → Refresh Google Scholar citations → Run workflow and inspect the logs.
6. The scheduled refresh is Mondays at 03:23 UTC.

## Important notes
- `scholarly` is an unofficial client, not an official Google Scholar API. Retrieval can be blocked or rate-limited.
- Existing manually listed publications are preserved; the script adds citation labels when it can match a title to Scholar metadata.
- If the repository already has a deployment workflow or uses Jekyll/build output, integrate the refresh steps with that existing deployment rather than running competing deployments.
- Keep your real `ProfilePic.png` and any other site assets in the repository.
