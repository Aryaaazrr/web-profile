import { type ReactNode } from 'react';
import GuestLayoutTemplate from './guest/guest-layout-template';

interface GuestLayoutProps {
    children: ReactNode;
    navigationItems?: Array<{
        href: string;
        label: string;
        active?: boolean;
    }>;
}

export default function GuestLayout({ children, navigationItems, ...props }: GuestLayoutProps) {
    return (
        <GuestLayoutTemplate navigationItems={navigationItems} {...props}>
            {children}
        </GuestLayoutTemplate>
    );
}
