
// import Cube2 from "./Cube2";
import Cube2 from "./components/Cube2";

const Hero5 = () => {
  return (
    <>
      <div className="flex flex-col-reverse w-full h-full px-4 py-4 text-white sm:pt-12 md:px-12 md:flex-row bg-purple-950">
        <div className="flex flex-col items-center justify-center w-full md:w-2/3">
          <div className="text-2xl font-semibold">
            Experience the Best of Corona{" "}
          </div>
          <div className="pb-6 text-2xl font-semibold">and Melange</div>

          <div>
            During the fest, we provide a wide range of facilities and services
            to ensure an unforgettable experience for all participants. From
            state-of-the-art venues to top-notch accomodations, we have
            everything you need to make the most of your time at Corona and
            Melange.
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex items-center justify-center ">
            <img src="/TCFlogo.png" width={200} height={200} alt="img" />
          </div>
        </div>
      </div>
      <div className="grid w-full h-full px-4 py-4 text-white sm:pb-20 lg:grid-cols-3 sm:grid-cols-2 md:px-12 bg-purple-950">
        <Cube2
          name="Top-Notch Venues and
Facilities"
          disp="Our fest offers world class venues equipped with the
latest technology and amenities to host a variety of
events and activities"
        />
        <Cube2
          name="Comfortable
Accommodations"
          disp="We provide comfortable accommodations for
participants, ensuring a pleasant stay throughout the
fest."
        />

        <Cube2
          name="Delicious Food and
Refreshments"
          disp="Enjoy a wide range of delicious food and refreshing
beverages from our careful curated menu."
        />
      </div>
    </>
  );
};

export default Hero5;
