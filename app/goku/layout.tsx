export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h2>goku layout nav </h2>
        {children}
      </body>
    </html>
  );
}
