import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import QRCode from 'qrcode.react';
import Carousel from '../components/Carousel';
import PieChart from '../components/PieChart';
import dynamic from 'next/dynamic';
import Flyer from '../components/Flyer';
const BarChart = dynamic(() => import('../components/BarChart'), { ssr: false });


async function downloadFlyer(setDownloading) {
  setDownloading(true);

  const flyerElement = document.createElement("div");
  flyerElement.style.position = "absolute";
  flyerElement.style.left = "-9999px";
  document.body.appendChild(flyerElement);

  ReactDOM.render(<Flyer />, flyerElement);

  setTimeout(async () => {
    const canvas = await html2canvas(flyerElement);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Global-Rhythms-Flyer.pdf");

    document.body.removeChild(flyerElement);
    setDownloading(false);
  }, 1000);
}

export default function Home() {
  const [downloading, setDownloading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState();

  function calculateTimeRemaining() {
    const eventDate = new Date(2023, 4, 20, 21, 0, 0);
    const currentDate = new Date();
    const timeDiff = eventDate - currentDate;

    setTimeRemaining(timeDiff);
  }

  useEffect(() => {
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTimeRemaining(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days} days ${hours} hrs ${minutes} min ${seconds} sec`;
  }


  return (
    <>
      <Head>
        <title>Global Rhythms: A Georgian College Open Concert Night</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex flex-col min-h-screen md:p-8 sm:p-4 p-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <div id="hiddenFlyer" style={{ display: "none" }}>
          <Flyer />
        </div>
        <header className="text-center relative">
          <div className="banner-image w-full h-56 md:h-64 rounded-t-md"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center sm:p-4 md:p-8 backdrop-blur-md rounded-t-md">
            <h1 className='text-shadow text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-green-300 bg-green-900 bg-opacity-50 p-1 rounded-lg'>Global Rhythms</h1>
            <h2 className="text-shadow text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-blue-50 sm:p-2g">
              A Georgian College Open Concert Night
            </h2>
            <p className="text-shadow text-sm sm:text-lg md:text-xl mb-2 sm:mb-6 text-blue-50 p-1 sm:p-2">
              Join us on May 20th, 2023 for an unforgettable night of performances and connections.
            </p>
          </div>
        </header>



        <section className="bg-opacity-50 bg-blue-50 text-blue-900 md:p-8 p-4 rounded-b mb-8">
          <Image
            src="/gc-logo.png"
            alt="Georgian College Logo"
            width={128}
            height={128}
            className="mb-4"
          />
          <h3 className="text-2xl font-bold mb-4">Why did we choose this event?</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">We organized the Global Rhythms open mic night to provide a platform for Georgian College students to showcase their talents, creativity, and cultural diversity. This event aims to:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Help students relax and destress through music and performances.</li>
                <li>Encourage students to express themselves and share their experiences.</li>
                <li>Bring together our diverse community and foster connections among students.</li>
              </ul>
              <p>Join us for an evening filled with amazing performances, good vibes, and a celebration of our vibrant community!</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-bold mb-2">Event Details</h3>
              <p className="mb-2"><strong>Date:</strong> May 20, 2023</p>
              <p className="mb-2"><strong>Time:</strong> 7:00 PM - 10:00 PM</p>
              {timeRemaining && (
                <p className="mb-2">
                  <span className="text-sm inline-block p-2 text-center bg-blue-900 text-blue-50 rounded-md border-2 border-blue-600 shadow-md">
                    {formatTimeRemaining(timeRemaining)}
                  </span>
                </p>
              )}
              <p className="mb-2"><strong>Location:</strong> Georgian College, Barrie Campus, Building C, Room C101</p>
              <p className="mb-2"><strong>Admission:</strong> Free for all Georgian College students</p>
            </div>


          </div>
        </section>
        <Carousel />
        <section className="fade bg-opacity-50 bg-blue-50 text-blue-900 md:p-8 p-4 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">Register for the Open Mic Night</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">Interested in performing at our open mic night? Register now by filling out the form on the right. Please keep in mind the following guidelines:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Each performance should not exceed 5 minutes.</li>
                <li>Performances must be respectful and suitable for all audiences.</li>
                <li>Original content is highly encouraged, but covers are welcome too.</li>
              </ul>
              <p>After registration, our team will review the submissions and get in touch with the selected performers.</p>
              <p>We are providing instruments and supplies.</p>
            </div>
            <div>
              <form className="bg-opacity-75 shadow-md bg-blue-50 rounded-md px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input className="shadow appearance-none border rounded max-w-md w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="shadow appearance-none border rounded max-w-md w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="group">
                    Group or Solo
                  </label>
                  <select className="shadow appearance-none border rounded max-w-md w-full p-2 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" id="group">
                    <option>Select an option</option>
                    <option>Solo</option>
                    <option>Group</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-900 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="fade bg-opacity-50 bg-blue-50 text-blue-900 md:p-8 p-4 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">Mental Health in Ontario Colleges</h3>
          <div className="
      flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-4">
              <p>At Georgian College, we recognize the importance of mental health and strive to create an inclusive and supportive environment for all students.</p>
              <p className="mb-4">
                According to the Centre for Addiction and Mental Health (CAMH), 39% of Ontario high-school students indicate a moderate-to-serious level of psychological distress (symptoms of anxiety and depression), and a further 17% indicate a serious level of psychological distress.
              </p>
              <p className="italic mt-4">
                Centre for Addiction and Mental Health. (n.d.). Mental illness and addiction: Facts and statistics. Retrieved from{" "}
                <a className='text-blue-600 hover:underline' href="https://www.camh.ca/en/driving-change/the-crisis-is-real/mental-health-statistics" target="_blank" rel="noopener noreferrer">
                  https://www.camh.ca/en/driving-change/the-crisis-is-real/mental-health-statistics
                </a>
              </p>
            </div>
            <div className="mt-4 md:mt-0 m-auto">
              <PieChart />
            </div>
          </div>
        </section>
        <section className="fade bg-opacity-50 bg-blue-50 text-blue-900 md:p-8 p-4 rounded-lg mb-4 grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Community Outreach/Event Advertising Methods</h3>
            <p>To ensure the success of our event, we will use the following advertising methods to reach a wider audience:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Posters and flyers distributed across the Georgian College campus and local community centers.</li>
              <li>Social media promotion on platforms such as Facebook, Instagram, and Twitter.</li>
              <li>Advertising through Georgian College's official channels, such as the college website, newsletter, and student portal.</li>
              <li>Local newspaper and radio advertisements.</li>
              <li>Word of mouth promotion through student clubs and associations.</li>
            </ul>
            <p>By utilizing a variety of channels, we aim to create excitement around the event and encourage participation from students and the local community.</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12">
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold text-center">Download Flyer</h3>
                <button
                  onClick={() => downloadFlyer(setDownloading)}
                  className="m-auto text-sm bg-blue-900 text-blue-50 font-bold py-2 px-4 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                  {downloading ? "Loading..." : "Download"}
                </button>


              </div>
              <div>
                <QRCode value="https://gc-concert.vercel.app/" size={128} />
              </div>
            </div>

          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Practical Resources and Costs/Expenses for the Concert</h3>
            <p>To ensure a successful event, we have carefully considered the following resources and costs:</p>
            <div className="mt-4 w-full max-w-md sm:px-2">
              <BarChart />
            </div>
            <p className='mt-2'>The human resource cost is $0 as it will consist of student volunteers.</p>
          </div>
        </section>
        <footer className="text-center text-blue-50">
          <p className="mb-2">&copy; {new Date().getFullYear()} Georgian College</p>
          <p className='mb-2'>For any inquiries, please contact our team at georgianevents@example.com</p>
          <p>COMM_1016 - Brandon, Fregine, Marjorie & Yashtika</p>
        </footer>
      </main>
    </>
  );
}




