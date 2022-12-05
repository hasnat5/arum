import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Aktor from './components/Aktor';
import About from "./components/About";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import NotFound from './components/NotFound';
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<Navbar></Navbar>
			<Routes className="App">
				<Route path='/' element={<Home />} />

				<Route path='/actor'>
					<Route index element={<Aktor />} />
				</Route>

				<Route path='/about' element={<About />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer></Footer>
		</Fragment>
	);
}

export default App;
