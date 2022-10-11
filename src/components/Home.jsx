import React from 'react';

const Home = () => {
    
    return (
        <div>
            <h2 className='text-2xl'>My home {}</h2>
            <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Organize Live Multiplayer Trivia Quiz for Your Event!</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div style={{ backgroundColor: 'blue', height: '500px'
            }}>
              Hello World
            </div>
            {/* /End replace */}
          </div>
        </main>
            
        </div>
    );
};

export default Home;