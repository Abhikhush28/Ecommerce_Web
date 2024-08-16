import React from 'react';
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";





import CountryDropdown from '../CountryDropdown';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <>
      <div className='headerWrapper'>
        <div className="top-strip bg-purple">
          <div className='container'>
            <p className='mb-0 mt-0 text-center'>Due to <b>COVID 19</b> epidemic, orders may be processed with a slight delay.</p>
          </div>
        </div>

        <header className="header">
          <div className='container'>
            <div className="row">
              <div className='logoWrapper d-flex align-items-center col-sm-2 '>
                <Link to="/"><img src={Logo} alt="Logo" /></Link>
              </div>

              <div className='col-sm-10 d-flex align-items-center part2'>

               <CountryDropdown/>

               {/* Header Search Start Here */}
               <div className='headerSearch ml-3 mr-3'>
                <input type="text" placeholder='Search For Product'/>
                <Button> <IoSearch/> </Button>
               </div>
                {/* Header Search Start Here */}

                <div className='d-flex align-items-center part3 ml-auto'>
                  <Button className='circle mr-3 '>
                      <FaRegCircleUser />
                  </Button>

                  <div className='ml-auto cartTab d-flex align-items-center'>
                    <span className='price'>$3.26</span>
                   <div className='position-relative ml-2'>
                   <Button className='circle ml-2'> <IoBagOutline /></Button>
                   <span className='count d-flex align-items-center justify-content-center'>1</span>
                   </div>
                  </div>
                </div>
              </div>

            </div>



          </div>
        </header>

      </div>
    </>
  )
}

export default Header;
