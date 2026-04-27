# AeroMetrics AI - Atmospheric Intelligence Platform

AeroMetrics AI is a high-fidelity, comprehensive web application designed for global enterprise weather systems and logistics routing. Originally prototyped using Google Stitch, this application has been fully migrated into a robust, production-ready **Next.js 16** application.

It features a cutting-edge "Atmospheric Precision" aesthetic, utilizing advanced glassmorphism, dynamic data visualizations, and interactive AI capability mockups.

---

## 🚀 Features

- **Global Satellite Mesh & Predictive Models**: Visualizes real-time atmospheric data and calculates optimal logistics routes using simulated AI algorithms.
- **Glassmorphic UI Design**: Heavily utilizes backdrop filters, neon glows (`cyan-400`), and a dark, space-themed UI using custom Tailwind utility classes.
- **Dedicated Dashboard**: A fully responsive internal command center with:
  - Sidebar and Top App Bar navigation.
  - Interactive mock data scorecards (temperature, humidity).
  - Monthly aggregated SVG bar charts.
  - Regional stability gauges.
- **Comprehensive Marketing Pages**: Includes Home, Capabilities, Pricing, and About pages built with reusable `PublicHeader` and `Footer` components.
- **Responsive Architecture**: Built mobile-first using Tailwind CSS container queries and flexbox/grid layouts.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Google Fonts (`Inter` for body, `Space Grotesk` for headlines)
- **Icons**: Google Material Symbols

---

## 💻 Installation & Usage

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd kundu
   ```

2. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx                # Global Root Layout (Fonts & Globals)
│   ├── page.tsx                  # Home Landing Page
│   ├── globals.css               # Tailwind & Custom Utilities (.glass-card)
│   ├── about/page.tsx            # About & Team Page
│   ├── capabilities/page.tsx     # Platform Features Page
│   ├── pricing/page.tsx          # Pricing Tiers Page
│   └── dashboard/                # Command Center Module
│       ├── layout.tsx            # Dashboard specific layout (Sidebar & Topbar)
│       ├── page.tsx              # Predictive Models Dashboard (Main)
│       ├── atmospheric-feed/     # Satellite Feeds Route
│       ├── historical-trends/    # Historical Data Route
│       └── logistics-routing/    # Global Logistics Route
├── components/
│   ├── PublicHeader.tsx          # Main website navigation
│   ├── Footer.tsx                # Main website footer
│   ├── DashboardSidebar.tsx      # Dashboard side navigation
│   └── DashboardTopBar.tsx       # Dashboard top navigation
```

---

## 📊 Integrating R Language (For Data Science & Analytics)

Since AeroMetrics AI is heavily focused on predictive modeling and weather telemetry, you can integrate your **R language** models with this Next.js frontend to power the dashboards with real data. 

Here is the recommended architecture for integrating R:

### 1. Create an R API using `plumber`
You can expose your R scripts and predictive models as a REST API using the [plumber](https://www.rplumber.io/) package. 

**Example R Script (`api.R`):**
```r
# api.R
library(plumber)

#* Return weather prediction data
#* @param city The city to predict for
#* @get /api/predict
function(city = "Reykjavik") {
  # Run your machine learning model here
  list(
    city = city,
    max_temp = 32.4,
    min_temp = 18.1,
    stability = 0.75
  )
}
```

### 2. Run the R Server
Run the plumber API on a specific port (e.g., `8000`):
```r
r <- plumb("api.R")
r$run(port=8000)
```

### 3. Fetch Data in Next.js
Update the Next.js frontend (like `src/app/dashboard/page.tsx`) to fetch from your local R backend using Next.js Server Components or `useEffect` on the client.

**Example Next.js Fetch:**
```tsx
// Inside your Next.js Dashboard component
async function getPredictionData() {
  // Fetching from the R Plumber API
  const res = await fetch('http://localhost:8000/api/predict?city=Reykjavik');
  if (!res.ok) throw new Error('Failed to fetch data from R backend');
  return res.json();
}
```

This decoupled architecture allows you to harness the full statistical and machine learning power of **R** on the backend while maintaining the blazing-fast, high-fidelity UI of **Next.js** on the frontend.
