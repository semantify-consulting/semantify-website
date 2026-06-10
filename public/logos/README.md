# Collaborator logos

These logos feed the auto-scrolling carousel in `src/components/TrustStrip.tsx`.

One file per organization, using the **exact filenames** below (currently PNG;
transparent backgrounds recommended). If you swap a file to SVG, update the
matching `logo:` path in `TrustStrip.tsx` to end in `.svg`.

| Organization | File             | Link                                      |
| ------------ | ---------------- | ----------------------------------------- |
| DataCite     | `datacite.png`   | https://datacite.org                      |
| CERN         | `cern.png`       | https://home.cern                         |
| EMBL-EBI     | `embl-ebi.png`   | https://www.ebi.ac.uk                     |
| FDO Forum    | `fdo-forum.png`  | https://fairdo.org                        |
| RDA          | `rda.png`        | https://rd-alliance.org                   |
| FORCE11      | `force11.png`    | https://force11.org                       |
| EOSC         | `eosc.png`       | https://eosc.eu                           |
| NASA TOPS    | `nasa-tops.png`  | https://science.nasa.gov/open-science     |
| FAIRPoints   | `fairpoints.png` | https://fairpoints.org                    |

## Notes
- Logos render **grayscale**, fading to full color on hover, at a uniform height
  (`h-8` / 32px). Provide reasonably wide, single-color or full-color marks; very
  light logos may look faint when grayscaled.
- Until a file exists, the carousel shows the organization name as fallback text
  (the image `alt`), so the build and layout work before assets arrive.
- Use logos you have permission to display.
