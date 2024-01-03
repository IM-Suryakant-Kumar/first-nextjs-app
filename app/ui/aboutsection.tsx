import data from "@/app/lib/data.json";
import ParseHtml from "@/app/ui/parsehtml";

const AboutSection = () => {
	return (
		<div className="w-full pl-[15%]">
			<h3 className="mt-[1.5em] font-bold text-2xl">About the course</h3>
			<p className="max-w-[40rem] text-base font-medium mt-[1em] text-gray-600">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iure
				autem, eaque dolorem incidunt, soluta totam inventore libero quo
				consequuntur maxime necessitatibus provident accusantium ab minima hic.
				Sint harum, laboriosam tempore minima recusandae quia consequatur fugiat
				blanditiis accusantium maxime quibusdam nihil expedita nesciunt
				cupiditate corrupti, molestias minus sapiente et, accusamus officiis hic
				illum autem eaque quas. Aperiam eius qui illum.
			</p>
			<p className="max-w-[40rem] text-base font-medium mt-[1em] text-gray-600">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
				molestiae facilis quia animi ea cupiditate maiores vitae ullam
				doloremque porro quas? Adipisci sit unde, tenetur quisquam molestias
				maiores cum dolore quia ut pariatur fugiat similique, iusto suscipit
				sequi et voluptatibus.
			</p>
			<p className="max-w-[40rem] text-base font-medium mt-[1em] text-gray-600">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
				exercitationem beatae sint sapiente ab, ducimus quo magnam voluptas
				doloribus culpa, ex molestiae error doloremque blanditiis itaque illo
				impedit alias assumenda aliquam! Repellat odit incidunt possimus sunt
				ipsum officia fugiat nobis, architecto voluptates magnam. Deleniti
				nostrum laudantium delectus! Dicta, expedita magni.
			</p>
			{/* what to expect */}
			<div className="mt-[1.5em] text-xl max-w-[25rem]">
				<h4 className="font-bold ">What to expect from the course</h4>
				<ParseHtml htmlString={data.course.what_to_expect.html_content} />
			</div>
			{/* key topics */}
			<div className="mt-[1.5em] text-xl max-w-[25rem]">
				<h4 className="font-bold ">Key topics covered</h4>
        <p className="text-sm mt-[1em] mb-[1.5em]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum molestiae debitis natus laudantium sequi sit veniam tempore aliquam repellat aliquid saepe soluta alias, ipsam aut numquam adipisci explicabo vitae asperiores, porro corrupti dolorem? Nemo adipisci atque nulla rerum voluptatibus? Incidunt eveniet ipsam iure molestias amet dolor, impedit totam saepe nostrum!</p>
				<ol className="list-none text-xs">
					<li className="flex gap-[1.5em] mt-[1em]">
						<span>✔️</span>
						<span>
							<strong>10 written and audio sessions</strong> guiding you in
							decoding the language of numbers so that you can easily receive
							their insights and messages.
						</span>
					</li>
					<li className="flex gap-[1.5em] mt-[1em]">
						<span>✔️</span>
						<span>
							<strong>Intuitive exercises and homework</strong> walk you through
							the energies and values of numbers and number sequences so you can
							become your own authority.
						</span>
					</li>
					<li className="flex gap-[1.5em] mt-[1em]">
						<span>✔️</span>
						<span>
							<strong>A Handy reference</strong> to numerical meanings, so you
							can uncover your soul&apos;s gifts, challenges, lessons, and
							purpose – and receive spiritual guidance along your path.
						</span>
					</li>
					<li className="flex gap-[1.5em] mt-[1em]">
						<span>✔️</span>
						<span>
							<strong>Expert techniques</strong> for manifestation offer simple ways to use
							numbers to co-create with the universe.
						</span>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default AboutSection;
