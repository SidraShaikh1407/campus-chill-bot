import { MapPin, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 font-bold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPin className="h-4 w-4" />
          </span>
          HangoutFinder
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-medium text-muted-foreground sm:block">📍 Mumbai Suburbs</span>
          {user ? (
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="mr-1 h-4 w-4" /> Logout
            </Button>
          ) : (
            <Button size="sm" onClick={() => navigate("/auth")}>Sign In</Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
