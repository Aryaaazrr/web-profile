import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';

interface LoadingScreenProps {
    isLoading: boolean;
    className?: string;
}

export default function LoadingScreen({ isLoading, className }: LoadingScreenProps) {
    const pathVariants: Variants = {
        hidden: {
            pathLength: 0,
            opacity: 0,
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut',
            },
        },
    };

    if (!isLoading) return null;

    return (
        <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm', className)}>
            <div className="flex flex-col items-center gap-2">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-spin-slow"
                >
                    <motion.path d="m18 16 4-4-4-4" variants={pathVariants} initial="hidden" animate="visible" />
                    <motion.path d="m6 8-4 4 4 4" variants={pathVariants} initial="hidden" animate="visible" />
                    <motion.path d="m14.5 4-5 16" variants={pathVariants} initial="hidden" animate="visible" />
                </motion.svg>
            </div>
        </div>
    );
}
