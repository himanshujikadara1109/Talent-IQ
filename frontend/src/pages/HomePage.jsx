import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300 min-h-screen">
      {/* NAVBAR */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <SparklesIcon className="size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                Amivue IQ
              </span>
              <span className="text-xs text-base-content/60 -mt-1">
                Code Together
              </span>
            </div>
          </Link>

          {/* AUTH */}
          <SignInButton mode="modal">
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:scale-105 transition">
              Get Started
              <ArrowRightIcon className="inline ml-2 size-4" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="badge badge-primary badge-lg">
              <ZapIcon className="size-4" />
              Real-time Collaboration
            </div>

            <h1 className="text-5xl lg:text-7xl font-black">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Code Together,
              </span>
              <br />
              <span>Learn Together</span>
            </h1>

            <p className="text-xl text-base-content/70 max-w-xl">
              The ultimate platform for collaborative coding interviews and pair
              programming.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-3">
              {["Live Video", "Code Editor", "Multi-Language"].map((t) => (
                <div key={t} className="badge badge-outline badge-lg">
                  <CheckIcon className="size-4 text-success" />
                  {t}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg">
                  Start Coding
                </button>
              </SignInButton>

              <button className="btn btn-outline btn-lg">
                <VideoIcon className="size-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <img
            src="/hero.png"
            alt="Hero"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-3 gap-8">
        <Feature icon={<VideoIcon />} title="HD Video Call" />
        <Feature icon={<Code2Icon />} title="Live Code Editor" />
        <Feature icon={<UsersIcon />} title="Easy Collaboration" />
      </div>
    </div>
  );
}

const Feature = ({ icon, title }) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body items-center text-center">
      <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="text-base-content/70">
        Designed for seamless interview experience
      </p>
    </div>
  </div>
);

export default HomePage;
