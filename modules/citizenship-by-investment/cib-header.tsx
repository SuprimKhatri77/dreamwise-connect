export default function CIBHeader() {
  return (
    <section className="w-full bg-background border-b border-border px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Citizenship by Investment
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Unlock global mobility and expand your opportunities. Our
            citizenship by investment programs offer streamlined pathways to
            obtaining second citizenship through real estate investment,
            business ventures, or government bonds.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Fast Processing</h3>
              <p className="text-sm text-muted-foreground">
                Most applications processed within 60-90 days for eligible
                applicants.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">
                Family Inclusion
              </h3>
              <p className="text-sm text-muted-foreground">
                Include spouse, children, and dependents in your citizenship
                application.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">
                Investment Flexibility
              </h3>
              <p className="text-sm text-muted-foreground">
                Choose from real estate, bonds, business, or donation pathways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
