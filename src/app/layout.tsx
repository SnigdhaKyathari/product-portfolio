import type { Metadata } from 'next';
import { PROFILE } from '@/content';
import './globals.css';

export const metadata: Metadata = {
  title: `${PROFILE.name} — Product Manager`,
  description: PROFILE.lede[0],
  openGraph: {
    title: `${PROFILE.name} — Product Manager`,
    description: PROFILE.lede[0],
    images: '/projects/flowstate-cover.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Topbar */}
        <div className="topbar">
          <div className="topbar-in">
            <a className="brand" href="/">
              <span className="dot"></span>
              {PROFILE.name}
            </a>
            <div className="toplinks">
              <a className="tl" href={PROFILE.substack} target="_blank" rel="noopener">
                Substack
              </a>
              <a className="tl" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
              <a className="tl primary" href={PROFILE.linkedin} target="_blank" rel="noopener">
                Let&apos;s connect &#8594;
              </a>
            </div>
          </div>
        </div>

        {/* Shell */}
        <div className="shell">
          <nav className="rail" id="rail"></nav>
          <div className="main" id="main">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
