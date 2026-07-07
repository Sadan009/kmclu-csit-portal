# KMCLU CSIT Department Portal

A modern, responsive department portal for the **Department of Computer Science & Information Technology (CSIT)**, Khwaja Moinuddin Chishti Language University (KMCLU), Lucknow — built for MCA and BCA students.

## Tech Stack

- React 19 (Vite)
- Tailwind CSS 3
- React Router DOM 7
- lucide-react icons
- Dummy JSON data (no backend required)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Pages

- **Home** — dashboard with hero, quick access cards, latest notices, department highlights and important links
- **Notices** — searchable, filterable, paginated notice board
- **Syllabus** — BCA/MCA tabs with semester-wise subject PDFs
- **Time Table** — course & semester selectors with PDF cards
- **Previous Papers** — course → semester → year drill-down with subject search
- **Faculty** — responsive faculty directory with search
- **Downloads** — academic calendar, holiday list and department forms
- **About** — vision, mission, courses, facilities, laboratories, gallery placeholder
- **404** — friendly not-found page

## Project Structure

```
src/
  components/
    layout/       Header, MobileMenu, Footer, Layout, ScrollToTop
    common/        Button, Card, SectionTitle, PageTitle, SearchBar, Pagination,
                    Breadcrumb, EmptyState, Skeleton, PDFCard, QuickAccessCard
    home/          Hero, QuickAccessGrid, LatestNotices, DepartmentHighlights, ImportantLinks
    notices/       NoticeCard
    faculty/       FacultyCard
    downloads/     DownloadCard
  pages/           Home, Notices, Syllabus, TimeTable, PreviousPapers, Faculty, Downloads, About, NotFound
  data/            notices.js, faculty.js, downloads.js, syllabus.js, papers.js, timetable.js, stats.js
  hooks/           useScrollToTop, usePagination
  utils/           formatDate, iconMap
  routes/          navLinks
  App.jsx
  main.jsx
```

## Notes

- All content is dummy/sample data intended for front-end demonstration. Connect a real backend/API to `src/data/*.js` to make it production-ready.
- Download buttons currently show a placeholder alert since there is no backend/file storage wired up yet.
- Colors and typography follow the brief: primary `#0F4C81`, secondary `#1E3A8A`, accent `#F59E0B`, background `#F8FAFC`, with Poppins for headings and Inter for body text.
