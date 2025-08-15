import BlurText from '@/components/animations/blur-text';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const [loading, setLoading] = useState(false);

export default function Welcome() {
    const navigationLinks = [
        { href: '', label: 'Home', active: true },
        { href: 'about-me', label: 'About Me' },
        { href: 'portofolio', label: 'Portofolio' },
        { href: 'experience', label: 'Experience' },
        { href: 'contact', label: 'Contact' },
    ];

    return (
        <>
            <Head title="Home">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <header className="border-b px-4 md:px-6 lg:px-12">
                <div className="flex h-16 items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-6">
                            <a href="/" className="text-primary hover:text-primary/90">
                                <Logo />
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button className="group size-8 md:hidden" variant="ghost" size="icon">
                                    <svg
                                        className="pointer-events-none"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 12L20 12"
                                            className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                                        />
                                        <path
                                            d="M4 12H20"
                                            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                                        />
                                        <path
                                            d="M4 12H20"
                                            className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                                        />
                                    </svg>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="w-36 p-1 md:hidden">
                                <NavigationMenu className="max-w-none *:w-full">
                                    <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                        {navigationLinks.map((link, index) => (
                                            <NavigationMenuItem key={index} className="w-full">
                                                <NavigationMenuLink href={link.href} className="py-1.5" active={link.active}>
                                                    {link.label}
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </PopoverContent>
                        </Popover>

                        <NavigationMenu className="max-md:hidden">
                            <NavigationMenuList className="gap-6">
                                {navigationLinks.map((link, index) => (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuLink
                                            active={link.active}
                                            href={link.href}
                                            className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                                        >
                                            {link.label}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </header>
            <section>
                <BlurText
                    text="Isn't this so cool?!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="mb-8 text-2xl"
                />
            </section>
        </>
    );
}
