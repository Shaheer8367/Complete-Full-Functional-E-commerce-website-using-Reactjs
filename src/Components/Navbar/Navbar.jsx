import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Armchair, Check, Info, Search ,ShoppingCart ,Heart,User ,Menu} from 'lucide-react';

const Navbar = () => {
  return (
    <div>
      {/* navbar_top */}
      <div className="navbar_top flex items-center justify-center bg-gray-800 h-[45px] w-full">
        <div className="lg:container flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
            <Check /> Free Shipping on Orders Over $50
          </p>

          <div className="navbar_top_right flex items-center gap-6">
            <select
              defaultValue="Server location"
              className="bg-black h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white"
            >
              <option>emg</option>
              <option>North</option>
            </select>

            <Link className="text-sm text-white font-inter font-normal capitalize">Faqs</Link>
            <Link className="flex items-center text-sm text-white font-inter font-normal capitalize">
              <Info /> need help
            </Link>
          </div>
        </div>
      </div>

      {/* navbar middle */}
      <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
        <div className="lg:container grid grid-cols-3 items-center">

          {/* Left: Logo */}
          <div className="logo_wrapper">
            <Link to="/" className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2" >
              <Armchair size="2rem" color="#029fae" /> comforty </Link>
          </div>

          {/* Center: Search */}
          <div className="search_box flex justify-center">
            <form action="#" className="w-full max-w-96 h-[44px] relative">
              <input
                type="text"
                placeholder="Search here..."
                className="max-w-[443px] w-full h-full bg-white rounded-lg pl-4"
              />

            <button className='absolute to-50% right-4 translate-y-1/2'> <Search size='22px' color='#272343'/></button> 
            </form>
          </div>

            {/* navbar middle right */}
              <div className="navbar_middle_rightn flex items-center  gap-4">
                <button className="btn capitalize ">
                        <ShoppingCart /> cart <div className="badge badge-sm bg-[#029fae]">2</div>
                 </button>

                   <button className="btn capitalize ">
                        <Heart /> 
                 </button>
                 
             <div className="dropdown">
                 <div tabIndex={0} role="button" className="btn m-1"><User /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                         <li><a><Link>Account</Link></a></li>
                         <li><a><Link>Logout</Link></a></li>
                   </ul>
              </div>
        </div>
    </div>
 </div>


       {/* navbar_bottom */}
         <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
              <div className="lg:container flex items-center justify-between">

                <div className="navbar_bottom_left flex items-center gap-8">

                  <div className="dropdown dropdown-start">
                      <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize" ><Menu />all categories</div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                           <li><a>Chair</a></li>
                           <li><a>Pant</a></li>
                           <li><a>Shirt</a></li>
                           <li><a>T-Shirt</a></li>
                           <li><a>T-Shirt</a></li>
                       </ul>
                 </div>


                      <nav className='flex items-center gap-8'>
                        <NavLink to='/' className='text-sm  text-[#029fac] font-inter font-medium capitalize'>Home</NavLink>
                        <NavLink className='text-sm  text-[#636270] font-inter font-medium capitalize'>Shop</NavLink>
                        <NavLink className='text-sm  text-[#636270] font-inter font-medium capitalize'>Product</NavLink>
                        <NavLink className='text-sm  text-[#636270] font-inter font-medium capitalize'>Pages</NavLink>
                        <NavLink className='text-sm  text-[#636270] font-inter font-medium capitalize'>About</NavLink>  
                    </nav>
                </div>
                    
                  
                <div className="navbar_bottom_right">
                     <p className='text-sm  text-[#636270] font-inter font-normal capitalize'>contact: <span className='text-[#272343] '>(808)555-001</span></p>

                </div>
                   






              </div>

          </div>
    </div>
  );
};

export default Navbar;
