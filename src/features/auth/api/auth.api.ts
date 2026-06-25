import client from '@/shared/api/client';
import type { LoginPayload, RegisterPayload } from '../types/auth.types';

export const authApi = {
    login: (credentials: LoginPayload) => {
        return client.post('/api/v1/users/login/', credentials, {
            next: { revalidate: 0 },
        });
    },

    register: (userData: RegisterPayload) => {
        return client.post('/api/v1/users/register/', userData, {
            next: { revalidate: 0 },
        });
    },

    logout: () => {
        return client.post('/api/v1/users/logout/', {}, {
            next: { revalidate: 0 },
        });
    },

    refreshToken: () => {
        return client.post('/api/v1/users/token/refresh/', {}, {
            next: { revalidate: 0 },
        });
    },

    verifyEmail: (verifyData: { email: string; code: string }) => {
        return client.post('/api/v1/users/verify-email/', verifyData, {
            next: { revalidate: 0 },
        });
    },

    resendEmailVerification: (email: string) => {
        return client.post('/api/v1/users/resend-email-verification/', { email }, {
            next: { revalidate: 0 },
        });
    }
};