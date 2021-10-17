import LogoFooter from 'assets/logo-footer.png';
import InstagramOutlined from '@ant-design/icons/InstagramOutlined';
import FacebookOutlined from '@ant-design/icons/FacebookOutlined';

const Footer = () => {
  return (
    <div className='grid grid-cols-12 pt-12 pb-12'>
      <div className='col-span-2'></div>
      <div className='flex col-span-8 lg:space-x-20'>
        <div>
          <img src={LogoFooter} alt='footer-logo'></img>
        </div>
        <div className='flex pb-20 border-b border-info border-opacity-30 lg:space-x-10'>
          <div>
            <h2 className='text-sm text-white'>Service</h2>
            <ul className='flex flex-col mt-5 space-y-2'>
              <li>
                <p className='text-xs cursor-pointer text-info hover:text-white'>
                  Announcement Center
                </p>
              </li>
              <li>
                <p className='text-xs cursor-pointer text-info hover:text-white'>
                  Beginner's Guide
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-sm text-white'>About Goko</h2>
            <ul className='flex flex-col mt-5 space-y-2'>
              <li>
                <p className='text-xs cursor-pointer text-info hover:text-white'>
                  app Download
                </p>
              </li>
              <li>
                <p className='text-xs cursor-pointer text-info hover:text-white'>
                  About Goko
                </p>
              </li>
              <li>
                <p className='text-xs cursor-pointer text-info hover:text-white'>
                  Help Center
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-sm text-white'>Terms and Conditions</h2>
            <ul className='flex flex-col mt-5 space-y-2'>
              <li>
                <p className='text-xs cursor-pointer text-info hover:text-white'>
                  User Agreement
                </p>
              </li>
              <li>
                <p className='text-xs cursor-pointer text-info hover:text-white'>
                  Privacy Policy
                </p>
              </li>
              <li>
                <p className='text-xs cursor-pointer text-info hover:text-white'>
                  Legal Notices
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-sm text-white'>Tools</h2>
            <ul className='flex flex-col mt-5 space-y-2'>
              <li>
                <p className='text-xs cursor-pointer text-info hover:text-white'>
                  API Documentation
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-sm text-white'>Social Media</h2>
            <ul className='flex justify-end mt-5 space-x-2'>
              <li>
                <p className='text-xl cursor-pointer text-info hover:text-white'>
                  <FacebookOutlined />
                </p>
              </li>
              <li>
                <p className='text-xl cursor-pointer text-info hover:text-white'>
                  <InstagramOutlined />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-span-2'></div>
      <div className='flex justify-center col-span-12 mt-5'>
        <div className='text-sm text-info '>
          Copyright © 2019 Goko. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
