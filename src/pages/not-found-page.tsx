import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen animate-fade-in">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-8">Looks like you're lost 😬</p>
        <Button variant="outline" size="lg" onClick={() => navigate("/")}>
          Take me home
        </Button>
      </div>
    </div>
  );
};
