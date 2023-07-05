import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="pt-4  border-t-2 bg-[#F3F3F3]  px-20">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 py-20">

        <div className="sm:col-span-2">
            <Link to='/' className="inline-flex items-center">
                <img src="/src/assets/logo.svg" alt="logo" className="h-8 w-8"/>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800"><span className="text-main">Doc</span> House</span>
            </Link>
            <div className="mt-6 lg:max-w-xl">
                <p className="text-sm text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis mi, faucibus dignissim lorem
                    id, imperdiet interdum mauris. Vestibulum ultrices sed libero non porta. Vivamus malesuada urna eu
                    nibh malesuada, non finibus massa laoreet. Nunc nisi velit, feugiat a semper quis, pulvinar id
                    libero. Vivamus mi diam, consectetur non orci ut, tincidunt pretium justo. In vehicula porta
                    molestie. Suspendisse potenti. 
                    </p>
            </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">Popular Courses</p>
            <a href="#">UPSC - Union Public Service Commission</a>
            <a href="#">General Knowledge</a>
            <a href="#">MBA</a>
            <p className="text-base font-bold tracking-wide text-gray-900">Popular Topics</p>
            <a href="#">Human Resource Management</a>
            <a href="#">Operations Management</a>
            <a href="#">Marketing Management</a>
        </div>

        <div>
            <p className="text-base font-bold tracking-wide text-gray-900">COMPANY IS ALSO AVAILABLE ON</p>
            <div className="flex items-center gap-1 px-2">
              
                <Link className="w-full min-w-xl" to="https://www.facebook.com">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-logo-2019-1597680-1350125.png?f=avif&w=256" alt="Youtube Button"
                        className="h-10"/>
                </Link>
            </div>
            <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a href="#" title="send email">admin@company.com</a>
            </div>
        </div>

    </div>

    <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Copyright {new Date().getFullYear()} Company. All rights reserved.</p>
        
    </div>

</footer>
    );
};

export default Footer;