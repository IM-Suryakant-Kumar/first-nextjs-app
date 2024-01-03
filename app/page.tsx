import Banner from "@/app/ui/banner";
import LinkSection from "@/app/ui/linksection";
import AboutSection from "@/app/ui/aboutsection";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<Banner />
      <LinkSection />
      <AboutSection />
		</main>
	);
}
