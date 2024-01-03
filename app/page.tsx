import Banner from "@/app/ui/banner";
import LinkSection from "@/app/ui/linksection";
import AboutSection from "@/app/ui/aboutsection";
import CourseDetails from "@/app/ui/coursedetails";
import AboutInstructor from "@/app/ui/aboutinstructor";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<Banner />
      <LinkSection />
      <CourseDetails />
      <AboutSection />
      <AboutInstructor />
		</main>
	);
}
