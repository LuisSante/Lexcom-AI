import { Header } from "../Header";
import { NavbarItems } from "../logic/component_home/NavbarItems";

const Navbar: React.FC = () => {
    return (
        <Header items={NavbarItems} />
    );
}
export default Navbar;  