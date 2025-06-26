import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-8 text-center bg-gradient-to-t from-[#181c2b] via-[#232946] to-transparent">
      <div className="text-xs text-indigo-200/70">
        &copy; {new Date().getFullYear()} {profile.name} &mdash; All rights reserved.
      </div>
    </footer>
  );
}
