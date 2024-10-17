import { BlogPosts } from "app/components/posts";

export default function Page() {
	return (
		<section className="relative">
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Speak the language of technology,
				<br />
				<span className="text-red-500">
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
			<span className="md:fixed md:top-4 md:right-4 text-red-500">
				Ready to break up with no-code?
			</span>
		</section>
	);
}
