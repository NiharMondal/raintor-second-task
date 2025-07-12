import Receiver from "@/components/reveiver";
import Sender from "@/components/sender";
import Container from "@/components/shared/container";

export default function Home() {
	return (
		<section>
			<Container className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-x-10">
				<Sender />
				<Receiver />
			</Container>
		</section>
	);
}
