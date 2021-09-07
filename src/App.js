import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import "katex/dist/katex.min.css";

function App() {
	const [text, setText] = useState("$$\frac{1}{123}$$");

	return (
		<main>
			<section className="markdown">
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					className="input"
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>
				<article className="result">
					<ReactMarkdown>{text}</ReactMarkdown>
				</article>
			</section>
		</main>
	);
}

export default App;
