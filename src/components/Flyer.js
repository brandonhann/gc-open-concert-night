import React from 'react';
import QRCode from 'qrcode.react';

const Flyer = () => {
    return (
        <div id="flyer" className="w-full flex flex-col items-center justify-center m-0 p-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            <div className="max-w-md p-4 bg-opacity-50 bg-blue-50 text-blue-900 shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-4 text-left">Global Rhythms</h1>
                <h2 className="text-xl font-bold mb-4 text-left">A Georgian College Open Concert Night</h2>
                <p className="text-left mb-6">
                    Join us on May 20th, 2023 for an unforgettable night of performances and connections.
                </p>
                <div className='flex flex-row'>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="text-xl font-bold mb-2">Event Details</h3>
                        <p className="mb-2"><strong>Date:</strong> May 20, 2023</p>
                        <p className="mb-2"><strong>Time:</strong> 7:00 PM - 10:00 PM</p>
                        <p className="mb-2"><strong>Location:</strong> Georgian College, Barrie Campus, Building C, Room C101</p>
                        <p className="mb-4"><strong>Admission:</strong> Free for all Georgian College students</p>
                    </div>
                    <QRCode value="https://gc-concert.vercel.app/" size={128} />
                </div>
                <img className='w-full rounded-md' src="/slide2.jpg"></img>
            </div>
        </div>
    );
};

export default Flyer;
