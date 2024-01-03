import data from "@/app/lib/data.json";
import Image from "next/image";

const coursedetails = () => {
	return (
		<div className="w-[25rem] p-[1.5em] absolute top-[10em] right-[15%] bg-sky-50">
			<h3 className="font-semibold text-lg">Course fees</h3>
			<span className="text-4xl font-bold relative">
				{data.course.fee.currency === "INR" ? "₹" : data.course.fee.currency}{" "}
				<span className="absolute top-[0.15em]">{data.course.fee.amount}</span>
			</span>
			<div className="font-semibold mt-[2em]">What&apos;s included:</div>
			{/* details */}
			<div className="my-[0.25em] flex gap-[0.5em] items-center text-sm mt-[0.4em]">
				<Image width={18} height={18} src="/video.png" alt="video icon" />{" "}
				<span>5 on-demand videos</span>
			</div>
			<div className="my-[0.25em] flex gap-[0.5em] items-center text-sm">
				<Image width={18} height={18} src="/video.png" alt="video icon" />{" "}
				<span>
					{data.course.inclusions.on_demand_videos} livestream sessions
				</span>
			</div>
			{data.course.inclusions.live_qa_sessions && (
				<div className="my-[0.25em] flex gap-[0.5em] items-center text-sm">
					<Image width={18} height={18} src="/chat.png" alt="chat-icon" />{" "}
					<span>Live Q&A sessions with Nityanand Charan Das</span>
				</div>
			)}
			{data.course.inclusions.whatsapp_community && (
				<div className="my-[0.25em] flex gap-[0.5em] items-center text-sm">
					<Image width={18} height={18} src="/chat.png" alt="chat-icon" />{" "}
					<span>An active whatsapp community</span>
				</div>
			)}
      {/* button */}
      <button className="w-full text-lg py-[0.4em] rounded-3xl mt-[1em] bg-violet-600 text-white">Register today</button>
		</div>
	);
};

export default coursedetails;
