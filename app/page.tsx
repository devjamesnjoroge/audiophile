import Hero from "./ui/hero";
import Thumbs from "./ui/thumbs";
import SpeakerPromo from "./ui/speaker";

export default function Home(){
  return <>
    <main className="min-h-screen">
      <Hero />
      <Thumbs />
      <SpeakerPromo />
    </main>
  </>
}