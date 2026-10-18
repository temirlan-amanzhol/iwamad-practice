# Week 5 — Handoff notes (SIS 2 starter design)
Routes (from the prototype):  `/` (Home) · `/posts` (Posts) · `/contact` (Contact) · `/posts/:id` (the "Read more" button on a PostCard)
Components → React files:     PostCard → `src/components/ui/Card.tsx`   Button → `src/components/ui/Button.tsx`   Tag → `src/components/ui/Tag.tsx`
Button variants → prop:       variant = `'primary' | 'secondary'` (Figma: `variant=Primary`, `variant=Secondary`)
PostCard layout:              direction column (vertical, centred)  gap 12px  padding 16px (`space/4`)  radius 8px (`radius/md`)
Breakpoint change:            phone 1 column, desktop 2 columns; header: logo + title on the first row and nav under it on phone, everything in one row on desktop
Tokens (all ten):             color/primary = #1d4ed8  color/on-primary = #ffffff  color/surface = #ffffff  color/border = #d1d5db  color/text = #1f2937  color/text-muted = #9ca3af  space/2 = 8px  space/4 = 16px  space/6 = 24px  radius/md = 8px

## Where things come from

- **Figma file:** my copy of "IWaMAD · SIS 2 Blog — Starter Design", page "Design System". It has five things: `logo`, `Tag`, `Button` (2 variants), `PostCard`, `Header`.
- **Routes:** the file has no screens with prototype links, only components. I took the routes from the Header nav (Home, Contact, Posts) and the PostCard "Read more" button.
  In this project they map to: `/`, `/skills` (my "posts"), `/skills/:id`, `/contact`, plus `*` for 404.
- **Breakpoint:** only phone-width components are drawn (Header 392px, PostCard 320px), there is no desktop frame. The "desktop 2 columns / one-row header" part is my decision.
  In code: header switches to one row at 768px, Home switches to 2 columns at 900px.

## Measurements

| Component | What I found |
|---|---|
| Header | row, gap 24px (`space/6`), padding 24px top/bottom (`space/6`) and 16px sides (`space/4`), 1px bottom border `color/border`, logo 32×32, title 16px `color/text`, nav links 16px `color/primary` |
| Button | height 44px, padding 8px left/right (`space/2`) and 16px top/bottom (`space/4`), radius `radius/md`, text 12px. Primary: fill `color/primary`, text `color/on-primary`. Secondary: fill `color/surface`, 1px border and text `color/primary` |
| Tag | pill (radius 999px), 1px border `color/border`, text 12px black. Padding is 8px top/bottom and 2px left/right |
| PostCard | fill `color/surface`, 1px border `color/border`, image placeholder 288×162, title 20px `color/text`, date 14px `color/text-muted`, tags in a row with gap 8px (`space/2`) |

- **Font:** Inter Regular everywhere.
- **Font sizes and some values are not variables:** 12/14/16/20px font sizes, Tag radius 999px, PostCard gap 12px. I added them to `tokens.css` as extra tokens so the UI components still use only `var(--…)`.
- **Tag text colour:** black (#000000) in Figma, which is not one of the tokens. In code the Tag uses `color/text` (#1f2937), it still has 14.68 : 1.
- **Tag padding:** 2px left/right makes long skill names touch the round ends, so in code the Tag uses 8px (`space/2`) on all sides. The height stays the same as in Figma.

## Design fix (contrast)

| Token | Old | New | Contrast on `color/surface` #ffffff |
|---|---|---|---|
| `color/text-muted` | #9ca3af | #6b7280 | 2.54 : 1 → **4.83 : 1** |

The other text colours already pass 4.5 : 1:

| Colour | Use | Contrast |
|---|---|---|
| `color/text` #1f2937 on white | main text | 14.68 : 1 |
| `color/primary` #1d4ed8 on white | nav links, Secondary button | 6.70 : 1 |
| `color/on-primary` #ffffff on `color/primary` | Primary button | 6.70 : 1 |
| Tag text #000000 on white | tags | 21 : 1 |
