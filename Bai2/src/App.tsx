import { useState } from 'react'
import './App.css'

function App() {
	// TypeScript suy luận countInferred là number vì giá trị khởi tạo là 0.
	const [countInferred, setCountInferred] = useState(0)

	// Khai báo tường minh generic number cho React state.
	const [countExplicit, setCountExplicit] = useState<number>(0)

	const increaseInferred = () => setCountInferred((prev) => prev + 1)
	const decreaseInferred = () =>
		setCountInferred((prev) => Math.max(0, prev - 1))

	const increaseExplicit = () => setCountExplicit((prev) => prev + 1)
	const decreaseExplicit = () =>
		setCountExplicit((prev) => Math.max(0, prev - 1))

	return (
		<main className="counter-page">
			<h1>Bai 2 - Counter</h1>
			<p className="subtitle">Tang, giam va khong cho gia tri nho hon 0.</p>

			<section className="counter-card">
				<h2>useState suy luan kieu</h2>
				<p className="value">{countInferred}</p>
				<div className="actions">
					<button onClick={decreaseInferred}>- Giam</button>
					<button onClick={increaseInferred}>+ Tang</button>
				</div>
			</section>

			<section className="counter-card">
				<h2>useState&lt;number&gt; tuong minh</h2>
				<p className="value">{countExplicit}</p>
				<div className="actions">
					<button onClick={decreaseExplicit}>- Giam</button>
					<button onClick={increaseExplicit}>+ Tang</button>
				</div>
			</section>
		</main>
	)
}

export default App
