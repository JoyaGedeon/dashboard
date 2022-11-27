import { Navbar } from "../../components/LandingNav/navbar"
import './aboutus.css'
const AboutUs = () => {
	return (
		<div>
			{/* <Navbar/> */}
			<h1>About Us</h1>
			<main style={{display:"flex"}}>
				<section class="aboutus" style={{flex: "50%"}}>
					<h2>Our Mission</h2>
					<p style={{margin: "0 3vh"}}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Fermentum et sollicitudin ac orci phasellus egestas
					tellus rutrum tellus. Turpis nunc eget lorem dolor sed viverra
					ipsum nunc aliquet. Porta non pulvinar neque laoreet suspendisse
					interdum consectetur. Sit amet nisl suscipit adipiscing bibendum.
					Fringilla phasellus faucibus scelerisque eleifend donec pretium
					vulputate. In mollis nunc sed id semper risus in. Fermentum
					et sollicitudin ac orci phasellus egestas tellus rutrum. Ut
					aliquam purus sit amet luctus venenatis. Euismod nisi porta
					lorem mollis aliquam ut.
					</p>
				</section>

				<section class="aboutus" style={{flex: "50%"}}>
					<h2>Our Team</h2>
					<p style={{margin: "0 3vh"}}>
					Egestas maecenas pharetra convallis posuere morbi leo. Lectus
					urna duis convallis convallis tellus id interdum. Bibendum neque
					egestas congue quisque egestas diam. At erat pellentesque adipiscing
					commodo elit at imperdiet dui. Feugiat sed lectus vestibulum mattis
					ullamcorper velit sed ullamcorper morbi. Massa vitae tortor
					condimentum lacinia quis. Vitae aliquet nec ullamcorper sit amet
					risus. Enim eu turpis egestas pretium aenean pharetra magna ac.
					Tortor pretium viverra suspendisse potenti nullam ac tortor.
					Pretium viverra suspendisse potenti nullam ac tortor vitae.
					</p>
				</section>
			</main>
		</div>
	)
}

export default AboutUs
