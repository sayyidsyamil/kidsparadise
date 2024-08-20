import React from 'react'

{/* <div className="relative w-full p-4 min-h-[6rem] h-full rounded-xl bg-gradient-to-br from-orange-100 to-orange-50">
    <iframe
      className="absolute inset-0 w-full h-full rounded-lg border-0"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6,%20Jln%20Perjiranan%204/1+(Kids%20Paradise)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div> */}

export const Location = () => {
    return (
        <div className='pt-10'>
            <h1 className="text-3xl font-bold my-2 text-center">Locate Us</h1>
            <h3 className="text-sm  my-2 text-center text-orange-600">No 4-01 & No 6-01, Jalan Perjiranan 4/1, Bandar Dato Onn, 81100, Johor Bahru, Johor</h3>
            <div className="relative w-full p-4 min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-100 to-orange-50" style={{ height: '50vh' }}>
            <iframe
                    className="absolute inset-0 w-full h-full rounded-lg border-0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6,%20Jln%20Perjiranan%204/1+(Kids%20Paradise)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>


        </div>
    )
}

