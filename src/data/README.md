# Editing site content

You don't need to touch any React or `.js` files to update your site. Everything that changes regularly lives in two JSON files in this folder.

## Add or edit a project

1. Open `projects.json`.
2. Copy an existing project block (everything between `{` and `}`, including the comma after).
3. Paste it where you want it to appear — order in the file = order on the site.
4. Edit the fields. The first 3 projects in the file are the "featured" ones (big rows). Everything after that goes in the "Show more" grid.
5. Drop your project image into `public/projects/` (PNG or JPG). Then set `"image"` to `"/projects/your-file.png"`.
6. Save the file.

### Project fields

| Field | Required | Notes |
|---|---|---|
| `id` | yes | Any unique short slug (e.g. `"my-project"`). |
| `num` | yes | Display number, like `"01"`, `"02"`. |
| `title` | yes | Project name. |
| `tagline` | yes | One-line italic blurb under the title. |
| `year` | yes | e.g. `"2025"` or `"2024 — present"`. |
| `role` | yes | e.g. `"Full-stack"`, `"Solo build"`. |
| `image` | yes | Path under `/public`, like `"/projects/foo.png"`. |
| `description` | yes | Paragraph shown on the big row. |
| `metrics` | optional | Array of `{ "value", "label" }` for the stat strip. Omit for projects without numbers. |
| `tech` | yes | Array of tech tags, e.g. `["React", "Node.js"]`. |
| `links` | yes | Array of `{ "label", "href" }`. GitHub, demo, write-up, etc. |

## Add or edit experience

1. Open `experience.json`.
2. Copy an entry. Edit `when`, `role`, `org`, `detail`. Save.

## Edit your skill stack

1. Open `skills.json`.
2. Each entry has a `group` name (e.g. "Languages") and an `items` array. Add or remove items as needed.
3. The stack is hidden by default in the hero — visitors click "Show stack" to expand it.

## Update your résumé

Replace `public/resume.pdf` with your latest PDF (keep the same filename).

## Tips

- JSON is picky: every `{`, `[`, comma, and quote needs to match. If the site breaks after an edit, you probably forgot a comma or have a stray one at the end of a list.
- After saving, the dev server (`npm start`) will refresh on its own. For production, run `npm run build` and redeploy.
