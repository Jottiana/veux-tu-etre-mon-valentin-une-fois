import { HashRouter , Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import Valentine from "./pages/Valentine/Valentine";
import ValentineRevealed from "./pages/ValentineRevealed/ValentineRevealed";

function App() {
	return (
		<HashRouter >
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/valentine" element={<Valentine />} />
				<Route path="/valentine/revealed" element={<ValentineRevealed />} />
			</Routes>
		</HashRouter >
	);
}

export default App;
