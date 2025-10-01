# ACS Pre-Op Charting (Frontend)

A React web application for OR Nurses at Hospital A, implementing the ACS preoperative charting interface.

## Highlights

- Ocean Professional classic theme (clean, professional, structured)
- Top navigation with breadcrumbs
- Patient context section (name, MRN, age/sex, allergy, case, surgeon, date, location, ASA)
- Left-aligned vertical tabs: Assessment, Investigations, Consents & Checks, Notes
- Card/form layouts with subtle shadows and clear sectioning
- Floating action buttons for Save and Submit
- No backend dependencies (static demo data)

## Getting Started

In the project directory:

- `npm start` – run the dev server at http://localhost:3000
- `npm test` – run unit tests
- `npm run build` – production build

## Structure

- `src/components/layout/AppShell.jsx` – layout shell and navigation
- `src/components/patient/PatientContextCard.jsx` – patient context card
- `src/pages/Assessment.jsx` – assessment form
- `src/pages/Investigations.jsx` – investigations form
- `src/pages/ConsentsChecks.jsx` – consents & checks
- `src/pages/Notes.jsx` – notes

## Styling

All theme tokens and component styles live in `src/App.css`, following the Ocean Professional palette:

- Primary: #1E3A8A
- Secondary: #F59E0B
- Success: #059669
- Error: #DC2626
- Background: #F3F4F6
- Surface: #FFFFFF
- Text: #111827

This project intentionally avoids heavy UI frameworks to keep it lightweight and focused.
