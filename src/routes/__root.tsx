import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportClientError } from "../lib/error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { SmoothScroll } from "../components/site/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">404</p>
        <h1 className="mt-4 text-display text-5xl text-charcoal">Page not found</h1>
        <p className="mt-4 text-charcoal/70">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-orange btn-orange-hover mt-8 inline-flex">
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportClientError(error, { boundary: "root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-3xl text-charcoal">Something went sideways</h1>
        <p className="mt-4 text-charcoal/70">Try again, or head back home.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-orange btn-orange-hover"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-warm transition-colors"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Synergy Youth Consulting — From Vision to Impact" },
      {
        name: "description",
        content:
          "Synergy Youth Consulting equips young people across Africa with practical skills, research capacity, and global exposure through certified programs, mental health webinars, and international conferences.",
      },
      {
        name: "keywords",
        content:
          "Synergy Youth Consulting, youth development Africa, mentorship, certification, mental health webinars, Pan-African youth, Addis Ababa",
      },
      { name: "author", content: "Synergy Youth Consulting" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Synergy Youth Consulting — From Vision to Impact" },
      {
        property: "og:description",
        content:
          "Youth development, research capacity, and global exposure for young Africans building their own future.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Synergy Youth Consulting" },
      { property: "og:image", content: "/og-home.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Synergy Youth Consulting — From Vision to Impact" },
      {
        name: "twitter:description",
        content:
          "Practical skills, research capacity, and global exposure for young Africans.",
      },
      { name: "twitter:image", content: "/og-home.jpg" },
      { name: "theme-color", content: "#E85D1F" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "apple-touch-icon", href: "/favicon-32.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="absolute left-3 top-3 z-[100] -translate-y-[200%] rounded-full bg-orange px-4 py-2 font-semibold text-warm transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <Nav />
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
