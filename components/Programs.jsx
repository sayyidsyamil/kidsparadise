import { useEffect, useState } from 'react';

export function Programs() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Ensure that this component is only rendered on the client side

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
      <div className="container grid gap-12 px-6 md:px-12">
        {/* Age Groups Section */}
        <div className="space-y-6 w-full text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-orange-600">
            Our Age Groups
          </h2>
          <p className="text-lg md:text-xl text-orange-500">
            Discover the perfect fit for your child's learning journey.
          </p>
        </div>

        {/* Age Group Cards */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { title: "Playgroup", subtitle: "Kuai Le Class", translate:"快乐班", age: "Age 3", image: "class1.jpeg" },
            { title: "Nursery", subtitle: "Xi Yue Class", translate:"喜悦班", age: "Age 4", image: "class2.jpeg" },
            { title: "K1", subtitle: "Huan Le Class", translate:"欢乐班", age: "Age 5", image: "class3.jpeg" },
            { title: "K2", subtitle: "Yu Le Class", translate:"愉乐班", age: "Age 6", image: "class4.jpeg" },
          ].map((group, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-orange-200 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:border-orange-600 hover:text-orange-900"
              style={{
                backgroundImage: `url(${group.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Full white overlay with some opacity */}
              <div className="absolute inset-0 bg-white bg-opacity-60 rounded-lg"></div>

              <div className="relative p-6">
                <h3 className="text-2xl font-extrabold">{group.title}</h3>
                <p className="text-sm font-extrabold text-orange-900">{group.subtitle}</p>
                <p className="text-sm font-extrabold text-orange-900">{group.translate}</p>
                <p className="mt-2 text-sm font-bold text-orange-900">{group.age}</p>
              </div>

              {/* Animated icon */}
              <div className="absolute bottom-2 right-2 text-orange-400 group-hover:text-orange-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M13 7h-3V4a1 1 0 10-2 0v3H5a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>



        {/* Programs Section */}
        <div className="space-y-6 w-full text-center mt-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-orange-600">
            Our Programs
          </h2>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-orange-500">
            Choose the program that best fits your child's needs.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: "Half Day (半天)", time: "9:00 AM - 1:30 PM", description: "No evening class" },
            { title: "Half Day Extend (加强班)", time: "9:00 AM - 4:15 PM", description: "Includes evening class" },
            { title: "Full Day (整天)", time: "7:00 AM - 6:30 PM", description: "Includes evening class" },

          ].map((program, index) => (
            <div
              key={index}
              className="rounded-lg border border-orange-200 bg-white p-6 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:border-orange-600 hover:bg-orange-100 hover:text-orange-900"
            >
              <h3 className="text-2xl font-extrabold">{program.title}</h3>
              <p className="text-sm text-orange-500">{program.time}</p>
              <p className="mt-4 text-sm text-orange-500">{program.description}</p>
              {/* Animated checkmark */}
              <div className="mt-4 text-orange-400 hover:text-orange-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.293-10.707a1 1 0 00-1.414-1.414L9 10.586 7.121 8.707a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l5-5z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
