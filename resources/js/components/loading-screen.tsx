import { cn } from '@/lib/utils';

interface LoadingScreenProps {
    isLoading: boolean;
    className?: string;
}

export default function LoadingScreen({ isLoading, className }: LoadingScreenProps) {
    if (!isLoading) return null;

    return (
        <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm', className)}>
            <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <p className="text-sm text-muted-foreground">Loading...</p>
            </div>
        </div>
    );
}
