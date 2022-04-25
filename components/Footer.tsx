import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='container mx-auto leading-loose py-10 w-11/12'>
            <div className='text-center'>
                <p>Copyright &#169; {currentYear} Harry Yep. All rights reserved.</p>
                <p className='inline-flex items-center justify-center'>
                    <span>Made by Harry Yep with</span> <AiFillHeart className='text-red-600 mx-1' />
                </p>
            </div>
        </div>
    );
};

export default Footer;
