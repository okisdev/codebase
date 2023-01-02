import Link from 'next/link';

import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineBookOpen, HiOutlinePhotograph, HiOutlineDocumentDuplicate } from 'react-icons/hi';

const navbarItems = [
    { id: 1, name: 'Home', link: 'https://www.harrly.com', icon: AiOutlineHome },
    { id: 2, name: 'Blog', link: 'https://www.harrly.com/blog', icon: HiOutlineBookOpen },
    { id: 3, name: 'Photo', link: 'https://www.harrly.com/photo', icon: HiOutlinePhotograph },
    { id: 4, name: 'Docs', link: 'https://docs.okis.dev', icon: HiOutlineDocumentDuplicate },
];

const Navbar = () => {
    return (
        <div className='p-3 rounded-full'>
            <div className='flex justify-center items-center space-x-3'>
                {navbarItems.map((item) => {
                    return (
                        <div key={item.id} className='px-3 rounded-full transition ease-in-out duration-500 hover:text-yellow-400 dark:hover:text-yellow-600'>
                            <Link href={item.link} passHref legacyBehavior>
                                <a title={item.name}>
                                    <item.icon className='w-6 h-6' />
                                </a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;
