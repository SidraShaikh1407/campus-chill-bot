import { MapPin } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
      <a href="/" className="flex items-center gap-2 font-bold text-foreground">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <MapPin className="h-4 w-4" />
        </span>
        HangoutFinder
      </a>
      <span className="text-xs font-medium text-muted-foreground">🎓 Made for students</span>
    </div>
  </nav>
);

export default Navbar;
