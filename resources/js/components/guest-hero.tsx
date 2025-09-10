import { AuroraText } from "./animations/magicui/aurora-text";
import { InteractiveHoverButton } from "./animations/magicui/interactive-hover-button";
import { NeonGradientCard } from "./animations/magicui/neon-gradient-card";
import ProfileCard from "./animations/ProfileCard";
import TextType from "./animations/type-text";

export default function GuestHero() {
    return (
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

                        <div className="mt-7 grid gap-3 sm:inline-flex">
                            <InteractiveHoverButton>I'm Here</InteractiveHoverButton>
                        </div>
                    </div>
                    {/* End Col */}

                    <div className="overflow-x-hidden- flex w-full items-center justify-end">
                        <NeonGradientCard>
                            <ProfileCard
                                name="Achmad Zakariya"
                                title="Fullstack Web Developer"
                                handle="achmdzkry_"
                                status="Online"
                                contactText="Contact Me"
                                avatarUrl="/assets/img/foto-formal.png"
                                iconUrl="/assets/img/html-tag-icon.svg"
                                grainUrl="/assets/img/foto-formal.png"
                                className="text-xs"
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={false}
                            />
                        </NeonGradientCard>
                    </div>

                    {/* End Col */}
                </div>
                {/* End Grid */}
            </section>
    )
}
