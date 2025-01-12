import podcastBg from "@/assets/podcast-bg.png";
import { LoginForm } from "@/components/login-form";
import { Podcast } from "lucide-react";

export const LoginPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 animate-fade-in">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Podcast className="size-4" />
            </div>
            Castalyze Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={podcastBg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
