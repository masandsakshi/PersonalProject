import Hero from "@/components/home/Hero";
import MemoriesSection from "@/components/memories/MemoriesSection";
import WishesSection from "@/components/wishes/WishesSection";
import ScrapbookSection from "@/components/scrapbook/ScrapbookSection";
import PlaylistSection from "@/components/playlist/PlaylistSection";
import FinaleSection from "@/components/finale/FinaleSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <MemoriesSection />
      <WishesSection />
      <ScrapbookSection />
      <PlaylistSection />
      <FinaleSection />
    </main>
  );
}