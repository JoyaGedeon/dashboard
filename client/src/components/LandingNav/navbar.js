import "./navbar.css";

const NavBar = () => {
    const webRoutes = [
        { name: `LandingPage`, path: `/` },
        { name: `AboutUs`, path: `/aboutus` },
        { name: `PaymentPlan`, path: `/paymentplan` },
        { name: `Login`, path: `/login` }
    ];

    return (
        <nav>
            <ul>
                {webRoutes.map((page, index) => (
                    <li key={index}>
                        <a href={page.path}>{page.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;
