# ALNR Outdoor Services — Website

High-converting landing page for **ALNR Outdoor Services** (A Lil Nervous Resources),
a locally owned lawn / landscaping / outdoor services company in Corpus Christi, TX.

Stack: **React + Vite + TailwindCSS + Framer Motion**. Rugged-outdoor "Coastal Bend"
brand pulled straight from the ALNR logo & business card (charcoal, pine green,
burnt orange, sand). Faith nod (cross) kept subtle, per the logo.

## Run it

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Where to edit

- **All copy, services, photos, contact info:** [`src/data.js`](src/data.js) — single source of truth.
- **Brand colors / fonts / animations:** [`tailwind.config.js`](tailwind.config.js).
- **Sections:** [`src/components/`](src/components/) — one file per section.

## Photos

Real ALNR job photos live in [`public/work/`](public/work/) (renamed from the originals
in `public/ALNR/`). Swap any file of the same name to update a slot, or edit the
`GALLERY` / `BEFORE_AFTER` arrays in `src/data.js`.

## Before launch — quick checklist

1. **Contact form** posts to FormSubmit (`src/components/Contact.jsx`). Submit the form
   once and confirm the activation email FormSubmit sends to `alnr.services@gmail.com`
   (or swap in the client's preferred inbox / GHL webhook).
2. Confirm the **phone, email, and service-area list** in `src/data.js`.
3. Add a real **fishing-trip / coastal photo** if available — the "Beyond the Lawn"
   section currently uses a built-in CSS coastal sunrise (no stock photo).
4. Point the canonical URL / OG tags in `index.html` at the live domain.
5. Set up the **Google Business Profile** (the big win from the pitch deck).

## Contact

Phone: 361-391-6733 · Email: alnr.services@gmail.com
Tagline: *"No Job Too Big, No Fish Too Small."*
