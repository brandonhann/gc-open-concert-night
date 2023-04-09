import Head from 'next/head'
import Image from 'next/image';
import PieChart from '../components/PieChart';
import dynamic from 'next/dynamic';
const CostsChart = dynamic(() => import('../components/CostsChart'), { ssr: false });

const mentalHealthData = [
  { label: 'Moderate-to-serious level', value: 39 },
  { label: 'Serious level', value: 17 },
  { label: 'Not distressed', value: 44 }, // 100 - 39 - 17
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-2 border border-gray-300 rounded">
        <p className="text-sm">{`${label}: $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Global Rhythms: A Georgian College Open Concert Night</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex flex-col min-h-screen p-4 sm:p-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <header className="text-center drop-shadow-md relative">
          <div className="banner-image w-full h-64 md:h-96 rounded-t-md"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-2 sm:p-4 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-blue-50 bg-blue-900 shadow-lg p-1 sm:p-2 rounded-lg">
              Global Rhythms: A Georgian College Open Concert Night
            </h1>
            <p className="text-sm sm:text-lg md:text-xl mb-2 sm:mb-6 text-blue-50 bg-blue-900 shadow-lg p-1 sm:p-2 rounded-lg">
              Join us on May 20th, 2023 for an unforgettable night of performances and connections.
            </p>
          </div>
        </header>


        <section className="bg-blue-50 text-blue-900 p-8 rounded-b mb-8">
          <Image
            src="/gc-logo.png"
            alt="Georgian College Logo"
            width={128}
            height={128}
            layout="fixed"
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">Why did we choose this event?</h2>
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
            <div>
              <h3 className="text-xl font-bold mb-2">Event Details</h3>
              <p className="mb-2"><strong>Date:</strong> April 30, 2023</p>
              <p className="mb-2"><strong>Time:</strong> 7:00 PM - 10:00 PM</p>
              <p className="mb-2"><strong>Location:</strong> Georgian College, Barrie Campus, Building C, Room C101</p>
              <p className="mb-2"><strong>Admission:</strong> Free for all Georgian College students</p>
            </div>
          </div>
        </section>
        <section className="bg-blue-50 text-blue-900 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Mental Health in Ontario Colleges</h2>
          <div className="
      flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-4">
              <p>At Georgian College, we recognize the importance of mental health and strive to create an inclusive and supportive environment for all students.</p>
              <p className="mb-4">
                According to the Centre for Addiction and Mental Health (CAMH), 39% of Ontario high-school students indicate a moderate-to-serious level of psychological distress (symptoms of anxiety and depression), and a further 17% indicate a serious level of psychological distress.
              </p>
              <p className="italic mt-4">
                Centre for Addiction and Mental Health. (n.d.). Mental illness and addiction: Facts and statistics. Retrieved from{" "}
                <a className='text-blue-600' href="https://www.camh.ca/en/driving-change/the-crisis-is-real/mental-health-statistics" target="_blank" rel="noopener noreferrer">
                  https://www.camh.ca/en/driving-change/the-crisis-is-real/mental-health-statistics
                </a>
              </p>
            </div>
            <div className="mt-4 md:mt-0 m-auto">
              <PieChart data={mentalHealthData} />
            </div>
          </div>
        </section>
        <section className="bg-blue-50 text-blue-900 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Performances and Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 1" />
              <p className="absolute bottom-0 w-full text-center font-bold text-blue-50 bg-blue-900 bg-opacity-60 p-2">Performance 1</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 2" />
              <p className="absolute bottom-0 w-full text-center font-bold text-blue-50 bg-blue-900 bg-opacity-60 p-2">Performance 2</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 3" />
              <p className="absolute bottom-0 w-full text-center font-bold text-blue-50 bg-blue-900 bg-opacity-60 p-2">Performance 3</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 4" />
              <p className="absolute bottom-0 w-full text-center font-bold text-blue-50 bg-blue-900 bg-opacity-60 p-2">Performance 4</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 5" />
              <p className="absolute bottom-0 w-full text-center font-bold text-blue-50 bg-blue-900 bg-opacity-60 p-2">Performance 5</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 6" />

              <p className="absolute bottom-0 w-full text-center font-bold text-blue-50 bg-blue-900 bg-opacity-60 p-2">Performance 6</p>
            </div>
          </div>
        </section>
        <section className="bg-blue-50 text-blue-900 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Register for the Open Mic Night</h2>
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
              <form className="bg-blue-50 px-8 pt-6 pb-8 mb-4">
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
        <section className="bg-blue-50 text-blue-900 p-8 rounded-lg mb-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Community Outreach/Event Advertising Methods</h2>
            <p>To ensure the success of our event, we will use the following advertising methods to reach a wider audience:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Posters and flyers distributed across the Georgian College campus and local community centers.</li>
              <li>Social media promotion on platforms such as Facebook, Instagram, and Twitter.</li>
              <li>Advertising through Georgian College's official channels, such as the college website, newsletter, and student portal.</li>
              <li>Local newspaper and radio advertisements.</li>
              <li>Word of mouth promotion through student clubs and associations.</li>
            </ul>
            <p>By utilizing a variety of channels, we aim to create excitement around the event and encourage participation from students and the local community.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Practical Resources and Costs/Expenses for the Concert</h2>
            <p>To ensure a successful event, we have carefully considered the following resources and costs:</p>
            <div className="mt-4">
              <CostsChart />
            </div>
          </div>
        </section>
        <footer className="text-center text-blue-50">
          <p className="mb-4">&copy; {new Date().getFullYear()} Georgian College</p>
          <p>For any inquiries, please contact our team at georgianevents@example.com</p>
        </footer>
      </main>
    </>
  );
}




