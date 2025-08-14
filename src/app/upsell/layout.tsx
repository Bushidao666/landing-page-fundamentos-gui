export default function UpsellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {/* Layout limpo sem navegação ou footer - focado em conversão */}
        {children}
      </body>
    </html>
  );
}