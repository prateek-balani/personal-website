import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='bg-[#C0C0C0] border-b-2 border-r-2 border-white flex items-center gap-2 '>
            <menu role="tablist" className='flex gap-8 p-0'>
                <li role="tab"><Link className="button" to="/">Home</Link></li>
                <li role="tab"><Link className="button" to="/recruiters">Recruiters</Link></li>
                <li role="tab"><Link className="button" to="">Developers</Link></li>
                <li role="tab"><Link className="button" to="">Contact me</Link></li>
            </menu>
        </nav>
    );

}
export default Navbar;