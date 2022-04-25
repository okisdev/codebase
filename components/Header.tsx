import { FaCode } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='container mx-auto leading-loose py-10 w-11/12 md:w-6/12'>
            <div className='flex items-center space-x-3'>
                <FaCode className='w-8 h-8' />
                <p className='text-3xl font-bold'>Harry Yep's Code Base</p>
                <FaCode className='w-8 h-8' />
            </div>
        </div>
    );
};

export default Header;
