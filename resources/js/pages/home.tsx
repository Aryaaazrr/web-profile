import { AuroraText } from '@/components/animations/magicui/aurora-text';
import { NeonGradientCard } from '@/components/animations/magicui/neon-gradient-card';
// import { TextReveal } from '@/components/animations/magicui/text-reveal';
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

            <section className="container mx-auto flex h-screen flex-col items-center justify-center gap-8 px-4 py-8">
                <div className="flex flex-row items-center justify-between gap-4">
                    <div className="flex flex-col items-start space-y-6 lg:w-2/3">
                        <h1 className="text-4xl font-bold tracking-tighter text-primary md:text-5xl lg:text-7xl/tight">
                            Hello everyone👋, I'am <AuroraText>Achmad Zakariya</AuroraText>
                        </h1>
                        <TextType
                            text={['Fullstack Web Developer', 'Freelance Programmer', 'Happy coding!']}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            textColors={['#4B5563', '#1F2937', '#111827']}
                            className="text-3xl font-semibold"
                        />
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Others won't understand our struggles and hardships; they only want to hear the success stories. Fight for yourself, even
                            if no one applauds. Our future selves will be incredibly proud of what we've achieved today.
                        </p>
                        {/* <TextReveal>
                            Others won't understand our struggles and hardships; they only want to hear the success stories. Fight for yourself, even
                            if no one applauds. Our future selves will be incredibly proud of what we've achieved today.
                        </TextReveal> */}
                    </div>
                    <div className="relative flex flex-col items-end justify-center space-y-2 lg:w-1/2">
                        {/* Main Profile Image */}
                        <NeonGradientCard
                            className="z-10 aspect-square w-md rounded-full"
                            borderRadius={9999}
                            containerClassName="flex items-center justify-center"
                        >
                            <div className="flex h-full w-full flex-col items-center justify-center p-0 text-center">
                                <img
                                    src="/assets/img/foto-formal.png"
                                    alt="Profile"
                                    className="absolute inset-0 h-full w-full rounded-full object-cover object-top"
                                />
                            </div>
                        </NeonGradientCard>

                        {/* Tech Stack Circles */}
                        <div className="absolute inset-0 -z-50">
                            {/* React */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                <div className="bg-red/80 flex h-12 w-12 items-center justify-center rounded-full shadow-lg backdrop-blur-sm">
                                    <img src="/icons/react.svg" alt="React" className="h-6 w-6" />
                                </div>
                            </div>

                            {/* TypeScript */}
                            <div className="absolute top-1/4 -right-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-lg backdrop-blur-sm">
                                    <img src="/icons/typescript.svg" alt="TypeScript" className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Laravel */}
                            <div className="absolute -right-8 bottom-1/4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-lg backdrop-blur-sm">
                                    <img src="/icons/laravel.svg" alt="Laravel" className="h-6 w-6" />
                                </div>
                            </div>

                            {/* TailwindCSS */}
                            <div className="absolute top-1/4 -left-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-lg backdrop-blur-sm">
                                    <img src="/icons/tailwind.svg" alt="TailwindCSS" className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Node.js */}
                            <div className="absolute bottom-1/4 -left-8">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-lg backdrop-blur-sm">
                                    <img src="/icons/nodejs.svg" alt="Node.js" className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
