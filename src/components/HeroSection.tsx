import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-3xl text-center">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          <MapPin className="h-4 w-4" />
          For campus students
        </div>

        <h1 className="animate-fade-up stagger-1 text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          Find your next
          <span className="text-primary"> hangout spot</span>
          <br />
          on a student budget
        </h1>

        <p className="animate-fade-up stagger-2 mx-auto mt-6 max-w-xl text-lg text-muted-foreground" style={{ textWrap: "pretty" }}>
          Set your budget, pick a vibe, and discover affordable cafés, parks, restaurants & malls near campus — no more scrolling through overpriced options.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
