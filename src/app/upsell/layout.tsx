export default function UpsellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased">
      {/* Layout limpo sem navegação ou footer - focado em conversão */}
      {children}
    </div>
  );
}