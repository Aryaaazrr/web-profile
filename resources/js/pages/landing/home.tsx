import { AuroraText } from '@/components/animations/magicui/aurora-text';
import ProfileCard from '@/components/animations/ProfileCard';
import TextType from '@/components/animations/type-text';
import LoadingScreen from '@/components/loading-screen';
import { GUEST_NAVIGATION_ITEMS } from '@/config/navigation';
import GuestLayout from '@/layouts/guest.layout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const initializeData = async () => {
            setLoading(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 2500));
            } catch (error) {
                console.error('Error during initialization:', error);
            } finally {
                setLoading(false);
            }
        };

        initializeData();
    }, []);

    return (
        <GuestLayout navigationItems={[...GUEST_NAVIGATION_ITEMS]}>
            <LoadingScreen isLoading={loading} />

            <Head title="Home">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <section className="flex items-center justify-center lg:py-24">
                <div className="grid gap-4 md:grid-cols-3 md:items-center md:gap-8 xl:gap-20">
                    <div className="col-span-2">
                        <div className="space-y-4 md:space-y-6">
                            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                                Hello everyone👋, I'am <AuroraText>Achmad Zakariya</AuroraText>
                            </h1>
                            <TextType
                                text={['Fullstack Web Developer', 'Freelance Programmer', 'Happy coding!']}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                textColors={['#4B5563', '#1F2937', '#111827']}
                                className="text-xl font-semibold md:text-2xl lg:text-3xl"
                            />
                        </div>
                        <p className="mt-3 max-w-2xl text-lg text-gray-800 dark:text-neutral-400">
                            Others won't understand our struggles and hardships; they only want to hear the success stories. Fight for yourself, even
                            if no one applauds. Our future selves will be incredibly proud of what we've achieved today.
                        </p>

                        {/* Buttons */}
                        <div className="mt-7 grid w-full gap-3 sm:inline-flex">
                            <a
                                className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                                href="#"
                            >
                                Get started
                                <svg
                                    className="size-4 shrink-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-2xs hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                            >
                                Contact sales team
                            </a>
                        </div>
                        {/* End Buttons */}
                        {/* End Review */}
                    </div>
                    {/* End Col */}

                    <div className="overflow-x-hidden- flex w-full items-center justify-end">
                        <ProfileCard
                            name="Achmad Zakariya"
                            title="Fullstack Web Developer"
                            handle="achmdzkry_"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl="/assets/img/foto-formal.png"
                            className="text-xs"
                            showUserInfo={true}
                            enableTilt={true}
                            enableMobileTilt={true}
                        />
                    </div>

                    {/* End Col */}
                </div>
                {/* End Grid */}
            </section>

            {/* Features */}
            <div className=" lg:py-14">
                {/* Grid */}
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div>
                        <img
                            className="rounded-xl"
                            src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
                            alt="Features Image"
                        />
                    </div>
                    {/* End Col */}

                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">
                            {/* Title */}
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-neutral-200">
                                    We tackle the challenges start-ups face
                                </h2>
                                <p className="text-gray-500 dark:text-neutral-500">
                                    Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for
                                    common pain points that we have encountered in various products and projects.
                                </p>
                            </div>
                            {/* End Title */}

                            {/* List */}
                            <ul className="space-y-2 sm:space-y-4">
                                <li className="flex gap-x-3">
                                    <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg
                                            className="size-3.5 shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <div className="grow">
                                        <span className="text-sm text-gray-500 sm:text-base dark:text-neutral-500">
                                            <span className="font-bold">Easy & fast</span> designing
                                        </span>
                                    </div>
                                </li>

                                <li className="flex gap-x-3">
                                    <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg
                                            className="size-3.5 shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <div className="grow">
                                        <span className="text-sm text-gray-500 sm:text-base dark:text-neutral-500">
                                            Powerful <span className="font-bold">features</span>
                                        </span>
                                    </div>
                                </li>

                                <li className="flex gap-x-3">
                                    <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg
                                            className="size-3.5 shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <div className="grow">
                                        <span className="text-sm text-gray-500 sm:text-base dark:text-neutral-500">User Experience Design</span>
                                    </div>
                                </li>
                            </ul>
                            {/* End List */}
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Features */}

            {/* Card Blog */}
            <div className=" lg:py-14">
                {/* Title */}
                <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">The Blog</h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                        See how game-changing companies are making the most of every engagement with Preline.
                    </p>
                </div>
                {/* End Title */}

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    <a
                        className="group flex h-full flex-col rounded-xl border border-gray-200 p-5 transition duration-300 hover:border-transparent hover:shadow-lg focus:border-transparent focus:shadow-lg focus:outline-hidden dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
                        href="#"
                    >
                        <div className="aspect-w-16 aspect-h-11">
                            <img
                                className="w-full rounded-xl object-cover"
                                src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                alt="Blog Image"
                            />
                        </div>
                        <div className="my-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                                Announcing a free plan for small teams
                            </h3>
                            <p className="mt-5 text-gray-600 dark:text-neutral-400">
                                At Wake, our mission has always been focused on bringing openness.
                            </p>
                        </div>
                        <div className="mt-auto flex items-center gap-x-3">
                            <img
                                className="size-8 rounded-full"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Avatar"
                            />
                            <div>
                                <h5 className="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a
                        className="group flex h-full flex-col rounded-xl border border-gray-200 p-5 transition duration-300 hover:border-transparent hover:shadow-lg focus:border-transparent focus:shadow-lg focus:outline-hidden dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
                        href="#"
                    >
                        <div className="aspect-w-16 aspect-h-11">
                            <img
                                className="w-full rounded-xl object-cover"
                                src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                alt="Blog Image"
                            />
                        </div>
                        <div className="my-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                                How Google Assistant now helps you record stories for kids
                            </h3>
                            <p className="mt-5 text-gray-600 dark:text-neutral-400">
                                Google is constantly updating its consumer AI, Google Assistant, with new features.
                            </p>
                        </div>
                        <div className="mt-auto flex items-center gap-x-3">
                            <img
                                className="size-8 rounded-full"
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Avatar"
                            />
                            <div>
                                <h5 className="text-sm text-gray-800 dark:text-neutral-200">By Aaron Larsson</h5>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a
                        className="group flex h-full flex-col rounded-xl border border-gray-200 p-5 transition duration-300 hover:border-transparent hover:shadow-lg focus:border-transparent focus:shadow-lg focus:outline-hidden dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
                        href="#"
                    >
                        <div className="aspect-w-16 aspect-h-11">
                            <img
                                className="w-full rounded-xl object-cover"
                                src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                alt="Blog Image"
                            />
                        </div>
                        <div className="my-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                                Front accounts - let's work together
                            </h3>
                            <p className="mt-5 text-gray-600 dark:text-neutral-400">Are you an accountant? Are you a company formation advisor?</p>
                        </div>
                        <div className="mt-auto flex items-center gap-x-3">
                            <img
                                className="size-8 rounded-full"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Avatar"
                            />
                            <div>
                                <h5 className="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Grid */}

                {/* Card */}
                <div className="mt-12 text-center">
                    <a
                        className="inline-flex items-center gap-x-1 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-blue-600 shadow-2xs hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                    >
                        Read more
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                </div>
                {/* End Card */}
            </div>
            {/* End Card Blog */}

            {/* Clients */}
            <div className=" lg:py-14">
                {/* Title */}
                <div className="mx-auto mb-6 text-center sm:w-1/2 xl:w-1/3">
                    <h2 className="text-xl font-semibold text-gray-800 md:text-2xl md:leading-tight dark:text-neutral-200">
                        Trusted by Open Source, enterprise, and more than 99,000 of you
                    </h2>
                </div>
                {/* End Title */}

                {/* Grid */}
                <div className="my-8 grid grid-cols-3 gap-6 sm:flex sm:justify-center sm:gap-x-12 md:my-16 lg:gap-x-20">
                    <a className="shrink-0 transition hover:-translate-y-1" href="#">
                        <svg
                            className="mx-auto size-6 sm:mx-0 md:size-10"
                            width="48"
                            height="55"
                            viewBox="0 0 48 55"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M48 27.3522C48 24.1724 44.0179 21.159 37.9128 19.2902C39.3216 13.0677 38.6955 8.11699 35.9364 6.53199C35.3004 6.1602 34.5569 5.98409 33.7448 5.98409V8.16591C34.1949 8.16591 34.5569 8.25396 34.8602 8.42029C36.1908 9.18344 36.768 12.0893 36.318 15.8267C36.2104 16.7464 36.0342 17.715 35.819 18.7032C33.9013 18.2336 31.8076 17.8716 29.6062 17.6368C28.2854 15.8267 26.9156 14.183 25.5361 12.7448C28.7256 9.78026 31.7195 8.15612 33.7546 8.15612V5.9743C31.064 5.9743 27.5418 7.89196 23.9804 11.2185C20.4191 7.91152 16.8969 6.01344 14.2063 6.01344V8.19526C16.2316 8.19526 19.2352 9.80961 22.4248 12.7546C21.055 14.1928 19.6853 15.8267 18.384 17.6368C16.1729 17.8716 14.0791 18.2336 12.1614 18.713C11.9364 17.7346 11.7701 16.7856 11.6527 15.8756C11.1928 12.1382 11.7603 9.23236 13.0811 8.45942C13.3746 8.28331 13.7562 8.20504 14.2063 8.20504V6.02322C13.3844 6.02322 12.6408 6.19933 11.9951 6.57112C9.24582 8.15612 8.62943 13.097 10.0481 19.3C3.96249 21.1785 0 24.1822 0 27.3522C0 30.532 3.98206 33.5454 10.0872 35.4142C8.67835 41.6368 9.30453 46.5874 12.0636 48.1724C12.6996 48.5442 13.4431 48.7203 14.265 48.7203C16.9556 48.7203 20.4778 46.8027 24.0391 43.4761C27.6005 46.7831 31.1227 48.6812 33.8133 48.6812C34.6351 48.6812 35.3787 48.5051 36.0245 48.1333C38.7737 46.5483 39.3901 41.6074 37.9715 35.4044C44.0375 33.5357 48 30.5222 48 27.3522V27.3522ZM35.2613 20.8263C34.8993 22.0884 34.4492 23.3897 33.9405 24.691C33.5393 23.9083 33.1186 23.1255 32.6588 22.3428C32.2087 21.5601 31.7293 20.797 31.2499 20.0534C32.6392 20.2589 33.9796 20.5132 35.2613 20.8263ZM30.7803 31.2462C30.0171 32.567 29.2344 33.8194 28.4223 34.9837C26.9645 35.1109 25.4872 35.1794 24 35.1794C22.5226 35.1794 21.0453 35.1109 19.5972 34.9935C18.7852 33.8292 17.9927 32.5866 17.2295 31.2756C16.4859 29.9939 15.8108 28.6926 15.1945 27.3816C15.8011 26.0705 16.4859 24.7595 17.2197 23.4778C17.9829 22.1569 18.7656 20.9046 19.5777 19.7403C21.0355 19.6131 22.5128 19.5446 24 19.5446C25.4774 19.5446 26.9547 19.6131 28.4028 19.7305C29.2148 20.8948 30.0073 22.1374 30.7705 23.4484C31.5141 24.7301 32.1892 26.0314 32.8055 27.3424C32.1892 28.6535 31.5141 29.9645 30.7803 31.2462ZM33.9405 29.9743C34.4688 31.2854 34.9189 32.5964 35.2907 33.8683C34.009 34.1814 32.6588 34.4456 31.2597 34.651C31.7391 33.8977 32.2185 33.1247 32.6686 32.3322C33.1186 31.5495 33.5393 30.757 33.9405 29.9743ZM24.0196 40.4138C23.1097 39.4745 22.1998 38.4276 21.2996 37.2829C22.1802 37.322 23.0803 37.3514 23.9902 37.3514C24.9099 37.3514 25.8198 37.3318 26.7102 37.2829C25.8296 38.4276 24.9197 39.4745 24.0196 40.4138ZM16.7403 34.651C15.351 34.4456 14.0106 34.1912 12.7289 33.8781C13.0909 32.616 13.541 31.3147 14.0497 30.0134C14.4509 30.7962 14.8716 31.5789 15.3314 32.3616C15.7913 33.1443 16.2609 33.9074 16.7403 34.651ZM23.9707 14.2907C24.8806 15.2299 25.7905 16.2768 26.6906 17.4215C25.81 17.3824 24.9099 17.353 24 17.353C23.0803 17.353 22.1704 17.3726 21.2801 17.4215C22.1606 16.2768 23.0705 15.2299 23.9707 14.2907ZM16.7305 20.0534C16.2511 20.8068 15.7717 21.5797 15.3216 22.3722C14.8716 23.1549 14.4509 23.9376 14.0497 24.7203C13.5214 23.4093 13.0713 22.0982 12.6996 20.8263C13.9812 20.523 15.3314 20.2589 16.7305 20.0534V20.0534ZM7.87607 32.3029C4.41256 30.8255 2.17203 28.8883 2.17203 27.3522C2.17203 25.8161 4.41256 23.8691 7.87607 22.4015C8.71749 22.0395 9.63718 21.7167 10.5862 21.4134C11.1439 23.331 11.8777 25.3269 12.7876 27.3718C11.8875 29.4068 11.1635 31.393 10.6156 33.3008C9.64696 32.9975 8.72727 32.6649 7.87607 32.3029ZM13.1398 46.2841C11.8092 45.521 11.232 42.6152 11.682 38.8777C11.7896 37.958 11.9658 36.9894 12.181 36.0012C14.0987 36.4708 16.1924 36.8328 18.3938 37.0677C19.7146 38.8777 21.0844 40.5214 22.4639 41.9596C19.2744 44.9242 16.2805 46.5483 14.2454 46.5483C13.8051 46.5385 13.4333 46.4505 13.1398 46.2841V46.2841ZM36.3473 38.8288C36.8072 42.5662 36.2397 45.4721 34.9189 46.245C34.6254 46.4211 34.2438 46.4994 33.7937 46.4994C31.7684 46.4994 28.7648 44.885 25.5752 41.9401C26.945 40.5018 28.3147 38.8679 29.616 37.0579C31.8272 36.8231 33.9209 36.4611 35.8386 35.9816C36.0636 36.9698 36.2397 37.9189 36.3473 38.8288V38.8288ZM40.1141 32.3029C39.2727 32.6649 38.353 32.9878 37.404 33.2911C36.8463 31.3734 36.1125 29.3775 35.2026 27.3326C36.1027 25.2976 36.8267 23.3114 37.3746 21.4036C38.3433 21.7069 39.2629 22.0395 40.1239 22.4015C43.5874 23.8789 45.828 25.8161 45.828 27.3522C45.8182 28.8883 43.5777 30.8353 40.1141 32.3029V32.3029Z"
                                fill="#61DAFB"
                            />
                            <path
                                d="M23.9898 31.8234C26.4592 31.8234 28.4611 29.8216 28.4611 27.3522C28.4611 24.8828 26.4592 22.8809 23.9898 22.8809C21.5204 22.8809 19.5186 24.8828 19.5186 27.3522C19.5186 29.8216 21.5204 31.8234 23.9898 31.8234Z"
                                fill="#61DAFB"
                            />
                        </svg>
                    </a>

                    <a className="shrink-0 transition hover:-translate-y-1" href="#">
                        <svg
                            className="mx-auto size-6 sm:mx-0 md:size-10"
                            width="48"
                            height="42"
                            viewBox="0 0 48 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1306_13)">
                                <path d="M38.3964 0H47.9955L23.9977 41.3961L0 0H18.3583L23.9977 9.5991L29.5172 0H38.3964Z" fill="#41B883" />
                                <path d="M0 0L23.9977 41.3961L47.9955 0H38.3964L23.9977 24.8377L9.47911 0H0Z" fill="#41B883" />
                                <path d="M9.479 0L23.9976 24.9576L38.3963 0H29.5171L23.9976 9.5991L18.3582 0H9.479Z" fill="#35495E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1306_13">
                                    <rect width="48" height="41.4336" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    <a className="shrink-0 transition hover:-translate-y-1" href="#">
                        <svg
                            className="mx-auto size-6 sm:mx-0 md:size-10"
                            width="48"
                            height="51"
                            viewBox="0 0 48 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1314_2)">
                                <path
                                    d="M0.0193481 8.53515L23.6078 0.130676L47.8314 8.38572L43.9092 39.5943L23.6078 50.8377L3.62395 39.7437L0.0193481 8.53515Z"
                                    fill="#E23237"
                                />
                                <path d="M47.8314 8.38572L23.6078 0.130676V50.8377L43.9092 39.6131L47.8314 8.38572V8.38572Z" fill="#B52E31" />
                                <path
                                    d="M23.6451 6.05121L8.94678 38.754L14.4376 38.6606L17.3886 31.2832H30.5742L33.8053 38.754L39.0533 38.8473L23.6451 6.05121ZM23.6826 16.5288L28.6505 26.9129H19.3121L23.6826 16.5288Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1314_2">
                                    <rect width="48" height="50.9987" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    <a className="shrink-0 transition hover:-translate-y-1" href="#">
                        <svg
                            className="mx-auto size-6 sm:mx-0 md:size-10"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.7298 40.1472C14.695 40.0857 14.6639 40.0221 14.6368 39.9568C14.4497 39.5235 14.3922 39.0453 14.4713 38.58H3.39139L19.8574 9.60244L25.2634 19.1057L26.8305 16.3324L22.1181 8.0309C21.8923 7.60574 21.5635 7.24396 21.1618 6.97863C20.7601 6.71331 20.2983 6.5529 19.8186 6.51208C19.3399 6.53384 18.877 6.68951 18.4824 6.96138C18.0878 7.23325 17.7774 7.6104 17.5865 8.04994L0.905195 37.3791C0.655848 37.7931 0.512082 38.2622 0.486543 38.7448C0.461003 39.2275 0.554474 39.7091 0.758732 40.1472C1.01527 40.5518 1.3799 40.8765 1.81137 41.0846C2.24285 41.2927 2.72396 41.3759 3.20026 41.3248H17.1721C16.6957 41.3766 16.2143 41.2938 15.7827 41.0856C15.351 40.8774 14.9865 40.5523 14.7305 40.1472H14.7298Z"
                                fill="#00C492"
                            />
                            <path
                                d="M46.852 37.3783L33.1438 13.2318C32.919 12.8021 32.5895 12.436 32.1858 12.1672C31.7821 11.8984 31.3173 11.7357 30.8341 11.6939C30.356 11.7146 29.8934 11.8693 29.499 12.1403C29.1046 12.4114 28.7943 12.7878 28.6035 13.2266L26.8306 16.3316L28.408 19.1056L30.8488 14.7843L44.4105 38.5793H39.2535C39.3194 38.9726 39.2823 39.3763 39.1459 39.751C39.1171 39.8338 39.0811 39.914 39.0382 39.9905L38.9943 40.0783C38.7141 40.474 38.3408 40.7946 37.9073 41.0118C37.4738 41.2289 36.9935 41.3359 36.5088 41.3233H44.576C45.0607 41.3363 45.5412 41.2295 45.9747 41.0123C46.4083 40.7951 46.7816 40.4743 47.0614 40.0783C47.2824 39.6537 47.3798 39.1756 47.3428 38.6984C47.3058 38.2211 47.1358 37.7638 46.852 37.3783V37.3783Z"
                                fill="#008776"
                            />
                            <path
                                d="M38.9949 40.0791L39.0389 39.9912C39.0815 39.9147 39.1173 39.8346 39.1458 39.7517C39.2823 39.377 39.3193 38.9734 39.2534 38.5801C39.1773 38.1559 39.025 37.749 38.8038 37.3791L28.4181 19.1057L26.8312 16.3324L25.2538 19.1057L14.8718 37.3791C14.6703 37.7534 14.5348 38.1597 14.4713 38.5801C14.3877 39.0442 14.4403 39.5226 14.6228 39.9575C14.6499 40.0228 14.681 40.0864 14.7159 40.1479C14.9725 40.5524 15.3372 40.8769 15.7686 41.0849C16.2001 41.2928 16.6811 41.3759 17.1574 41.3248H36.4941C36.9811 41.3392 37.4641 41.2331 37.9003 41.0159C38.3364 40.7987 38.7122 40.4772 38.9942 40.0798L38.9949 40.0791ZM26.8305 21.8797L36.3235 38.5793H17.3419L26.8305 21.8797Z"
                                fill="#2D4A5D"
                            />
                        </svg>
                    </a>

                    <a className="shrink-0 transition hover:-translate-y-1" href="#">
                        <svg
                            className="mx-auto size-6 sm:mx-0 md:size-10"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.4295 0.0375632C22.3263 0.0469373 21.9982 0.0797466 21.703 0.103182C14.8927 0.717184 8.51362 4.39183 4.47339 10.0397C2.22361 13.18 0.784692 16.7422 0.240995 20.5153C0.0488258 21.8323 0.0253906 22.2213 0.0253906 24.0071C0.0253906 25.7929 0.0488258 26.1819 0.240995 27.4989C1.54399 36.5028 7.95118 44.0676 16.641 46.8705C18.1971 47.372 19.8375 47.7142 21.703 47.9204C22.4295 48.0001 25.5698 48.0001 26.2963 47.9204C29.5163 47.5642 32.2441 46.7674 34.9345 45.3941C35.3469 45.1832 35.4266 45.1269 35.3704 45.08C35.3329 45.0519 33.5752 42.6943 31.4661 39.8446L27.6321 34.6654L22.8279 27.5552C20.1844 23.6462 18.0096 20.4496 17.9908 20.4496C17.9721 20.4449 17.9533 23.604 17.944 27.4615C17.9299 34.2155 17.9252 34.4873 17.8408 34.6467C17.719 34.8764 17.6252 34.9701 17.4284 35.0732C17.2784 35.1482 17.1472 35.1623 16.4394 35.1623H15.6286L15.413 35.0263C15.2723 34.9373 15.1692 34.8201 15.0989 34.6842L15.0005 34.4733L15.0099 25.0757L15.0239 15.6735L15.1692 15.4907C15.2442 15.3923 15.4036 15.2658 15.5161 15.2048C15.7082 15.1111 15.7832 15.1017 16.5941 15.1017C17.5502 15.1017 17.7096 15.1392 17.958 15.4111C18.0283 15.4861 20.6296 19.4044 23.7418 24.1243C26.854 28.8441 31.1099 35.2888 33.2003 38.4526L36.9968 44.2036L37.189 44.077C38.8903 42.9709 40.6902 41.396 42.115 39.7556C45.1475 36.2731 47.102 32.0266 47.7582 27.4989C47.9504 26.1819 47.9738 25.7929 47.9738 24.0071C47.9738 22.2213 47.9504 21.8323 47.7582 20.5153C46.4552 11.5114 40.048 3.94656 31.3583 1.14371C29.8256 0.646879 28.1945 0.304725 26.3666 0.0984947C25.9166 0.0516243 22.8185 6.68575e-05 22.4295 0.0375632V0.0375632ZM32.2441 14.5393C32.4691 14.6518 32.6519 14.8674 32.7175 15.0923C32.755 15.2142 32.7644 17.8202 32.755 23.6931L32.7409 32.1204L31.2552 29.8425L29.7647 27.5646V21.4386C29.7647 17.478 29.7834 15.2517 29.8115 15.1439C29.8865 14.8814 30.0506 14.6752 30.2756 14.5533C30.4677 14.4549 30.538 14.4455 31.2739 14.4455C31.9676 14.4455 32.0894 14.4549 32.2441 14.5393V14.5393Z"
                                fill="currentColor"
                                className="fill-black dark:fill-white"
                            />
                            <path
                                d="M36.7627 44.3067C36.5986 44.4098 36.5471 44.4801 36.6924 44.4004C36.7955 44.3395 36.9642 44.2129 36.9361 44.2083C36.922 44.2083 36.8423 44.2551 36.7627 44.3067ZM36.4393 44.5176C36.3549 44.5832 36.3549 44.5879 36.458 44.5363C36.5142 44.5082 36.5611 44.4754 36.5611 44.466C36.5611 44.4285 36.5377 44.4379 36.4393 44.5176ZM36.2049 44.6582C36.1205 44.7238 36.1205 44.7285 36.2237 44.677C36.2799 44.6488 36.3268 44.616 36.3268 44.6067C36.3268 44.5692 36.3033 44.5785 36.2049 44.6582ZM35.9706 44.7988C35.8862 44.8644 35.8862 44.8691 35.9893 44.8176C36.0455 44.7894 36.0924 44.7566 36.0924 44.7473C36.0924 44.7098 36.069 44.7191 35.9706 44.7988ZM35.6143 44.9863C35.4362 45.08 35.4456 45.1175 35.6237 45.0285C35.7034 44.9863 35.7643 44.9441 35.7643 44.9347C35.7643 44.9019 35.7596 44.9066 35.6143 44.9863Z"
                                fill="currentColor"
                                className="fill-black dark:fill-white"
                            />
                        </svg>
                    </a>

                    <a className="shrink-0 transition hover:-translate-y-1" href="#">
                        <svg
                            className="mx-auto size-6 sm:mx-0 md:size-10"
                            width="48"
                            height="50"
                            viewBox="0 0 48 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1314_6)">
                                <path
                                    d="M47.8876 11.3229C47.9054 11.3887 47.9145 11.4565 47.9146 11.5246V22.1123C47.9146 22.2481 47.8788 22.3816 47.8107 22.4992C47.7425 22.6168 47.6446 22.7143 47.5267 22.7819L38.6403 27.8982V38.0391C38.6403 38.3151 38.4936 38.5698 38.2543 38.7088L19.7047 49.3871C19.6622 49.4113 19.6159 49.4267 19.5696 49.4431C19.5522 49.4489 19.5358 49.4595 19.5175 49.4643C19.3878 49.4985 19.2515 49.4985 19.1219 49.4643C19.1006 49.4585 19.0813 49.447 19.0611 49.4392C19.0186 49.4238 18.9742 49.4103 18.9337 49.3871L0.387918 38.7088C0.270102 38.6411 0.172209 38.5436 0.104105 38.426C0.0360015 38.3084 9.33506e-05 38.175 0 38.0391L0 6.27612C0 6.20664 0.00964971 6.1391 0.0270192 6.07348C0.032809 6.05128 0.0463186 6.03102 0.0540383 6.00883C0.0685129 5.9683 0.0820225 5.9268 0.103252 5.88917C0.117726 5.86408 0.138956 5.84382 0.156325 5.82066C0.17852 5.78978 0.198784 5.75793 0.224838 5.73091C0.247032 5.70872 0.275982 5.69232 0.301071 5.67302C0.329055 5.64986 0.354144 5.62477 0.385988 5.60643H0.386953L9.66032 0.267251C9.77774 0.199684 9.91084 0.164124 10.0463 0.164124C10.1818 0.164124 10.3149 0.199684 10.4323 0.267251L19.7057 5.60643H19.7076C19.7385 5.62573 19.7645 5.64986 19.7925 5.67205C19.8176 5.69135 19.8456 5.70872 19.8678 5.72995C19.8948 5.75793 19.9141 5.78978 19.9373 5.82066C19.9537 5.84382 19.9759 5.86408 19.9894 5.88917C20.0116 5.92777 20.0241 5.9683 20.0395 6.00883C20.0473 6.03102 20.0608 6.05128 20.0666 6.07444C20.0843 6.1402 20.0934 6.20801 20.0936 6.27612V26.1149L27.8211 21.6655V11.5236C27.8211 11.4561 27.8307 11.3876 27.8481 11.3229C27.8548 11.2998 27.8674 11.2795 27.8751 11.2573C27.8905 11.2168 27.904 11.1753 27.9253 11.1376C27.9398 11.1126 27.961 11.0923 27.9774 11.0691C28.0005 11.0383 28.0198 11.0064 28.0469 10.9794C28.0691 10.9572 28.097 10.9408 28.1221 10.9215C28.1511 10.8983 28.1762 10.8732 28.207 10.8549H28.208L37.4823 5.51573C37.5997 5.44806 37.7328 5.41245 37.8683 5.41245C38.0038 5.41245 38.1369 5.44806 38.2543 5.51573L47.5277 10.8549C47.5605 10.8742 47.5856 10.8983 47.6145 10.9205C47.6387 10.9398 47.6666 10.9572 47.6888 10.9784C47.7159 11.0064 47.7352 11.0383 47.7583 11.0691C47.7757 11.0923 47.7969 11.1126 47.8104 11.1376C47.8326 11.1753 47.8452 11.2168 47.8606 11.2573C47.8693 11.2795 47.8818 11.2998 47.8876 11.3229V11.3229ZM46.3688 21.6655V12.8611L43.1236 14.7293L38.6403 17.3106V26.1149L46.3697 21.6655H46.3688ZM37.0954 37.5923V28.7821L32.6855 31.3007L20.0926 38.4878V47.381L37.0954 37.5923ZM1.54588 7.61261V37.5923L18.5467 47.38V38.4888L9.66514 33.4622L9.66225 33.4603L9.65839 33.4584C9.62847 33.441 9.60339 33.4159 9.5754 33.3947C9.55128 33.3754 9.52329 33.3599 9.50206 33.3387L9.50013 33.3358C9.47504 33.3117 9.45767 33.2818 9.43645 33.2548C9.41715 33.2287 9.39399 33.2065 9.37855 33.1795L9.37758 33.1766C9.36021 33.1477 9.3496 33.1129 9.33705 33.0801C9.32451 33.0512 9.3081 33.0241 9.30038 32.9933V32.9923C9.29073 32.9556 9.2888 32.917 9.28494 32.8794C9.28108 32.8504 9.27336 32.8215 9.27336 32.7925V12.0621L4.79108 9.47982L1.54588 7.61357V7.61261ZM10.0473 1.82857L2.32075 6.27612L10.0453 10.7237L17.7709 6.27516L10.0453 1.82857H10.0473ZM14.0654 29.585L18.5477 27.0047V7.61261L15.3025 9.48079L10.8192 12.0621V31.4541L14.0654 29.585ZM37.8683 7.07705L30.1428 11.5246L37.8683 15.9721L45.5929 11.5236L37.8683 7.07705ZM37.0954 17.3106L32.6121 14.7293L29.3669 12.8611V21.6655L33.8492 24.2458L37.0954 26.1149V17.3106ZM19.3187 37.1513L30.6504 30.6822L36.3147 27.4495L28.595 23.0048L19.7066 28.1221L11.6057 32.7858L19.3187 37.1513Z"
                                    fill="#FF2D20"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1314_6">
                                    <rect width="48" height="49.6278" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    <a className="shrink-0 transition hover:-translate-y-1" href="#">
                        <svg
                            className="mx-auto size-6 sm:mx-0 md:size-10"
                            width="48"
                            height="50"
                            viewBox="0 0 1280 1280"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clip-rule="evenodd"
                                d="M815.039 94.6439C824.758 106.709 829.714 122.99 839.626 155.553L1056.17 866.901C976.107 825.368 889.072 795.413 797.281 779.252L656.29 302.798C653.983 295.002 646.822 289.654 638.693 289.654C630.542 289.654 623.368 295.03 621.08 302.853L481.795 779.011C389.579 795.1 302.146 825.109 221.741 866.793L439.347 155.388L439.348 155.388C449.291 122.882 454.262 106.629 463.982 94.5853C472.562 83.9531 483.723 75.6958 496.4 70.6002C510.76 64.8284 527.756 64.8284 561.749 64.8284H717.174C751.212 64.8284 768.23 64.8284 782.603 70.6123C795.292 75.7184 806.459 83.9923 815.039 94.6439Z"
                                fill="url(#paint0_linear_709_11012gh4)"
                            />
                            <path
                                fillRule="evenodd"
                                clip-rule="evenodd"
                                d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z"
                                fill="#FF5D01"
                            />
                            <path
                                fillRule="evenodd"
                                clip-rule="evenodd"
                                d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z"
                                fill="url(#paint1_linear_709_1103afaw)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_709_11012gh4"
                                    x1="882.997"
                                    y1="27.1132"
                                    x2="638.955"
                                    y2="866.902"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0%" stopColor="#000014" />
                                    <stop offset="1" stopColor="#150426" />
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_709_1103afaw"
                                    x1="1001.68"
                                    y1="652.45"
                                    x2="790.326"
                                    y2="1094.91"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0%" stopColor="#FF1639" />
                                    <stop offset="1" stopColor="#FF1639" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>

                    <a className="shrink-0 transition hover:-translate-y-1" href="#">
                        <svg className="mx-auto size-6 sm:mx-0 md:size-10" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                            <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="70" height="70">
                                <path d="M62 0H8a8 8 0 0 0-8 8v54a8 8 0 0 0 8 8h54a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8Z" fill="#fff" />
                            </mask>
                            <g mask="url(#a)">
                                <path
                                    d="M69.8 70H.1V8a8 8 0 0 1 8-8h54a8 8 0 0 1 8 8v61.8l-.3.2Zm-12-24.2-.4-.4c-1.3-1.3-3-1.6-4.7-1.4-1.5 0-2.8.8-4 1.8l-.2-.1c0-.6-.2-1-.7-1.2-.4-.2-.9-.2-1.3 0-.5.4-.6.8-.6 1.3v12.8c0 .7.3 1.2.8 1.4 1 .2 1.8-.4 1.8-1.3v-8.3c0-.8.2-1.5.7-2.1 1.2-1.4 2.7-2 4.5-1.8.8.1 1.6.5 2 1.3.5.7.7 1.5.7 2.3v8.7c0 1 1 1.5 1.9 1 .5-.2.7-.7.7-1.3V49a6.3 6.3 0 0 0-1.2-3.1Zm-16.3-1.3c-.3-.1-.6-.2-1-.1-.6.2-1 .7-1 1.4V55a3 3 0 0 1-2 2.4 5 5 0 0 1-3.2.1 3 3 0 0 1-1.8-1.5c-.3-.5-.5-1-.5-1.7v-8.5c0-.8-.5-1.4-1.2-1.4-.9 0-1.5.5-1.5 1.4v8c0 1 .1 2 .5 2.9.7 1.7 2 2.7 3.7 3.3a8.4 8.4 0 0 0 5.9-.6c1.8-1 2.7-2.7 2.8-4.7v-9c0-.6-.3-1-.7-1.2Z"
                                    fill="#EFDA4F"
                                />
                                <path
                                    d="M57.8 45.8c.7 1 1 2 1.1 3.1l.1 1.9v7.7c0 .6-.2 1-.7 1.4-.9.4-1.9-.2-2-1.1V50c0-.8-.1-1.6-.6-2.3a2.7 2.7 0 0 0-2-1.3c-1.8-.2-3.3.4-4.5 1.8-.5.6-.7 1.3-.7 2v8.4c0 1-.8 1.5-1.8 1.3-.5-.2-.8-.7-.8-1.4V46c0-.6.1-1 .6-1.3.4-.3.9-.3 1.3-.1a1.3 1.3 0 0 1 .7 1.2c0 .1.2.2.2 0 1.2-1 2.5-1.6 4-1.7 1.8-.2 3.4 0 4.7 1.4l.4.4ZM40.5 44.4l1 .1c.5.2.7.7.7 1.2v9c-.1 2-1 3.6-2.8 4.7a8.4 8.4 0 0 1-5.8.6c-1.8-.6-3.1-1.6-3.8-3.3-.4-1-.5-1.9-.5-2.8v-8.1c0-1 .6-1.5 1.5-1.4.7 0 1.2.6 1.2 1.4v8.5c0 .6.2 1.2.5 1.7a3 3 0 0 0 1.8 1.5 5 5 0 0 0 3.3-.1 3 3 0 0 0 1.9-2.4V45.8c0-.7.4-1.2 1-1.4Z"
                                    fill="#000"
                                />
                            </g>
                        </svg>
                    </a>
                </div>
                {/* End Grid */}

                {/* Grid */}
                <div className="grid grid-cols-12 gap-6 sm:flex sm:justify-center sm:gap-x-12 lg:gap-x-20">
                    <div className="col-span-6 text-center">
                        <h4 className="text-xl font-semibold text-gray-800 md:text-3xl dark:text-neutral-200">250+</h4>
                        <h4 className="text-sm text-gray-600 dark:text-neutral-400">Components</h4>
                    </div>
                    {/* End Col */}

                    <div className="col-span-6 text-center">
                        <h4 className="text-xl font-semibold text-gray-800 md:text-3xl dark:text-neutral-200">160+</h4>
                        <h4 className="text-sm text-gray-600 dark:text-neutral-400">Starter Pages & Examples</h4>
                    </div>
                    {/* End Col */}

                    <div className="col-span-6 col-start-4 text-center">
                        <h4 className="text-xl font-semibold text-gray-800 md:text-3xl dark:text-neutral-200">10+</h4>
                        <h4 className="text-sm text-gray-600 dark:text-neutral-400">Tailwind CSS Plugins</h4>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Clients */}

            {/* Timeline */}
            <div>
                {/* Item */}
                <div className="group relative flex gap-x-5">
                    {/* Icon */}
                    <div className="relative after:absolute after:start-3 after:top-8 after:bottom-2 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
                        <div className="relative z-10 flex size-6 items-center justify-center">
                            <svg
                                className="size-6 shrink-0 text-gray-600 dark:text-neutral-400"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z"
                                    className="fill-black dark:fill-neutral-200"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z"
                                    className="fill-black dark:fill-neutral-200"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    {/* End Icon */}

                    {/* Right Content */}
                    <div className="grow pb-8 group-last:pb-0">
                        <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">2023 - Present</h3>

                        <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">Web Designer & Web Developer</p>

                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                            The company has high expectations and using OKRs there is a mutual understanding of expectations and performance.
                        </p>

                        <ul className="ms-6 mt-3 list-disc space-y-1.5">
                            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">Designed template UIs and design systems in Figma.</li>
                            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                Converted UIs into responsive HTML and CSS with a mobile-first approach.
                            </li>
                            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                Created custom illustrations and item description banners.
                            </li>
                            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                Provided detailed documentation and customer support on GitHub.
                            </li>
                            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                Engaged with users to address setup inquiries, bug issues, and feedback.
                            </li>
                        </ul>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Item */}

                {/* Item */}
                <div className="group relative flex gap-x-5">
                    {/* Icon */}
                    <div className="relative after:absolute after:start-3 after:top-8 after:bottom-2 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
                        <div className="relative z-10 flex size-6 items-center justify-center">
                            <svg
                                className="size-6 shrink-0 text-gray-600 dark:text-neutral-400"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_11766_122079)">
                                    <path
                                        d="M16 32C7.16 32 0 24.84 0 16C0 7.16 7.16 0 16 0C24.84 0 32 7.16 32 16C32 24.84 24.84 32 16 32Z"
                                        fill="#FFE01B"
                                    ></path>
                                    <path
                                        d="M11.72 19.28C11.74 19.3 11.74 19.34 11.72 19.38C11.64 19.52 11.48 19.6 11.32 19.58C11.02 19.54 10.8 19.3 10.82 19C10.82 18.8 10.86 18.62 10.92 18.42C11.02 18.18 10.92 17.92 10.72 17.78C10.6 17.7 10.44 17.68 10.3 17.7C10.16 17.72 10.04 17.82 9.96001 17.94C9.90001 18.04 9.86001 18.14 9.84001 18.24C9.84001 18.26 9.82001 18.28 9.82001 18.28C9.78001 18.4 9.70001 18.44 9.64001 18.44C9.62001 18.44 9.58001 18.42 9.56001 18.36C9.50001 18.02 9.62001 17.68 9.84001 17.42C10.04 17.2 10.32 17.1 10.62 17.14C10.92 17.18 11.2 17.38 11.32 17.66C11.46 18 11.42 18.38 11.24 18.7C11.22 18.72 11.22 18.76 11.2 18.78C11.14 18.9 11.12 19.06 11.2 19.18C11.26 19.26 11.34 19.3 11.44 19.3C11.48 19.3 11.52 19.3 11.56 19.28C11.64 19.24 11.7 19.24 11.72 19.28ZM24.94 19.6C24.92 20.22 24.78 20.82 24.56 21.4C23.44 24.1 20.76 25.6 17.56 25.5C14.58 25.42 12.04 23.84 10.94 21.26C10.24 21.24 9.56001 20.96 9.06001 20.5C8.52001 20.04 8.18001 19.4 8.10001 18.7C8.04001 18.22 8.10001 17.74 8.28001 17.28L7.66001 16.76C4.78001 14.36 13.72 4.4 16.56 6.9C16.58 6.92 17.54 7.86 17.54 7.86C17.54 7.86 18.06 7.64 18.08 7.64C20.58 6.6 22.62 7.1 22.62 8.76C22.62 9.62 22.08 10.62 21.2 11.54C21.56 11.9 21.8 12.34 21.92 12.82C22.02 13.16 22.06 13.5 22.08 13.86C22.1 14.22 22.12 15.04 22.12 15.04C22.14 15.04 22.4 15.12 22.48 15.14C23 15.26 23.46 15.48 23.86 15.82C24.08 16.02 24.2 16.3 24.26 16.58C24.32 16.96 24.22 17.34 24 17.64C24.06 17.78 24.1 17.9 24.16 18.04C24.24 18.28 24.28 18.48 24.3 18.5C24.52 18.54 24.94 18.86 24.94 19.6ZM12.34 18.12C12.14 16.86 11.3 16.42 10.72 16.38C10.58 16.38 10.44 16.38 10.28 16.42C9.26001 16.62 8.66001 17.5 8.78001 18.64C8.96001 19.7 9.82001 20.5 10.88 20.56C10.98 20.56 11.08 20.56 11.18 20.54C12.24 20.38 12.5 19.24 12.34 18.12ZM14.1 10.12C14.98 9.4 15.9 8.76 16.88 8.2C16.88 8.2 16.1 7.3 15.86 7.22C14.42 6.82 11.3 8.98 9.30001 11.84C8.50001 13 7.34001 15.04 7.90001 16.08C8.10001 16.32 8.32001 16.52 8.56001 16.72C8.92001 16.2 9.48001 15.84 10.12 15.72C10.9 13.54 12.28 11.6 14.1 10.12ZM17.22 20.1C17.3 20.44 17.56 20.72 17.9 20.8C18.08 20.86 18.24 20.92 18.44 20.94C20.72 21.34 22.86 20.02 23.34 19.7C23.38 19.68 23.4 19.7 23.38 19.74C23.36 19.76 23.34 19.78 23.34 19.8C22.76 20.56 21.18 21.44 19.12 21.44C18.22 21.44 17.32 21.12 17 20.64C16.48 19.88 16.98 18.78 17.82 18.9C17.82 18.9 18.12 18.94 18.2 18.94C19.52 19.06 20.86 18.86 22.08 18.32C23.24 17.78 23.68 17.18 23.62 16.7C23.6 16.56 23.52 16.42 23.42 16.3C23.1 16.04 22.72 15.86 22.32 15.78C22.14 15.72 22.02 15.7 21.88 15.66C21.64 15.58 21.52 15.52 21.5 15.06C21.48 14.86 21.46 14.18 21.44 13.88C21.42 13.38 21.36 12.7 20.94 12.42C20.84 12.34 20.7 12.3 20.58 12.3C20.5 12.3 20.44 12.3 20.36 12.32C20.14 12.36 19.96 12.48 19.8 12.64C19.4 13 18.88 13.18 18.34 13.14C18.04 13.12 17.74 13.08 17.38 13.06C17.32 13.06 17.24 13.06 17.18 13.04C16.22 13.06 15.44 13.78 15.32 14.74C15.12 16.16 16.14 16.88 16.44 17.32C16.48 17.38 16.52 17.44 16.52 17.52C16.52 17.6 16.48 17.68 16.42 17.72C15.6 18.64 15.3 19.92 15.62 21.12C15.66 21.26 15.7 21.4 15.76 21.54C16.5 23.28 18.82 24.1 21.08 23.36C21.38 23.26 21.66 23.14 21.94 23C22.44 22.76 22.88 22.42 23.26 22.02C23.84 21.44 24.22 20.68 24.36 19.86C24.42 19.4 24.32 19.24 24.2 19.16C24.1 19.1 24 19.08 23.88 19.1C23.82 18.74 23.72 18.4 23.58 18.08C22.94 18.56 22.2 18.94 21.42 19.16C20.48 19.42 19.52 19.52 18.54 19.48C17.92 19.42 17.5 19.24 17.34 19.76C18.28 20.08 19.28 20.18 20.28 20.06C20.3 20.06 20.34 20.08 20.34 20.1C20.34 20.12 20.32 20.14 20.3 20.16C20.22 20.14 19.06 20.68 17.22 20.1ZM13.84 11.88C14.6 11.34 15.48 10.96 16.38 10.76C17.42 10.52 18.48 10.52 19.52 10.76C19.56 10.76 19.58 10.7 19.54 10.68C19 10.4 18.42 10.24 17.8 10.22C17.78 10.22 17.76 10.2 17.76 10.18V10.16C17.86 10.04 17.96 9.92 18.08 9.84C18.1 9.82 18.1 9.8 18.08 9.8L18.06 9.78C17.32 9.86 16.62 10.1 15.98 10.52C15.96 10.52 15.94 10.52 15.94 10.52V10.5C15.98 10.32 16.06 10.14 16.16 9.96C16.16 9.94 16.16 9.92 16.14 9.92H16.12C15.22 10.42 14.42 11.08 13.76 11.86C13.74 11.88 13.74 11.9 13.76 11.9C13.8 11.9 13.82 11.9 13.84 11.88ZM19.84 16.7C19.96 16.78 20.14 16.76 20.24 16.64C20.3 16.52 20.22 16.38 20.06 16.3C19.94 16.22 19.76 16.24 19.66 16.36C19.6 16.46 19.68 16.62 19.84 16.7ZM20.34 14.88C20.38 15.08 20.46 15.28 20.58 15.44C20.7 15.42 20.84 15.42 20.96 15.44C21.04 15.22 21.04 14.98 20.98 14.76C20.88 14.34 20.76 14.1 20.52 14.14C20.26 14.18 20.24 14.48 20.34 14.88ZM20.88 15.84C20.72 15.8 20.54 15.88 20.48 16.06C20.44 16.22 20.52 16.4 20.7 16.46C20.88 16.52 21.04 16.42 21.1 16.24C21.1 16.22 21.12 16.18 21.12 16.16C21.12 16 21.02 15.86 20.88 15.84Z"
                                        fill="black"
                                    ></path>
                                    <path
                                        d="M16.66 15.8C16.62 15.8 16.6 15.78 16.6 15.76C16.58 15.68 16.7 15.58 16.8 15.48C17.14 15.22 17.6 15.18 17.98 15.34C18.16 15.42 18.32 15.54 18.42 15.7C18.46 15.76 18.46 15.82 18.44 15.84C18.4 15.88 18.3 15.84 18.12 15.76C17.92 15.66 17.68 15.6 17.46 15.62C17.2 15.66 16.92 15.72 16.66 15.8ZM18.38 16.16C18.22 16 18 15.92 17.8 15.96C17.64 15.98 17.5 16.04 17.38 16.14C17.32 16.18 17.28 16.24 17.28 16.32C17.28 16.34 17.28 16.36 17.3 16.36C17.32 16.36 17.32 16.38 17.34 16.38C17.4 16.38 17.46 16.36 17.5 16.34C17.74 16.26 17.98 16.22 18.22 16.26C18.34 16.28 18.38 16.28 18.42 16.24C18.4 16.2 18.4 16.18 18.38 16.16Z"
                                        fill="black"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_11766_122079">
                                        <rect width="32" height="32" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    {/* End Icon */}

                    {/* Right Content */}
                    <div className="grow pb-8 group-last:pb-0">
                        <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">2021 - 2023</h3>

                        <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">Senior Software Engineer at Mailchimp</p>

                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                            This is an excellent company and they reward their employees. It's becoming a big company but it's still private, so the
                            culture is as good as it gets at 1,000+ employees if you ask me. Managers are still adapting to the growth I think, but
                            everyone has to. Great place to work.
                        </p>

                        <div className="mt-3">
                            {/* Card */}
                            <a
                                className="block rounded-lg border border-gray-200 hover:shadow-2xs focus:outline-hidden dark:border-neutral-700"
                                href="#"
                            >
                                <div className="relative flex items-center overflow-hidden">
                                    <img
                                        className="absolute inset-0 h-full w-32 rounded-s-lg object-cover sm:w-48"
                                        src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Blog Image"
                                    />

                                    <div className="ms-32 grow p-4 sm:ms-48">
                                        <div className="flex min-h-24 flex-col justify-center">
                                            <h3 className="text-sm font-semibold text-gray-800 dark:text-neutral-300">Studio by Mailchimp</h3>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                                Produce professional, reliable streams easily leveraging Mailchimp's innovative broadcast studio.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            {/* End Card */}
                        </div>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Item */}

                {/* Item */}
                <div className="group relative flex gap-x-5">
                    {/* Icon */}
                    <div className="relative after:absolute after:start-3 after:top-8 after:bottom-2 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
                        <div className="relative z-10 flex size-6 items-center justify-center">
                            <svg
                                className="size-6 shrink-0 text-gray-600 dark:text-neutral-400"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.7326 0C9.96372 0.00130479 8.53211 1.43397 8.53342 3.19935C8.53211 4.96473 9.96503 6.39739 11.7339 6.39869H14.9345V3.20065C14.9358 1.43527 13.5029 0.00260958 11.7326 0C11.7339 0 11.7339 0 11.7326 0M11.7326 8.53333H3.20053C1.43161 8.53464 -0.00130383 9.9673 3.57297e-06 11.7327C-0.00261123 13.4981 1.4303 14.9307 3.19922 14.9333H11.7326C13.5016 14.932 14.9345 13.4994 14.9332 11.734C14.9345 9.9673 13.5016 8.53464 11.7326 8.53333V8.53333Z"
                                    fill="#36C5F0"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clip-rule="evenodd"
                                    d="M32 11.7327C32.0013 9.9673 30.5684 8.53464 28.7995 8.53333C27.0306 8.53464 25.5976 9.9673 25.5989 11.7327V14.9333H28.7995C30.5684 14.932 32.0013 13.4994 32 11.7327ZM23.4666 11.7327V3.19935C23.4679 1.43527 22.0363 0.00260958 20.2674 0C18.4984 0.00130479 17.0655 1.43397 17.0668 3.19935V11.7327C17.0642 13.4981 18.4971 14.9307 20.2661 14.9333C22.035 14.932 23.4679 13.4994 23.4666 11.7327Z"
                                    fill="#2EB67D"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clip-rule="evenodd"
                                    d="M20.2661 32C22.035 31.9987 23.4679 30.566 23.4666 28.8007C23.4679 27.0353 22.035 25.6026 20.2661 25.6013H17.0656V28.8007C17.0642 30.5647 18.4972 31.9974 20.2661 32ZM20.2661 23.4654H28.7995C30.5684 23.4641 32.0013 22.0314 32 20.266C32.0026 18.5006 30.5697 17.068 28.8008 17.0654H20.2674C18.4985 17.0667 17.0656 18.4993 17.0669 20.2647C17.0656 22.0314 18.4972 23.4641 20.2661 23.4654V23.4654Z"
                                    fill="#ECB22E"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.93953e-07 20.266C-0.00130651 22.0314 1.43161 23.4641 3.20052 23.4654C4.96944 23.4641 6.40235 22.0314 6.40105 20.266V17.0667H3.20052C1.43161 17.068 -0.00130651 18.5006 8.93953e-07 20.266ZM8.53342 20.266V28.7993C8.53081 30.5647 9.96372 31.9974 11.7326 32C13.5016 31.9987 14.9345 30.566 14.9332 28.8007V20.2686C14.9358 18.5032 13.5029 17.0706 11.7339 17.068C9.96372 17.068 8.53211 18.5006 8.53342 20.266C8.53342 20.2673 8.53342 20.266 8.53342 20.266Z"
                                    fill="#E01E5A"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    {/* End Icon */}

                    {/* Right Content */}
                    <div className="grow pb-8 group-last:pb-0">
                        <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">2011 - 2021</h3>

                        <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">Junior Software Engineer at Slack</p>

                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                            Work in Slack is one of the beautiful experience I can do in my entire life. There are a lot of interesting thing to learn
                            and manager respect your time and your personality.
                        </p>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Item */}

                {/* Item */}
                <div className="group relative flex gap-x-5">
                    {/* Icon */}
                    <div className="relative after:absolute after:start-3 after:top-8 after:bottom-2 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
                        <div className="relative z-10 flex size-6 items-center justify-center">
                            <svg
                                className="size-6 shrink-0 text-gray-800 dark:text-neutral-200"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 12h.01" />
                                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                <rect width="20" height="14" x="2" y="6" rx="2" />
                            </svg>
                        </div>
                    </div>
                    {/* End Icon */}

                    {/* Right Content */}
                    <div className="grow pb-8 group-last:pb-0">
                        <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">2010 - 2011</h3>

                        <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">Freelance Graphic Designer</p>

                        <ul className="ms-6 mt-3 list-disc space-y-1.5">
                            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                Worked with a diverse range of clients, delivering tailored design solutions.
                            </li>
                            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                Developed and maintained strong client relationships through effective communication and project management.
                            </li>
                            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                Utilized tools such as Notion for project tracking, Mailchimp for email marketing designs, Slack for team
                                collaboration, and GitHub for version control and project sharing.
                            </li>
                        </ul>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Item */}
            </div>
            {/* End Timeline */}

            {/* Contact Us */}
            <div className=" lg:py-14">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Contact us</h1>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">We'd love to talk about how we can help you.</p>
                    </div>

                    <div className="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
                        {/* Card */}
                        <div className="flex flex-col rounded-xl border border-gray-200 p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
                            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">Fill in the form</h2>

                            <form>
                                <div className="grid gap-4">
                                    {/* Grid */}
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="hs-firstname-contacts-1"
                                                id="hs-firstname-contacts-1"
                                                className="block w-full rounded-lg border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                placeholder="First Name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="hs-lastname-contacts-1"
                                                id="hs-lastname-contacts-1"
                                                className="block w-full rounded-lg border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    {/* End Grid */}

                                    <div>
                                        <label htmlFor="hs-email-contacts-1" className="sr-only">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="hs-email-contacts-1"
                                            id="hs-email-contacts-1"
                                            autocomplete="email"
                                            className="block w-full rounded-lg border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="hs-phone-number-1" className="sr-only">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="hs-phone-number-1"
                                            id="hs-phone-number-1"
                                            className="block w-full rounded-lg border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            placeholder="Phone Number"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="hs-about-contacts-1" className="sr-only">
                                            Details
                                        </label>
                                        <textarea
                                            id="hs-about-contacts-1"
                                            name="hs-about-contacts-1"
                                            rows="4"
                                            className="block w-full rounded-lg border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            placeholder="Details"
                                        ></textarea>
                                    </div>
                                </div>
                                {/* End Grid */}

                                <div className="mt-4 grid">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Send inquiry
                                    </button>
                                </div>

                                <div className="mt-3 text-center">
                                    <p className="text-sm text-gray-500 dark:text-neutral-500">We'll get back to you in 1-2 business days.</p>
                                </div>
                            </form>
                        </div>
                        {/* End Card */}

                        <div className="divide-y divide-gray-200 dark:divide-neutral-800">
                            {/* Icon Block */}
                            <div className="flex gap-x-7 py-6">
                                <svg
                                    className="mt-1.5 size-6 shrink-0 text-gray-800 dark:text-neutral-200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-gray-800 dark:text-neutral-200">Knowledgebase</h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">We're here to help with any questions or code.</p>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                        href="#"
                                    >
                                        Contact support
                                        <svg
                                            className="size-2.5 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}

                            {/* Icon Block */}
                            <div className="flex gap-x-7 py-6">
                                <svg
                                    className="mt-1.5 size-6 shrink-0 text-gray-800 dark:text-neutral-200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                                </svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-gray-800 dark:text-neutral-200">FAQ</h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                        Search our FAQ for answers to anything you might ask.
                                    </p>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                        href="#"
                                    >
                                        Visit FAQ
                                        <svg
                                            className="size-2.5 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}

                            {/* Icon Block */}
                            <div className="flex gap-x-7 py-6">
                                <svg
                                    className="mt-1.5 size-6 shrink-0 text-gray-800 dark:text-neutral-200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m7 11 2-2-2-2" />
                                    <path d="M11 13h4" />
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                </svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-gray-800 dark:text-neutral-200">Developer APIs</h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">Check out our development quickstart guide.</p>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                        href="#"
                                    >
                                        Contact sales
                                        <svg
                                            className="size-2.5 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}

                            {/* Icon Block */}
                            <div className="flex gap-x-7 py-6">
                                <svg
                                    className="mt-1.5 size-6 shrink-0 text-gray-800 dark:text-neutral-200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                                </svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-gray-800 dark:text-neutral-200">Contact us by email</h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                        If you wish to write us an email instead please use
                                    </p>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                        href="#"
                                    >
                                        example@site.com
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Us */}
        </GuestLayout>
    );
}
