import Hero from "./ui/hero";
import Thumbs from "./ui/thumbs";
import SpeakerPromo from "./ui/speaker";
import Footer from "./ui/footer";

export default function Home(){
  return <>
    <main className="min-h-screen">
      <Hero />
      <Thumbs />
      <SpeakerPromo />
      <Footer />
    </main>
  </>
}