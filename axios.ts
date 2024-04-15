import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestHeaders,
    AxiosResponse,
} from 'axios';

const token = 'D5UHuIM4ou9DPWAXd9FMQKhoUQpu'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '',
});

type CustomHeaders = {
    Authorization: string;
    Accept?: string;
    'Content-Length'?: string;
    'User-Agent'?: string;
    'Content-Encoding'?: string;
    'Content-Type'?: string;
};

interface ErrorResponse {
    statusCode: number;
}

let retryCount = 0;

axiosInstance.interceptors.request.use((req) => {
    // const token = getCookie('token');
    // const refreshToken = getCookie('refreshToken');

    req.headers = {
        ...req.headers,
        Authorization: `Bearer  ${token}`
    } as AxiosRequestHeaders & CustomHeaders;

    return req;
});

// async function getRefreshToken() {
//     try {
//         const response = await axiosInstance.get(API_ENDPOINT.REFRESH_TOKEN);

//         const { accessToken, refreshToken } = response.data;

//         return { accessToken, refreshToken };
//     } catch (error) {
//         console.error('Error refreshing token:', error);
//         throw error;
//     }
// }

// axiosInstance.interceptors.response.use(
//     async (response: AxiosResponse) => response,
//     async (error: AxiosError<ErrorResponse>) => {
//         const originalRequest = error.config;

//         if (
//             error.response?.status === 401 &&
//             retryCount < MAX_RETRIES &&
//             error.response.config.url &&
//             !error.response.config.url.includes('login')
//         ) {
//             retryCount++;
//             try {
//                 const { accessToken, refreshToken } = await getRefreshToken();
//                 setCookie('token', accessToken);
//                 setCookie('refreshToken', refreshToken);
//                 if (originalRequest?.headers) {
//                     originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//                 }
//                 return axiosInstance(originalRequest!);
//             } catch (refreshError) {
//                 console.error('Error refreshing token:', refreshError);
//                 deleteCookie('isAuthenticated');
//                 deleteCookie('token');
//                 deleteCookie('refreshToken');
//                 return Promise.reject(refreshError);
//             }
//         } else {
//             if (retryCount >= MAX_RETRIES) {
//                 deleteCookie('isAuthenticated');
//                 deleteCookie('token');
//                 deleteCookie('refreshToken');
//                 window.location.replace('/login');
//                 return Promise.reject('Max retries reached, user logged out');
//             }
//             return Promise.reject(
//                 (error.response && error.response.data) ||
//                 ERROR_MESSAGES.SOMETHING_WENT_WRONG,
//             );
//         }
//     },
// );

export default axiosInstance;
