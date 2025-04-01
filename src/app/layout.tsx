import "./globals.css";
export default function RootLayout({
  children,
  home,
  about,
  team,
}: Readonly<{
  children: React.ReactNode;
  home: React.ReactNode;
  about: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {home}
        {about}
        {team}
        {/* <Link href="/homepage">user homepage</Link> */}
        {/* <Link href="/team/teams">hello team</Link> */}
        {children}
      </body>
    </html>
  );
}
