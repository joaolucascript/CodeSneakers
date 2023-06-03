import { EmblaCarousel } from './components/Carousel/EmblaCarousel';
import { AboutUs } from './components/AboutUs';
import { ProductsSection } from './components/Products';
import { Team } from './components/Team';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <EmblaCarousel />
      <AboutUs />
      <Team />
      <ProductsSection />
    </main>
  );
}
