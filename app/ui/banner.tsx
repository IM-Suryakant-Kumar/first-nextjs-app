import data from "@/app/lib/data.json";

const Banner = () => {
	return (
		<div className="w-full h-[15rem] bg-orange-600 text-white relative">
			<div className="max-w-[30rem] absolute left-[10%] bottom-[2em]">
				<h2 className="justify-self-end mt-auto">{data.instructor.name}</h2>
        <p className="text-3xl mt-[0.25em]">{data.course.title}</p>
			</div>
		</div>
	);
};

export default Banner;
