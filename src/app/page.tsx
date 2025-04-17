import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-6">
      {/* Navigation */}
      <nav className="flex items-center justify-between">
        <span className="font-bold text-2xl ">50</span>
        <ul className="flex space-x-4 text-sm ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
     <ModeToggle />
      </nav>

      <header className="flex flex-col items-center justify-center mt-8 h-[30vh] bg-gradient-to-b from-gray-500/10 to-gray-700/20 rounded-lg shadow-lg p-8">
        <div>
          <h1 className="text-4xl text-center mt-8 font-bold">
            50 grandes en la historia del rap en español
          </h1>
          <p className="text-center mt-4">
            Un reconocimiento a las figuras más importantes del género en
            nuestro idioma
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Button className="mt-8">Get Started</Button>
        </div>
      </header>
    </div>
  );
}
