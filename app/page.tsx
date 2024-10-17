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
				{`Fluently.Tech empowers skilled professionals to break free from no-code
				limitations and harness the full potential of AI through programming.
				Founded in early 2023, we serve ambitious entrepreneurs, innovators, and
				creators who are ready to turn their expertise with AI into powerful,
				proprietary applications. Through one-on-one, tailored guidance,
				fluently.tech targets the exact skill gaps holding you back, giving you
				the knowledge to build, create, and innovate with true independence.
				This isn’t just tutoring—it’s a pathway to mastery, designed to unlock
				new levels of productivity, creativity, and financial freedom. Ready to
				break up with no-code? Step into the future with Fluently.Tech.`}
			</p>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	);
}
