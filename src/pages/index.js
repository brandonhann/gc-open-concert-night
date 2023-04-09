import Head from 'next/head'
import PieChart from '../components/PieChart';

const mentalHealthData = [
  { label: 'Mildly affected', value: 40 },
  { label: 'Moderately affected', value: 35 },
  { label: 'Severely affected', value: 25 },
];


export default function Home() {
  return (
    <>
      <Head>
        <title>Global Rhythms: A Georgian College Open Concert Night</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex flex-col min-h-screen p-4 sm:p-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <header className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Global Rhythms: A Georgian College Open Concert Night</h1>
          <p className="text-xl mb-6">Join us on May 20th, 2023 for an unforgettable night of performances and connections.</p>
          <div className="w-full h-32 md:h-64 bg-center bg-cover rounded-lg shadow-md mb-6" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}></div>
        </header>


        <section className="bg-white text-black p-8 rounded-lg mb-8">
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


        <section className="bg-white text-black p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Mental Health in Ontario Colleges</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-4">
              <p className="mb-4">In recent years, mental health has become a significant concern for students in Ontario colleges. Here are some statistics that highlight the importance of addressing mental health and creating supportive environments for students:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Over 60% of college students in Ontario report feeling lonely or isolated.</li>
                <li>50% of students have felt depressed or overwhelmed in the past year.</li>
                <li>1 in 5 students experience anxiety or stress that affects their daily lives.</li>
              </ul>
              <p className='sm:mb-10'>At Georgian College, we strive to support our students and create a welcoming and inclusive environment. Our open mic night is one of the many initiatives we have planned to help students connect, share their experiences, and feel more at home.</p>
            </div>
            <div className='m-auto'>
              <PieChart data={mentalHealthData} />
            </div>
          </div>
        </section>



        <section className="bg-white text-black p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Performances and Highlights</h2>
          <div className="grid
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 1" />
              <p className="absolute bottom-0 w-full text-center font-bold text-white bg-black bg-opacity-60 p-2">Performance 1</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 2" />
              <p className="absolute bottom-0 w-full text-center font-bold text-white bg-black bg-opacity-60 p-2">Performance 2</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 3" />
              <p className="absolute bottom-0 w-full text-center font-bold text-white bg-black bg-opacity-60 p-2">Performance 3</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 4" />
              <p className="absolute bottom-0 w-full text-center font-bold text-white bg-black bg-opacity-60 p-2">Performance 4</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 5" />
              <p className="absolute bottom-0 w-full text-center font-bold text-white bg-black bg-opacity-60 p-2">Performance 5</p>
            </div>
            <div className="relative">
              <img className="rounded-lg shadow-md" src="https://via.placeholder.com/350x200" alt="Performance 6" />
              <p className="absolute bottom-0 w-full text-center font-bold text-white bg-black bg-opacity-60 p-2">Performance 6</p>
            </div>
          </div>
        </section>

        <section className="bg-white text-black p-8 rounded-lg mb-8">
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
              <form className="bg-white px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input className="shadow appearance-none border rounded max-w-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="shadow appearance-none border rounded max-w-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="group">
                    Group or Solo
                  </label>
                  <select className="shadow appearance-none border rounded max-w-md w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="group">
                    <option>Select an option</option>
                    <option>Solo</option>
                    <option>Group</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>


        <footer className="text-center text-white">
          <p className="mb-4">&copy; {new Date().getFullYear()} Georgian College</p>
          <p>For any inquiries, please contact our team at georgianevents@example.com</p>
        </footer>
      </main>
    </>
  );
}