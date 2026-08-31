# Salla Mallikarjun — Developer Portfolio

A modern, responsive developer portfolio built with **React + Vite**, **TailwindCSS**, and **Framer Motion**.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## 🔑 Supabase Setup (Contact Form)

The contact form submits messages to a Supabase database.

### 1. Create a `.env` file in the project root

```bash
cp .env.example .env
```

Open `.env` and fill in your Supabase project credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here
```

You can find these values in your Supabase project dashboard under **Settings → API**.

### 2. Create the `contacts` table in Supabase

Run this SQL in the **Supabase SQL Editor**:

```sql
CREATE TABLE contacts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  message     TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow public inserts only (no reads from anon)
CREATE POLICY "allow_public_insert"
  ON contacts FOR INSERT
  TO anon
  WITH CHECK (true);
```

> **Note:** Without the env keys set, the form will run in **demo mode** and simulate a successful submission locally.

---

## 📁 Project Structure

```
src/
├── App.jsx                   # Root component
├── main.jsx                  # React entry point
├── index.css                 # Global styles (Tailwind + custom)
├── components/
│   ├── Navbar.jsx            # Sticky navigation bar
│   ├── Hero.jsx              # Hero section with particle animation
│   ├── About.jsx             # About section with terminal widget
│   ├── Skills.jsx            # Skills grouped by category
│   ├── Projects.jsx          # Project cards
│   ├── Experience.jsx        # Timeline-based experience section
│   ├── Certifications.jsx    # Certification badge grid
│   ├── Contact.jsx           # Contact form + Supabase integration
│   └── Footer.jsx            # Footer with links
├── hooks/
│   ├── useTheme.js           # Dark/light mode toggle hook
│   └── useScrollAnimation.js # IntersectionObserver hook
└── lib/
    └── supabase.js           # Supabase client
```

---

## 🛠 Tech Stack

| Technology        | Purpose                          |
|-------------------|----------------------------------|
| React 18          | UI framework                     |
| Vite 5            | Build tool & dev server          |
| TailwindCSS 3     | Utility-first styling            |
| Framer Motion     | Scroll & entrance animations     |
| Lucide React      | Icon library                     |
| @supabase/supabase-js | Contact form backend         |
| react-hot-toast   | Toast notifications              |

---

## 🌙 Dark / Light Mode

The site defaults to **dark mode**. Users can toggle with the button in the navbar. The preference is saved to `localStorage`.

---

## 📄 Resume

Place your resume PDF at `public/resume.pdf` — the navbar "Resume" button links there automatically.

---

## 📜 License

MIT — feel free to fork and adapt for your own portfolio.
