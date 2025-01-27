import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import userProfile from '../../../assets/images/Elipse 5.png';
import { Image } from 'primereact/image';
import { Dropdown } from 'primereact/dropdown';
import companyImg from '../../../assets/images/usa.png';
import LineChart from './Charts/LineChart';
import { Calendar } from 'primereact/calendar';
import BarChart from './Charts/Barchart/BarChart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Daily_Traffic_Bar_Chart from './Charts/Barchart/Daily_Traffic_Bar';
import PieChartDemo from './Charts/PieChart/PieChart';
import { Slider } from 'primereact/slider';
import { Checkbox } from 'primereact/checkbox';
import starbucks_coffee from '../../../assets/images/Starbuck.png';
import starbucks_logo from '../../../assets/images/starbucks_logo.png';
import { Menu } from 'primereact/menu';

const Dashboard = () => {
    const [date, setDate] = useState(null);
    const [value, setValue] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];
    const products = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Horizon UI PRO',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            process: '17.5%',
            category: 'Accessories',
            date: '24.Jan.2021',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Black Watch',
            description: 'Product Description',
            image: 'black-watch.jpg',
            process: '10.8%',
            category: 'Accessories',
            date: '24.Jan.2021',
            quantity: 61,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Blue Band',
            description: 'Product Description',
            image: 'blue-band.jpg',
            process: '21.3%',
            category: 'Fitness',
            date: '24.Jan.2021',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1003',
            code: '244wgerg2',
            name: 'Blue T-Shirt',
            description: 'Product Description',
            image: 'blue-t-shirt.jpg',
            process: '31.5%',
            category: 'Clothing',
            date: '24.Jan.2021',
            quantity: 25,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1004',
            code: 'h456wer53',
            name: 'Bracelet',
            description: 'Product Description',
            image: 'bracelet.jpg',
            process: '12.2%',
            category: 'Accessories',
            date: '24.Jan.2021',
            quantity: 73,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },]

    const [complexTableData, setComplexTableData] = useState([
        {
            name: "Horizon UI PRO",
            status: "Approved",
            date: "18 Apr 2021",
            process: "78%",
        },
        {
            name: "Horizon UI Free",
            status: "Disable",
            date: "18 Apr 2021",
            process: "42%",
        },
        {
            name: "Marketplace",
            status: "Error",
            date: "20 May 2021",
            process: "92%",
        },
        {
            name: "Weekly Updates",
            status: "Approved",
            date: "12 Jul 2021",
            process: "59%",
        },
    ]);

    const handleSliderChange = (value, index) => {
        const updatedData = [...complexTableData];
        updatedData[index].process = `${value}%`;
        setComplexTableData(updatedData);
    };

    const sliderDataBody = (rowData, index) => {
        const numericProcess = parseInt(rowData.process); // Convert "78%" to 78
        return (
            <Slider
                value={numericProcess}
                onChange={(e) => handleSliderChange(e.value, index)}
                className="w-full rounded-[21px] slider-range"
                step={1}
                min={0}
                max={100}
            // disabled={true}
            />
        );
    };
    const [taskData, setTaskData] = useState([
        { name: "Landing Page Design", check: false },
        { name: "Dashboard Builder", check: true },
        { name: "Mobile App Design", check: true },
        { name: "Illustrations", check: false },
        { name: "Promotional LP", check: true },
    ]);

    const handleCheckboxChange = (rowData) => {
        const updatedTasks = taskData.map((task) =>
            task.name === rowData.name ? { ...task, check: !task.check } : task
        );
        setTaskData(updatedTasks);
    };

    const checkboxBodyTemplate = (rowData) => {
        return (
            <div className='flex gap-[16px] custome-checkbox'>
                <Checkbox
                    onChange={() => handleCheckboxChange(rowData)}
                    checked={rowData.check}
                />
                {rowData.name}
            </div>
        );
    };
    const menuLeft = useRef(null);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Refresh',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-upload'
                }
            ]
        }
    ];


    return (
        <div className="">
            <div className=" flex justify-between items-center sticky top-0 bg-[#F4F7FE]">
                <div className="">
                    <div className="flex items-center text-[#707EAE] gap-[5px]">
                        <p>Pages</p>
                        <span>/</span>
                        <p>Dashboard</p>
                    </div>
                    <h1 className="font-bold text-[34px] leading-[42px]">
                        Main Dashboard
                    </h1>
                </div>
                <div className="bg-white p-[10px] rounded-[30px] flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px] rounded-[49px]  px-[20px] py-[10px] bg-[#F4F7FE]">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="12"
                                viewBox="0 0 11 12"
                                fill="none"
                            >
                                <circle
                                    cx="5"
                                    cy="5"
                                    r="4.3"
                                    stroke="#2B3674"
                                    stroke-width="1.4"
                                />
                                <line
                                    x1="10.0101"
                                    y1="11"
                                    x2="8"
                                    y2="8.98995"
                                    stroke="#2B3674"
                                    stroke-width="1.4"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </div>
                        <InputText
                            className="bg-transparent  focus:outline-none focus:shadow-none text-[14px] leading-[20px]"
                            placeholder="Search"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    {/* notifaction */}
                    <div className='cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_201_2884)">
                                <path
                                    d="M19.2901 17.29L18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4801 19 19.9201 17.92 19.2901 17.29ZM16.0001 17H8.00005V11C8.00005 8.52 9.51005 6.5 12.0001 6.5C14.4901 6.5 16.0001 8.52 16.0001 11V17ZM12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22Z"
                                    fill="#A3AED0"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_201_2884">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                    </div>
                    {/* night mode */}
                    <div className='cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_201_2097)">
                                <path
                                    d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z"
                                    fill="#A3AED0"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_201_2097">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    {/*  */}
                    <div className='cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_201_2879)">
                                <path
                                    d="M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                                    fill="#A3AED0"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_201_2879">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    {/* user-profile */}
                    <div className="max-w-[50px] rounded-full overflow-auto cursor-pointer" label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                        <Image
                            width={300}
                            height={300}
                            className=""
                            src={userProfile}
                            alt="Image"
                            unoptimized
                        />
                    </div>
                </div>
            </div>

            <div className='h-[calc(100vh_-_130px)] overflow-auto'>
                {/* KPIS */}
                <div className="pt-[30px] flex gap-[16px] items-center">
                    <div className="ps-[17px] pe-[12px] py-[20px] flex items-center gap-[18px] bg-white rounded-[20px] min-w-[248px]">
                        <div className="rounded-full bg-[#F4F7FE] p-[11.5px] flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 34 34"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_201_2503)">
                                    <path
                                        d="M9.28393 13.3136H9.55761C10.6113 13.3136 11.4734 14.1757 11.4734 15.2293V24.8082C11.4734 25.8618 10.6113 26.7239 9.55761 26.7239H9.28393C8.23026 26.7239 7.36816 25.8618 7.36816 24.8082V15.2293C7.36816 14.1757 8.23026 13.3136 9.28393 13.3136ZM16.947 7.56628C18.0007 7.56628 18.8627 8.42838 18.8627 9.48205V24.8082C18.8627 25.8618 18.0007 26.7239 16.947 26.7239C15.8933 26.7239 15.0312 25.8618 15.0312 24.8082V9.48205C15.0312 8.42838 15.8933 7.56628 16.947 7.56628ZM24.61 18.5135C25.6637 18.5135 26.5258 19.3756 26.5258 20.4293V24.8082C26.5258 25.8618 25.6637 26.7239 24.61 26.7239C23.5564 26.7239 22.6943 25.8618 22.6943 24.8082V20.4293C22.6943 19.3756 23.5564 18.5135 24.61 18.5135Z"
                                        fill="#4318FF"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_201_2503">
                                        <rect
                                            width="32.8417"
                                            height="32.8417"
                                            fill="white"
                                            transform="translate(0.526367 0.724243)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[14px] leading-[24px] font-medium text-[#A3AED0]">
                                Earnings
                            </p>
                            <p className="text-[24px] leading-[32px] font-bold ">$350.4</p>
                        </div>
                    </div>
                    <div className="ps-[17px] pe-[12px] py-[20px] flex items-center gap-[18px] bg-white rounded-[20px] min-w-[248px]">
                        <div className="rounded-full bg-[#F4F7FE] p-[11.5px] flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 34 34"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_201_2515)">
                                    <path
                                        d="M16.6734 15.6398C13.5672 14.8325 12.5682 13.9978 12.5682 12.6978C12.5682 11.2062 13.9503 10.1662 16.2629 10.1662C18.206 10.1662 19.1776 10.9052 19.5334 12.082C19.6976 12.6294 20.1492 13.0399 20.7239 13.0399H21.1344C22.0376 13.0399 22.6807 12.1504 22.366 11.302C21.7913 9.6873 20.4502 8.34626 18.3155 7.82627V6.88207C18.3155 5.7463 17.3987 4.82947 16.2629 4.82947C15.1271 4.82947 14.2103 5.7463 14.2103 6.88207V7.78522C11.5556 8.35995 9.4209 10.0841 9.4209 12.7252C9.4209 15.8862 12.0345 17.4598 15.8524 18.3767C19.2734 19.1977 19.9576 20.4019 19.9576 21.6745C19.9576 22.6187 19.2871 24.1239 16.2629 24.1239C14.005 24.1239 12.8419 23.3166 12.3903 22.1671C12.1851 21.6335 11.7198 21.2503 11.1588 21.2503H10.7756C9.85879 21.2503 9.21564 22.1808 9.55774 23.0292C10.3377 24.9313 12.1577 26.0534 14.2103 26.4913V27.4081C14.2103 28.5439 15.1271 29.4607 16.2629 29.4607C17.3987 29.4607 18.3155 28.5439 18.3155 27.4081V26.5187C20.9839 26.0123 23.1049 24.466 23.1049 21.6608C23.1049 17.7746 19.7797 16.4472 16.6734 15.6398Z"
                                        fill="#4318FF"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_201_2515">
                                        <rect
                                            width="32.8417"
                                            height="32.8417"
                                            fill="white"
                                            transform="translate(0.526367 0.724243)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[14px] leading-[24px] font-medium text-[#A3AED0]">
                                Spend this month
                            </p>
                            <p className="text-[24px] leading-[32px] font-bold ">$642.39</p>
                        </div>
                    </div>
                    <div className="ps-[17px] pe-[12px] py-[14px] flex items-center gap-[18px] bg-white rounded-[20px] min-w-[248px]">
                        <div>
                            <p className="text-[14px] leading-[24px] font-medium text-[#A3AED0]">
                                Sales
                            </p>
                            <p className="text-[24px] leading-[32px] font-bold ">$574.34</p>
                            <div className="flex items-center gap-[4px]">
                                <p className="text-[#05CD99] text-[12px] leading-[20px] font-bold">
                                    +23%
                                </p>
                                <p className="text-[#A3AED0] text-[12px] leading-[20px] font-normal">
                                    since last month
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ps-[17px] pe-[12px] py-[20px] flex items-center gap-[18px] bg-white rounded-[20px] min-w-[248px]">
                        <div>
                            <p className="text-[14px] leading-[24px] font-medium text-[#A3AED0]">
                                Your balance
                            </p>
                            <p className="text-[24px] leading-[32px] font-bold ">$10000</p>
                        </div>
                        <div className="">
                            <div className="card flex justify-content-center custome-dropdown relative min-w-[90px]">
                                <Image
                                    width={50}
                                    height={50}
                                    src={companyImg}
                                    alt="Image"
                                    unoptimized
                                    className="absolute top-[50%] translate-y-[-50%]"
                                />
                                <Dropdown
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.value)}
                                    options={cities}
                                    optionLabel="name"
                                    placeholder=""
                                    className="w-full md:w-14rem justify-end focus:shadow-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ps-[17px] pe-[12px] py-[20px] flex items-center gap-[18px] bg-white rounded-[20px] min-w-[248px]">
                        <div className="rounded-full bg-gradient-to-r from-[#4481EB] to-[#04BEFE] p-[11.5px] flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_201_2530)">
                                    <path
                                        d="M25.6663 6.04337L12.3547 19.3667L7.40801 14.42L9.05301 12.775L12.3547 16.0767L24.0213 4.41004L25.6663 6.04337ZM13.9997 23.3334C8.85467 23.3334 4.66634 19.145 4.66634 14C4.66634 8.85504 8.85467 4.66671 13.9997 4.66671C15.8313 4.66671 17.5463 5.20337 18.993 6.12504L20.6847 4.43337C18.783 3.11504 16.4847 2.33337 13.9997 2.33337C7.55967 2.33337 2.33301 7.56004 2.33301 14C2.33301 20.44 7.55967 25.6667 13.9997 25.6667C16.018 25.6667 17.9197 25.1534 19.5763 24.2434L17.8263 22.4934C16.6597 23.03 15.3647 23.3334 13.9997 23.3334ZM22.1663 17.5H18.6663V19.8334H22.1663V23.3334H24.4997V19.8334H27.9997V17.5H24.4997V14H22.1663V17.5Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_201_2530">
                                        <rect width="28" height="28" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[14px] leading-[24px] font-medium text-[#A3AED0]">
                                New Tasks
                            </p>
                            <p className="text-[24px] leading-[32px] font-bold ">154</p>
                        </div>
                    </div>
                    <div className="ps-[17px] pe-[12px] py-[20px] flex items-center gap-[18px] bg-white rounded-[20px] min-w-[248px]">
                        <div className="rounded-full bg-[#F4F7FE] p-[11.5px] flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_201_2533)">
                                    <path
                                        d="M16.2503 1.08331H4.33366C3.14199 1.08331 2.16699 2.05831 2.16699 3.24998V17.3333C2.16699 17.9291 2.65449 18.4166 3.25033 18.4166C3.84616 18.4166 4.33366 17.9291 4.33366 17.3333V4.33331C4.33366 3.73748 4.82116 3.24998 5.41699 3.24998H16.2503C16.8462 3.24998 17.3337 2.76248 17.3337 2.16665C17.3337 1.57081 16.8462 1.08331 16.2503 1.08331ZM16.8895 6.05581L22.122 11.2883C22.5228 11.6891 22.7503 12.2416 22.7503 12.8158V22.75C22.7503 23.9417 21.7753 24.9166 20.5837 24.9166H8.65616C7.46449 24.9166 6.50033 23.9417 6.50033 22.75L6.51116 7.58331C6.51116 6.39165 7.47533 5.41665 8.66699 5.41665H15.3512C15.9253 5.41665 16.4778 5.64415 16.8895 6.05581ZM16.2503 13H21.1253L15.167 7.04165V11.9166C15.167 12.5125 15.6545 13 16.2503 13Z"
                                        fill="#4318FF"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_201_2533">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[14px] leading-[24px] font-medium text-[#A3AED0]">
                                Total Projects
                            </p>
                            <p className="text-[24px] leading-[32px] font-bold ">2935</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-[20px] pt-[20px]">
                    <div className="p-[25px] bg-white rounded-[20px]">
                        <div className='flex justify-between items-center'>
                            <div className="bg-[#F4F7FE] w-fit custome-calendar rounded-[7px]">
                                <Calendar id="buttondisplay" className='' value={date} onChange={(e) => setDate(e.value)} showIcon placeholder='Select Date' />
                                {/* <label htmlFor="buttondisplay" className="font-bold block mb-2">
                                Button Display
                            </label> */}
                            </div>
                            <div className='p-[5px] rounded-[10px] bg-[#F4F7FE] cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_201_2536)">
                                        <path d="M6.4 9.2H6.6C7.37 9.2 8 9.83 8 10.6V17.6C8 18.37 7.37 19 6.6 19H6.4C5.63 19 5 18.37 5 17.6V10.6C5 9.83 5.63 9.2 6.4 9.2ZM12 5C12.77 5 13.4 5.63 13.4 6.4V17.6C13.4 18.37 12.77 19 12 19C11.23 19 10.6 18.37 10.6 17.6V6.4C10.6 5.63 11.23 5 12 5ZM17.6 13C18.37 13 19 13.63 19 14.4V17.6C19 18.37 18.37 19 17.6 19C16.83 19 16.2 18.37 16.2 17.6V14.4C16.2 13.63 16.83 13 17.6 13Z" fill="#4318FF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_201_2536">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className='flex gap-[30px] pt-[40px]'>
                            <div>
                                <p className='text-[#2B3674] text-[34px] font-bold leading-[42px] '>$37.5K</p>
                                <div className="flex items-center gap-[4px]">
                                    <p className="text-[#A3AED0] text-[12px] leading-[20px] font-normal">
                                        Total Spent
                                    </p>
                                    <p className="text-[#05CD99] text-[12px] leading-[20px] font-bold">
                                        +2.45%
                                    </p>
                                </div>
                            </div>
                            <LineChart />
                        </div>
                    </div>
                    <div className="p-[25px] bg-white rounded-[20px]">
                        <div className='flex justify-between items-center'>
                            <p className='text-[24px] leading-[normal] font-bold'>Weekly Revenue</p>
                            <div className='p-[5px] rounded-[10px] bg-[#F4F7FE] cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_201_2536)">
                                        <path d="M6.4 9.2H6.6C7.37 9.2 8 9.83 8 10.6V17.6C8 18.37 7.37 19 6.6 19H6.4C5.63 19 5 18.37 5 17.6V10.6C5 9.83 5.63 9.2 6.4 9.2ZM12 5C12.77 5 13.4 5.63 13.4 6.4V17.6C13.4 18.37 12.77 19 12 19C11.23 19 10.6 18.37 10.6 17.6V6.4C10.6 5.63 11.23 5 12 5ZM17.6 13C18.37 13 19 13.63 19 14.4V17.6C19 18.37 18.37 19 17.6 19C16.83 19 16.2 18.37 16.2 17.6V14.4C16.2 13.63 16.83 13 17.6 13Z" fill="#4318FF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_201_2536">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className=''>
                            <BarChart />
                        </div>
                    </div>
                    <div className="p-[25px] bg-white rounded-[20px]">
                        <div className='flex justify-between items-center'>
                            <p className='text-[24px] leading-[normal] font-bold'>Check Table</p>
                            <div className='p-[5px] rounded-[10px] bg-[#F4F7FE] cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_201_2551)">
                                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#4318FF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_201_2551">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className='custome-table pt-[8px]'>
                            <DataTable value={products} >
                                <Column field="name" header="Name"></Column>
                                <Column field="process" header="Process"></Column>
                                <Column field="quantity" header="Quantity"></Column>
                                <Column field="date" header="Date"></Column>
                            </DataTable>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-[20px]'>
                        <div className="p-[25px] bg-white rounded-[20px]">
                            <div>
                                <div className="flex items-center justify-between gap-[4px]">
                                    <p className="text-[#A3AED0] text-[12px] leading-[20px] font-normal">
                                        Daily Traffic
                                    </p>
                                    <p className="text-[#05CD99] text-[12px] leading-[20px] font-bold">
                                        +2.45%
                                    </p>
                                </div>
                                <div className='flex gap-[30px] pb-[40px]'>
                                    <div className="flex items-center gap-[4px]">
                                        <p className='text-[#2B3674] text-[34px] font-bold leading-[42px] '>2.579</p>
                                        <p className="text-[#A3AED0] text-[12px] leading-[20px] font-normal">
                                            Visitors
                                        </p>
                                    </div>
                                </div>
                                <Daily_Traffic_Bar_Chart />
                            </div>
                        </div>
                        <div className="p-[25px] bg-white rounded-[20px]">
                            <div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[16px] leading-[28px] font-bold'>Your Pie Chart</p>
                                    <div className='p-[5px] rounded-[10px] bg-[#F4F7FE] cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_201_2536)">
                                                <path d="M6.4 9.2H6.6C7.37 9.2 8 9.83 8 10.6V17.6C8 18.37 7.37 19 6.6 19H6.4C5.63 19 5 18.37 5 17.6V10.6C5 9.83 5.63 9.2 6.4 9.2ZM12 5C12.77 5 13.4 5.63 13.4 6.4V17.6C13.4 18.37 12.77 19 12 19C11.23 19 10.6 18.37 10.6 17.6V6.4C10.6 5.63 11.23 5 12 5ZM17.6 13C18.37 13 19 13.63 19 14.4V17.6C19 18.37 18.37 19 17.6 19C16.83 19 16.2 18.37 16.2 17.6V14.4C16.2 13.63 16.83 13 17.6 13Z" fill="#4318FF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_201_2536">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className=''>
                                    <PieChartDemo />
                                </div>
                                <div className='mt-[20px] flex justify-between items-center px-[40px] py-[14px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] rounded-[15px]'>
                                    <div>
                                        <div className='flex items-center gap-[5px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#4318FF" />
                                            </svg>
                                            <p className='text-[#A3AED0] text-[12px] font-medium'>Your files</p>
                                        </div>
                                        <p className='text-[#2B3674] text-[18px] leading-[30px] font-bold text-center'>63%</p>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-[5px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#6AD2FF" />
                                            </svg>
                                            <p className='text-[#A3AED0] text-[12px] font-medium'>System</p>
                                        </div>
                                        <p className='text-[#2B3674] text-[18px] leading-[30px] font-bold text-center'>25%</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-[25px] bg-white rounded-[20px]">
                        <div className='flex justify-between items-center'>
                            <p className='text-[24px] leading-[normal] font-bold'>Complex Table</p>
                            <div className='p-[5px] rounded-[10px] bg-[#F4F7FE] cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_201_2551)">
                                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#4318FF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_201_2551">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className='custome-table pt-[8px]'>
                            <DataTable value={complexTableData} >
                                <Column field="name" header="Name"></Column>
                                <Column field="status" header="Status"></Column>
                                <Column field="date" header="Date"></Column>
                                <Column field="process" header="Process" body={sliderDataBody}></Column>
                            </DataTable>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-[20px]'>
                        <div className="p-[25px] bg-white rounded-[20px]">
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-[12px]'>
                                    <div className='flex justify-center items-center h-[38px] w-[38px] rounded-full bg-[#EFF4FB]'>
                                        <Checkbox checked />
                                    </div>
                                    <p className='text-[18px] leading-[normal] font-bold'>Tasks</p>
                                </div>
                                <div className='p-[5px] rounded-[10px] bg-[#F4F7FE] cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_201_2551)">
                                            <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#4318FF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_201_2551">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className='custome-table pt-[8px]'>
                                <DataTable value={taskData} >
                                    <Column field="name" body={checkboxBodyTemplate}></Column>
                                </DataTable>
                            </div>
                        </div>
                        <div className="p-[16px] bg-white rounded-[20px] date-section">
                            <Calendar className='' value={date} onChange={(e) => setDate(e.value)} inline showWeek />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-[20px]'>
                        <div className="p-[25px] bg-white rounded-[20px]">
                            <div className='flex items-center gap-[16px]'>
                                <div className='rounded-[15px] p-[10px] bg-[#FEEFEE] w-fit'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <g clip-path="url(#clip0_201_2793)">
                                            <path d="M22.7265 14.4084C20.8948 9.64835 14.3732 9.39169 15.9482 2.47335C16.0648 1.96002 15.5165 1.56335 15.0732 1.83169C10.8382 4.32835 7.79317 9.33335 10.3482 15.89C10.5582 16.4267 9.92817 16.9284 9.47317 16.5784C7.3615 14.98 7.13984 12.6817 7.3265 11.0367C7.3965 10.43 6.60317 10.1384 6.26484 10.64C5.4715 11.8534 4.6665 13.8134 4.6665 16.765C5.10984 23.2984 10.6282 25.305 12.6115 25.5617C15.4465 25.9234 18.5148 25.3984 20.7198 23.38C23.1465 21.1284 24.0332 17.535 22.7265 14.4084ZM11.8998 20.2767C13.5798 19.8684 14.4432 18.655 14.6765 17.5817C15.0615 15.9134 13.5565 14.28 14.5715 11.6434C14.9565 13.825 18.3865 15.19 18.3865 17.57C18.4798 20.5217 15.2832 23.0534 11.8998 20.2767Z" fill="#EE5D50" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_201_2793">
                                                <rect width="28" height="28" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-[12px] font-bold leading-[20px]'>Business Design</p>
                                    <p className='text-[16px] font-bold leading-[28px]'>New lession is available</p>
                                </div>
                            </div>
                            <div className='py-[46px]'>
                                <p className='text-[20px] font-bold leading-[32px]'>What do you need to know to
                                    create better products?</p>
                            </div>
                            <div>
                                <div className='flex items-center gap-[26px]'>
                                    <div className='flex items-center gap-[6px]'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_201_2798)">
                                                    <path d="M15.0698 1.01001H9.06982V3.01001H15.0698V1.01001ZM11.0698 14.01H13.0698V8.01001H11.0698V14.01ZM19.0998 7.39001L20.5198 5.97001C20.0898 5.46001 19.6198 4.98001 19.1098 4.56001L17.6898 5.98001C16.1398 4.74001 14.1898 4.00001 12.0698 4.00001C7.09982 4.00001 3.06982 8.03001 3.06982 13C3.06982 17.97 7.08982 22 12.0698 22C17.0498 22 21.0698 17.97 21.0698 13C21.0698 10.89 20.3298 8.94001 19.0998 7.39001ZM12.0698 20.01C8.19982 20.01 5.06982 16.88 5.06982 13.01C5.06982 9.14001 8.19982 6.01001 12.0698 6.01001C15.9398 6.01001 19.0698 9.14001 19.0698 13.01C19.0698 16.88 15.9398 20.01 12.0698 20.01Z" fill="#01B574" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_201_2798">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className='text-[14px] font-bold leading-[24px]'>85 mins</p>
                                    </div>
                                    <div className='flex items-center gap-[6px]'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_201_2801)">
                                                    <path d="M13.0498 9.78999L9.9998 7.49999V16.5L13.0498 14.21L15.9998 12L13.0498 9.78999ZM13.0498 9.78999L9.9998 7.49999V16.5L13.0498 14.21L15.9998 12L13.0498 9.78999ZM13.0498 9.78999L9.9998 7.49999V16.5L13.0498 14.21L15.9998 12L13.0498 9.78999ZM10.9998 4.06999V2.04999C8.9898 2.24999 7.1598 3.04999 5.6798 4.25999L7.0998 5.68999C8.20981 4.82999 9.5398 4.24999 10.9998 4.06999ZM5.6898 7.09999L4.2598 5.67999C3.0498 7.15999 2.2498 8.98999 2.0498 11H4.0698C4.2498 9.53999 4.8298 8.20999 5.6898 7.09999ZM4.0698 13H2.0498C2.2498 15.01 3.0498 16.84 4.2598 18.32L5.6898 16.89C4.8298 15.79 4.2498 14.46 4.0698 13ZM5.6798 19.74C7.1598 20.95 8.9998 21.75 10.9998 21.95V19.93C9.5398 19.75 8.20981 19.17 7.0998 18.31L5.6798 19.74ZM21.9998 12C21.9998 17.16 18.0798 21.42 13.0498 21.95V19.93C16.9698 19.41 19.9998 16.05 19.9998 12C19.9998 7.94999 16.9698 4.58999 13.0498 4.06999V2.04999C18.0798 2.57999 21.9998 6.83999 21.9998 12Z" fill="#EE5D50" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_201_2801">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className='text-[14px] font-bold leading-[24px]'>Video format</p>
                                    </div>
                                </div>
                                <div className='pt-[40px] '>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center'>
                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                        </div>
                                        <div className='text-[14px] leading-[24px] font-bold text-white rounded-[16px] px-[25px] py-[8px] bg-[#4318FF] cursor-pointer hover:bg-[#868CFF] transition-all duration-300'>
                                            Get Started
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[16px] bg-white rounded-[20px] date-section">
                            <div className='flex justify-between items-center'>
                                <p className='text-[18px] leading-[32px] font-bold'>Team members</p>
                                <div className='p-[6px] rounded-[10px] bg-[#F4F7FE] cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_201_2854)">
                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="#4318FF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_201_2854">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className='pt-[20px] flex flex-col gap-[16px]'>
                                <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] px-[16px] py-[12px]'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-[12px]'>
                                            <Image src='https://dummyimage.com/50x50/E0E5F2/040405' alt='avatar' className='w-[46px] h-[46px] rounded-full overflow-auto' />
                                            <div>
                                                <div className='text-[16px] leading-[28px] font-bold '>Adela Parkson</div>
                                                <div className='text-[12px] leading-[20px] font-medium text-[#A3AED0]'>Creative Director</div>
                                            </div>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_201_2845)">
                                                    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#A3AED0" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_201_2845">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] px-[16px] py-[12px]'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-[12px]'>
                                            <Image src='https://dummyimage.com/50x50/E0E5F2/040405' alt='avatar' className='w-[46px] h-[46px] rounded-full overflow-auto' />
                                            <div>
                                                <div className='text-[16px] leading-[28px] font-bold '>Christian Mad</div>
                                                <div className='text-[12px] leading-[20px] font-medium text-[#A3AED0]'>Product Designer</div>
                                            </div>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_201_2845)">
                                                    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#A3AED0" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_201_2845">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] px-[16px] py-[12px]'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-[12px]'>
                                            <Image src='https://dummyimage.com/50x50/E0E5F2/040405' alt='avatar' className='w-[46px] h-[46px] rounded-full overflow-auto' />
                                            <div>
                                                <div className='text-[16px] leading-[28px] font-bold '>Jason Statham</div>
                                                <div className='text-[12px] leading-[20px] font-medium text-[#A3AED0]'>Junior Graphic Designer</div>
                                            </div>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_201_2845)">
                                                    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#A3AED0" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_201_2845">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-[16px]'>
                        <div className="p-[30px] bg-white rounded-[20px] date-section">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91" fill="none">
                                    <g clip-path="url(#clip0_201_2857)">
                                        <path d="M67.5294 16.9487C67.226 16.9487 66.9227 16.8729 66.6573 16.7212C59.3773 12.9675 53.0831 11.375 45.5377 11.375C38.0302 11.375 30.9019 13.1571 24.4181 16.7212C23.5081 17.2141 22.3706 16.8729 21.8398 15.9629C21.3469 15.0529 21.6881 13.8775 22.5981 13.3846C29.6506 9.55498 37.3856 7.58331 45.5377 7.58331C53.6139 7.58331 60.6664 9.3654 68.4014 13.3466C69.3494 13.8396 69.6906 14.9771 69.1977 15.8871C68.8564 16.5696 68.2119 16.9487 67.5294 16.9487ZM13.2706 36.855C12.8914 36.855 12.5123 36.7412 12.171 36.5137C11.2989 35.9071 11.1094 34.7316 11.716 33.8596C15.4698 28.5512 20.2473 24.3804 25.9348 21.4608C37.8406 15.3183 53.0831 15.2804 65.0269 21.4229C70.7144 24.3425 75.4919 28.4754 79.2456 33.7458C79.8523 34.58 79.6627 35.7933 78.7906 36.4C77.9185 37.0066 76.7431 36.8171 76.1364 35.945C72.7239 31.1675 68.4014 27.4137 63.2827 24.7975C52.4006 19.2237 38.4852 19.2237 27.641 24.8354C22.4844 27.4896 18.1619 31.2812 14.7494 36.0587C14.446 36.5896 13.8773 36.855 13.2706 36.855ZM36.9685 82.6204C36.4756 82.6204 35.9827 82.4308 35.6414 82.0516C32.3427 78.7529 30.5606 76.6296 28.0202 72.0416C25.4039 67.3779 24.0389 61.6904 24.0389 55.5858C24.0389 44.3246 33.6698 35.1487 45.4998 35.1487C57.3298 35.1487 66.9606 44.3246 66.9606 55.5858C66.9606 56.6475 66.1264 57.4816 65.0648 57.4816C64.0031 57.4816 63.1689 56.6475 63.1689 55.5858C63.1689 46.41 55.2444 38.9404 45.4998 38.9404C35.7552 38.9404 27.8306 46.41 27.8306 55.5858C27.8306 61.0458 29.0439 66.0887 31.3569 70.1837C33.7835 74.5441 35.4519 76.4021 38.3714 79.3596C39.0919 80.1179 39.0919 81.2933 38.3714 82.0516C37.9544 82.4308 37.4614 82.6204 36.9685 82.6204ZM64.1548 75.6058C59.6427 75.6058 55.6614 74.4683 52.4006 72.2312C46.751 68.4016 43.3764 62.1833 43.3764 55.5858C43.3764 54.5241 44.2106 53.69 45.2723 53.69C46.3339 53.69 47.1681 54.5241 47.1681 55.5858C47.1681 60.9321 49.8981 65.975 54.5239 69.0841C57.216 70.9041 60.3631 71.7762 64.1548 71.7762C65.0648 71.7762 66.5814 71.6625 68.0981 71.3971C69.1218 71.2075 70.1077 71.89 70.2973 72.9516C70.4869 73.9754 69.8044 74.9612 68.7427 75.1508C66.5814 75.5679 64.6856 75.6058 64.1548 75.6058ZM56.5335 83.4166C56.3819 83.4166 56.1923 83.3787 56.0406 83.3408C50.0119 81.6725 46.0685 79.4354 41.9356 75.3783C36.6273 70.1079 33.7077 63.0933 33.7077 55.5858C33.7077 49.4433 38.9402 44.4383 45.386 44.4383C51.8319 44.4383 57.0644 49.4433 57.0644 55.5858C57.0644 59.6429 60.5906 62.9416 64.951 62.9416C69.3114 62.9416 72.8377 59.6429 72.8377 55.5858C72.8377 41.2912 60.5148 29.6887 45.3481 29.6887C34.5798 29.6887 24.7214 35.6796 20.2852 44.9691C18.8064 48.0404 18.0481 51.6425 18.0481 55.5858C18.0481 58.5433 18.3135 63.2071 20.5885 69.2737C20.9677 70.2596 20.4748 71.3591 19.4889 71.7004C18.5031 72.0796 17.4035 71.5487 17.0623 70.6008C15.2044 65.6337 14.2944 60.7046 14.2944 55.5858C14.2944 51.0358 15.1664 46.9029 16.8727 43.3008C21.9156 32.7221 33.101 25.8591 45.3481 25.8591C62.6002 25.8591 76.6293 39.1679 76.6293 55.5479C76.6293 61.6904 71.3969 66.6954 64.951 66.6954C58.5052 66.6954 53.2727 61.6904 53.2727 55.5479C53.2727 51.4908 49.7464 48.1921 45.386 48.1921C41.0256 48.1921 37.4994 51.4908 37.4994 55.5479C37.4994 62.0316 40.0019 68.0983 44.5898 72.6483C48.1919 76.2125 51.6423 78.1841 56.9885 79.6629C58.0123 79.9283 58.581 80.99 58.3156 81.9758C58.126 82.8479 57.3298 83.4166 56.5335 83.4166Z" fill="#4318FF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_201_2857">
                                            <rect width="91" height="91" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className='text-[24px] leading-[32px] font-bold pt-[16px]'>Control card security in-app with a tap</p>
                            <p className='text-[14px] leading-[24px] font-medium pt-[16px] text-[#A3AED0]'>Discover our cards benefits, with one tap.</p>
                            <div className='text-[14px] leading-[24px] font-bold text-white rounded-[16px] px-[25px] py-[11px] bg-[#4318FF] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 text-center mt-[35px]'>
                                Cards
                            </div>
                        </div>
                        <div className="p-[20px] bg-white rounded-[20px] date-section">
                            <div className='relative'>
                                <div className='bg-[linear-gradient(0deg,_#111C44_-31.39%,_rgba(17,_28,_68,_0.00)_96.52%)] absolute top-0 left-0 w-full h-full z-[1] rounded-[20px]'></div>
                                <div className='rounded-[12px] absolute top-[14px] right-[14px] backdrop-blur-[25px] w-[43px] h-[43px] z-[2] p-[10px] bg-[linear-gradient(113deg,_rgba(255,_255,_255,_0.47)_0%,_rgba(255,_255,_255,_0.00)_110.84%)]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_201_2868)">
                                            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_201_2868">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <Image src={starbucks_coffee} className='rounded-[20px]' alt="starbucks_coffee" />
                                <Image src={starbucks_logo} className='rounded-[20px] absolute bottom-[-25px] left-[14px] z-[2]' alt="starbucks_logo" />
                            </div>
                            <div className='pt-[40px]'>
                                <p className='text-[24px] leading-[32px] font-bold pt-[16px]'>Starbucks</p>
                                <div className='flex items-center gap-[10px]'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_201_2865)">
                                                <path d="M21.9 5H18V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V5H12.1C11.51 5 11.05 5.51 11.1 6.1L11.22 7.31C14.9 8.16 18 10.77 18 15L18.02 23H19.72C20.56 23 21.25 22.35 21.35 21.53L22.89 6.1C22.95 5.51 22.49 5 21.9 5ZM15 21H2C1.45 21 1 21.45 1 22C1 22.55 1.45 23 2 23H15C15.55 23 16 22.55 16 22C16 21.45 15.55 21 15 21ZM2.1 15H14.9C15.52 15 16.01 14.44 15.89 13.84C15.24 10.61 11.87 8.99 8.5 8.99C5.13 8.99 1.77 10.61 1.11 13.84C0.99 14.44 1.49 15 2.1 15ZM15 17H2C1.45 17 1 17.45 1 18C1 18.55 1.45 19 2 19H15C15.55 19 16 18.55 16 18C16 17.45 15.55 17 15 17Z" fill="#A3AED0" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_201_2865">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className='text-[18px] leading-[30px] font-medium pt-[6px] text-[#A3AED0]'>10% cashback & off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
