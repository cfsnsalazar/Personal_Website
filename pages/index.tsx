import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import { NavPage } from '../components/navMenu';

export function Home(): ReactElement {
    return (
        <Layout page={NavPage.HOME}>
            <Head>
                <title>{'Napoleon Salazar'}</title>
            </Head>
            <section className="text-xl leading-7 mt-12 mb-12 mr-6 ml-6">
                <div className="flex md:flex-row flex-col items-center md:mt-16 mb-16">
                    <div className="flex flex-auto md:flex-none justify-center ">
                        <img src="../images/profile.jpg" className="rounded-full m-4 w-48 sm:w-56 h-48 sm:h-56" />
                    </div>
                    <div className="flex-col items-center">
                        <h1 className="text-5xl leading-12 font-extrabold text-center tracking-tight">
                            {"Hola! I'm Napoleon"}
                        </h1>
                        <p className=" mx-auto mt-6 text-xl font-semibold text-gray-600 text-center italic">
                            {'I work at Coolfire Solutions as a Mobile Developer building Core'}
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-xl leading-7 mt-12 mb-12 mr-6 ml-6">
                <h1 className="text-3xl leading-12 text-left tracking-tighter font-bold">Skills</h1>
                <div className="sm:flex">
                    <p className="mx-auto text-lg text-gray-600 text-justify mt-6 ml-2 mr-2">
                        {`Although I consider myself to be "T-Shaped", I have a special inclination for Mobile Development. Kotlin is without a doubt the language I enjoy the most nowadays `}
                    </p>
                    <div className="flex flex-col">
                        <div className="flex m-6 text-blue-800 fill-current justify-center">
                            <svg
                                className="w-16 h-16 p-2"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z" />
                            </svg>
                            <svg
                                className="w-12 h-16 p-2"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1.3 24l11.3-11.5L24 24zM0 0h12L0 12.5zM13.4 0L0 14v10l12-12L24 0z" />
                            </svg>
                            <svg
                                className="w-16 h-16 p-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 305.001 305.001"
                            >
                                <path
                                    id="XMLID_8_"
                                    d="M150.99,56.513c-14.093,9.912-30.066,21.147-38.624,39.734c-14.865,32.426,30.418,67.798,32.353,69.288
		c0.45,0.347,0.988,0.519,1.525,0.519c0.57,0,1.141-0.195,1.605-0.583c0.899-0.752,1.154-2.029,0.614-3.069
		c-0.164-0.316-16.418-31.888-15.814-54.539c0.214-7.888,11.254-16.837,22.942-26.312c10.705-8.678,22.839-18.514,29.939-30.02
		c15.586-25.327-1.737-50.231-1.914-50.479c-0.688-0.966-1.958-1.317-3.044-0.84c-1.085,0.478-1.686,1.652-1.438,2.811
		c0.035,0.164,3.404,16.633-5.97,33.6C169.301,43.634,160.816,49.603,150.99,56.513z"
                                />
                                <path
                                    id="XMLID_9_"
                                    d="M210.365,67.682c0.994-0.749,1.286-2.115,0.684-3.205c-0.602-1.09-1.913-1.571-3.077-1.129
		c-2.394,0.91-58.627,22.585-58.627,48.776c0,18.053,7.712,27.591,13.343,34.556c2.209,2.731,4.116,5.09,4.744,7.104
		c1.769,5.804-2.422,16.294-4.184,19.846c-0.508,1.022-0.259,2.259,0.605,3.005c0.467,0.403,1.05,0.607,1.634,0.607
		c0.497,0,0.996-0.148,1.427-0.448c0.967-0.673,23.63-16.696,19.565-36.001c-1.514-7.337-5.12-12.699-8.302-17.43
		c-4.929-7.329-8.489-12.624-3.088-22.403C181.419,89.556,210.076,67.899,210.365,67.682z"
                                />
                                <path
                                    id="XMLID_10_"
                                    d="M63.99,177.659c-0.964,2.885-0.509,5.75,1.315,8.283c6.096,8.462,27.688,13.123,60.802,13.123
		c0.002,0,0.003,0,0.004,0c4.487,0,9.224-0.088,14.076-0.262c52.943-1.896,72.58-18.389,73.39-19.09
		c0.883-0.764,1.119-2.037,0.57-3.067c-0.549-1.029-1.733-1.546-2.864-1.235c-18.645,5.091-53.463,6.898-77.613,6.898
		c-27.023,0-40.785-1.946-44.154-3.383c1.729-2.374,12.392-6.613,25.605-9.212c1.263-0.248,2.131-1.414,2.006-2.695
		c-0.125-1.281-1.201-2.258-2.488-2.258C106.893,164.762,68.05,165.384,63.99,177.659z"
                                />
                                <path
                                    id="XMLID_11_"
                                    d="M241.148,160.673c-10.92,0-21.275,5.472-21.711,5.705c-1.01,0.541-1.522,1.699-1.245,2.811
		c0.278,1.111,1.277,1.892,2.423,1.893c0.232,0.001,23.293,0.189,25.382,13.365c1.85,11.367-21.82,29.785-31.097,35.923
		c-1.002,0.663-1.391,1.945-0.926,3.052c0.395,0.943,1.314,1.533,2.304,1.533c0.173,0,0.348-0.018,0.522-0.056
		c2.202-0.47,53.855-11.852,48.394-41.927C261.862,164.541,250.278,160.673,241.148,160.673z"
                                />
                                <path
                                    id="XMLID_12_"
                                    d="M205.725,216.69c0.18-0.964-0.221-1.944-1.023-2.506l-12.385-8.675c-0.604-0.423-1.367-0.556-2.076-0.368
		c-0.129,0.034-13.081,3.438-31.885,5.526c-7.463,0.837-15.822,1.279-24.175,1.279c-18.799,0-31.091-2.209-32.881-3.829
		c-0.237-0.455-0.162-0.662-0.12-0.777c0.325-0.905,2.068-1.98,3.192-2.405c1.241-0.459,1.91-1.807,1.524-3.073
		c-0.385-1.266-1.69-2.012-2.978-1.702c-12.424,2.998-18.499,7.191-18.057,12.461c0.785,9.343,22.428,14.139,40.725,15.408
		c2.631,0.18,5.477,0.272,8.456,0.272c0.002,0,0.003,0,0.005,0c30.425,0,69.429-9.546,69.819-9.643
		C204.818,218.423,205.544,217.654,205.725,216.69z"
                                />
                                <path
                                    id="XMLID_13_"
                                    d="M112.351,236.745c0.938-0.611,1.354-1.77,1.021-2.838c-0.332-1.068-1.331-1.769-2.453-1.755
		c-1.665,0.044-16.292,0.704-17.316,10.017c-0.31,2.783,0.487,5.325,2.37,7.556c5.252,6.224,19.428,9.923,43.332,11.31
		c2.828,0.169,5.7,0.254,8.539,0.254c30.39,0,50.857-9.515,51.714-9.92c0.831-0.393,1.379-1.209,1.428-2.127
		c0.049-0.917-0.409-1.788-1.193-2.267l-15.652-9.555c-0.543-0.331-1.193-0.441-1.813-0.314c-0.099,0.021-10.037,2.082-25.035,4.119
		c-2.838,0.385-6.392,0.581-10.562,0.581c-14.982,0-31.646-2.448-34.842-4.05C111.843,237.455,111.902,237.075,112.351,236.745z"
                                />
                                <path
                                    id="XMLID_14_"
                                    d="M133.681,290.018c69.61-0.059,106.971-12.438,114.168-20.228c2.548-2.757,2.823-5.366,2.606-7.07
		c-0.535-4.194-4.354-6.761-4.788-7.04c-1.045-0.672-2.447-0.496-3.262,0.444c-0.813,0.941-0.832,2.314-0.016,3.253
		c0.439,0.565,0.693,1.51-0.591,2.795c-2.877,2.687-31.897,10.844-80.215,13.294c-6.619,0.345-13.561,0.519-20.633,0.52
		c-43.262,0-74.923-5.925-79.079-9.379c1.603-2.301,12.801-5.979,24.711-8.058c1.342-0.234,2.249-1.499,2.041-2.845
		c-0.208-1.346-1.449-2.273-2.805-2.096c-0.336,0.045-1.475,0.115-2.796,0.195c-19.651,1.2-42.36,3.875-43.545,13.999
		c-0.36,3.086,0.557,5.886,2.726,8.324c5.307,5.963,20.562,13.891,91.475,13.891C133.68,290.018,133.68,290.018,133.681,290.018z"
                                />
                                <path
                                    id="XMLID_15_"
                                    d="M261.522,271.985c-0.984-0.455-2.146-0.225-2.881,0.567c-0.103,0.11-10.568,11.054-42.035,17.48
		c-12.047,2.414-34.66,3.638-67.211,3.638c-32.612,0-63.643-1.283-63.953-1.296c-1.296-0.063-2.405,0.879-2.581,2.155
		c-0.177,1.276,0.645,2.477,1.897,2.775c0.323,0.077,32.844,7.696,77.31,7.696c21.327,0,42.08-1.733,61.684-5.151
		c36.553-6.408,39.112-24.533,39.203-25.301C263.082,273.474,262.504,272.44,261.522,271.985z"
                                />
                            </svg>
                            <svg
                                className="w-16 h-16 p-2"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
                            </svg>
                        </div>
                        <a
                            href="../files/Napoleon_Salazar_Resume_2020.pdf"
                            download
                            className="flex bg-blue-800 text-white pt-2 pb-2 ml-6 mr-6 rounded-md text-base justify-center"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>

            <section className="text-xl leading-7 mt-12 mb-12 mr-6 ml-6">
                <h1 className="text-3xl leading-12 text-left tracking-tighter font-bold">Open Source Contributions </h1>

                <p className=" mx-auto text-lg text-gray-600 text-justify mt-6 ml-2 mr-2">
                    {`Without open source, several technologies that we take for granted today would not exist. 
                    These are some of the repositories that I have contributed to : `}
                </p>
                <ul className="ext-blue-800 text-base mt-6 ml-2 mr-2">
                    <li>
                        <a href="https://github.com/intuit/truffle-shuffle" className="pt-4">
                            Truffle Shuffle
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/WildAid/o-fish-android" className="pt-4">
                            WildAid O-FISH Android App
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/TheCodeMonks/NYTimes-App" className="pt-4">
                            TheCodeMonks / NYTimes-App
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/AlinaStepanova/MovieFinder" className="pt-4">
                            AlinaStepanova / MovieFinder
                        </a>
                    </li>
                </ul>
            </section>
        </Layout>
    );
}
export default Home;
