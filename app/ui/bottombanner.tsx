import data from "@/app/lib/data.json";
import Image from "next/image";

const BottomBanner = () => {
	return (
		<div className="w-full h-[18rem] bg-gray-300 flex flex-col justify-center relative">
			{/* left Arrow */}
			<div className="cursor-pointer w-[3rem] h-[3rem] bg-gray-400 rounded-full absolute left-[5rem] flex justify-center items-center">
				<Image width={20} height={20} src="/l-arrow.png" alt="left-arrow" />
			</div>
			<div className="max-w-[30rem] mx-auto text-center">
				<p className="font-bold text-xl">&quot;{data.testimonial.text}&quot;</p>
			</div>
			<div className="max-w-[30rem] mx-auto text-center flex gap-[0.5em] mt-[1em]">
				<div className="w-[2.5rem] h-[2.5rem] bg-orange-400 rounded-full"></div>
				<div className="text-left text-xs">
					<p className="font-semibold text-sm">
						{data.testimonial.reviewer_name}
					</p>
					<p>{data.testimonial.reviewer_designation}</p>
				</div>
			</div>
			{/* crousel */}
			<div className="mt-[1em] flex justify-center items-center gap-[0.25em]">
				<div className="w-[1rem] h-[1rem] bg-gray-600 rounded-full cursor-pointer"></div>
				<div className="w-[1rem] h-[1rem] bg-gray-600 rounded-full cursor-pointer"></div>
				<div className="w-[3rem] h-[1rem] bg-gray-600 rounded-full cursor-pointer"></div>
			</div>
			{/* right arrow */}
			<div className="cursor-pointer w-[3rem] h-[3rem] bg-gray-400 rounded-full absolute right-[5rem] flex justify-center items-center">
				<Image width={20} height={20} src="/r-arrow.png" alt="right-arrow" />
			</div>
		</div>
	);
};

export default BottomBanner;
