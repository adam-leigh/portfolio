import { BlogPosts } from "app/components/posts";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Speak the language of technology,
				<br />
				<span style={{ color: "red" }}>
					<em>fluently.</em>
				</span>
			</h1>
			<p className="mb-4">
				Fluently.tech empowers skilled professionals to break free from no-code
				limitations and harness the full potential of AI through programming.
				Founded in early 2023, we serve ambitious entrepreneurs, innovators, and
				creators ready to transform their expertise with AI into powerful,
				proprietary applications. To build, create, and innovate with true
				independence—a pathway to mastery designed to unlock new levels of
				productivity, creativity, and financial freedom.
			</p>
			<div className="my-8">
				<BlogPosts />
			</div>
			<span>Ready to break up with no-code? </span>
			{/* Step into the future with */}
			{/* <span style={{ color: "red" }}> fluently.</span> */}
			{/* <span style={{ color: "#326280" }}>tech</span> */}
		</section>
	);
}
