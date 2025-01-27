import React from 'react';

const SignIn = () => {
    const handleSignIn = () => {
        // Logic for authentication (e.g., API call, token storage)
        console.log("Sign In logic here");
    };

    return (
        <div className='flex w-full h-full bg-white '>
            <div className='w-[50%] h-full'>
                <div className='w-[450px] mx-auto h-full py-[40px]'>
                    <a href="/" className='flex gap-[6px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.7099 8.11997L10.8299 12L14.7099 15.88C15.0999 16.27 15.0999 16.9 14.7099 17.29C14.3199 17.68 13.6899 17.68 13.2999 17.29L8.70994 12.7C8.31994 12.31 8.31994 11.68 8.70994 11.29L13.2999 6.69997C13.6899 6.30997 14.3199 6.30997 14.7099 6.69997C15.0899 7.08997 15.0999 7.72997 14.7099 8.11997Z" fill="#A3AED0" />
                        </svg>
                        <p className='text-[14px] font-[500] leading-[30px]'>Back to dashboard</p>
                    </a>
                    <div className='h-full flex flex-col justify-center'>
                        <p className='text-[#2B3674] text-[36px] leading-[56px] font-[700]'>Sign In</p>
                        <p className='text-[#A3AED0] text-[16px] leading-[16px] font-[400] mt-[8px]'>Enter your email and password to sign in!</p>
                        <div className='mt-[36px] flex justify-center items-center gap-[10px] bg-[#F4F7FE] rounded-[16px] py-[15px]'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_101_9040)">
                                        <path d="M19.7874 10.225C19.7874 9.56668 19.7291 8.94168 19.6291 8.33334H10.2124V12.0917H15.6041C15.3624 13.325 14.6541 14.3667 13.6041 15.075V17.575H16.8207C18.7041 15.8333 19.7874 13.2667 19.7874 10.225Z" fill="#4285F4" />
                                        <path d="M10.2126 20C12.9126 20 15.1709 19.1 16.8209 17.575L13.6043 15.075C12.7043 15.675 11.5626 16.0417 10.2126 16.0417C7.60427 16.0417 5.39593 14.2833 4.60427 11.9083H1.2876V14.4833C2.92926 17.75 6.30427 20 10.2126 20Z" fill="#34A853" />
                                        <path d="M4.60407 11.9083C4.39574 11.3083 4.2874 10.6667 4.2874 9.99999C4.2874 9.33333 4.40407 8.69166 4.60407 8.09166V5.51666H1.2874C0.604068 6.86666 0.212402 8.38333 0.212402 9.99999C0.212402 11.6167 0.604068 13.1333 1.2874 14.4833L4.60407 11.9083Z" fill="#FBBC05" />
                                        <path d="M10.2126 3.95833C11.6876 3.95833 13.0043 4.46667 14.0459 5.45834L16.8959 2.60833C15.1709 0.991667 12.9126 0 10.2126 0C6.30427 0 2.92926 2.25 1.2876 5.51667L4.60427 8.09167C5.39593 5.71667 7.60427 3.95833 10.2126 3.95833Z" fill="#EA4335" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_101_9040">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className='text-[#2B3674] font-[500] text-[14px] leading-[20px]'>Sign in with Google</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[50%] relative h-full'>
                <div className='signin_bg'>
                </div>
                <div className='relative z-10 h-full'>
                    <div className='h-full flex flex-col items-center justify-center'>
                        <div className='mt-[111px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280" fill="none">
                                <path d="M69.0231 186.199H210.362V247.65H69.0231V186.199Z" fill="white" />
                                <path d="M215.278 199.103C215.278 178.894 207.315 159.512 193.14 145.222C178.965 130.932 159.739 122.903 139.693 122.903C119.646 122.903 100.421 130.932 86.2455 145.222C72.0705 159.512 64.107 178.894 64.107 199.103L139.693 199.103H215.278Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M140 218.153C183.272 218.153 218.351 183.075 218.351 139.803C218.351 96.5306 183.272 61.4517 140 61.4517C96.7278 61.4517 61.6489 96.5306 61.6489 139.803C61.6489 183.075 96.7278 218.153 140 218.153ZM140 279.605C217.211 279.605 279.802 217.013 279.802 139.803C279.802 62.5917 217.211 0 140 0C62.789 0 0.197266 62.5917 0.197266 139.803C0.197266 217.013 62.789 279.605 140 279.605Z" fill="white" />
                            </svg>
                        </div>
                        <div className='text-white text-[40px] font-black pt-[46px]'>Horizon</div>
                        <div className='rounded-[27px] border-2 border-[#ffffff20] px-[110px] py-[30px] text-center mt-[100px]'>
                            <p className='text-[17px] font-[400] text-white'>Learn more about Horizon UI on</p>
                            <p className='text-[30px] font-[700] leading-[45px] text-white'>horizon-ui.com</p>
                        </div>
                        <div className='flex items-center gap-[42px] mt-auto pb-[40px]'>
                            <a href='#' className='text-[14px] font-medium text-white leading-[24px]'>Marketplace</a>
                            <a href='#' className='text-[14px] font-medium text-white leading-[24px]'>License</a>
                            <a href='#' className='text-[14px] font-medium text-white leading-[24px]'>Terms of Use</a>
                            <a href='#' className='text-[14px] font-medium text-white leading-[24px]'>Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
