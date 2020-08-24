import { useContext } from "react";
import { Store } from "../contextStore";
import Link from "next/link";

export default function Home() {
	const { state, dispatch } = useContext(Store);
	return (
		<>
			<button
				onClick={() => dispatch({ type: "change", payload: "Peter and Denis" })}
			>
				Change It
			</button>
			<br />
			<Link href="/about">
				<a>Test Me</a>
			</Link>
			<div>Home Page {state.name}</div>
		</>
	);
}
