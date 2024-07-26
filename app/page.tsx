import Hero from "./ui/hero";
import Thumbs from "./ui/thumbs";

export default function Home(){
  return <>
    <main className="min-h-screen">
      <Hero />
      <Thumbs />
    </main>
  </>
}