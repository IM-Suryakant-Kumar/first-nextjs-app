import data from "@/app/lib/data.json";
import ParseHtml from "@/app/ui/parsehtml";
import Image from "next/image";
import Link from "next/link";

const AboutInstructor = () => {
	return (
		<div className="mt-[4em] mb-[2em] w-full pl-[15%] pr-[10%] pb-[1em]">
			<h3 className="font-bold text-2xl">About the Instructor</h3>
			<div className="flex justify-between gap-[2em] mt-[2em]">
				<div className="w-[60%] flex items-start gap-[1em]">
					<span className="min-w-[9rem] min-h-[9rem] rounded-full bg-orange-300"></span>
					<p className="text-md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
						deleniti autem sit, error ea, veritatis quas dolorum praesentium
						expedita doloribus ratione nam accusamus. Mollitia placeat delectus
						similique necessitatibus itaque saepe consequatur sunt libero ex,
						qui, nobis sed. Pariatur expedita qui dolores fugiat. Voluptatum,
						repellendus atque. Laborum unde repellendus sequi corporis aperiam
						vitae deleniti deserunt quam hic officia, eaque, fugiat voluptate.
					</p>
				</div>
				<div className="w-[40%]">
					<p className="text-md">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
						corrupti nam non animi recusandae nulla inventore quibusdam ea ipsam
						similique velit quisquam amet saepe unde fugiat sunt modi
						consequatur doloribus, ad, sit nesciunt vel! Voluptatum modi
						corrupti ducimus minus nulla quidem maxime maiores quisquam
						perferendis omnis est architecto possimus ipsa optio cupiditate
						aliquid recusandae, nobis veniam sapiente accusantium suscipit quam.
						Placeat voluptate accusamus delectus illum non cum natus ut eos?
					</p>
				</div>
			</div>
			{/* social links */}
			<div className="flex justify-around mt-[2em] text-sm">
				{data.instructor.social_media.facebook && (
					<div className="flex gap-[0.5em]">
						<Image width={18} height={18} src="/fb.png" alt="fb" />
						<Link href="">Facebook</Link>
					</div>
				)}
				{data.instructor.social_media.twitter && (
					<div className="flex gap-[0.5em]">
						<Image width={18} height={18} src="/x.png" alt="x" />
						<Link href="">Twitter</Link>
					</div>
				)}
				{data.instructor.social_media.youtube && (
					<div className="flex gap-[0.5em]">
						<Image width={18} height={18} src="/yt.png" alt="yt" />
						<Link href="">YouTube</Link>
					</div>
				)}
				{data.instructor.social_media.instagram && (
					<div className="flex gap-[0.5em]">
						<Image width={18} height={18} src="/ig.png" alt="ig" />
						<Link href="">Instagram</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default AboutInstructor;
