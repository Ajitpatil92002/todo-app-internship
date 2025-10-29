'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { authClient } from './auth-client';

export function useRequireAuth() {
    const router = useRouter();
    const { data: session, isLoading } = authClient.useSession();

    useEffect(() => {
        if (!isLoading && !session) {
            router.push('/login');
        }
    }, [session, isLoading, router]);

    return { session, isLoading };
}
