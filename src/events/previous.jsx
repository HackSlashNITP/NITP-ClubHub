//import React from "react";
import "./text.css";
import "./background.css";

function Previous() {
	return (
		<>
			<div>
				<div className="bodys bg-gradient-to-br from-purple-950 to-fuchsia-950 w-full h-full md:w-full h-fit w-full py-12 overflow-x-hidden text-white flex flex-col p-8">
					{/* <div>
						<div className="firsts font-bold md:text-5xl text-3xl text-white md:py-12 px-8 py-4">
							<h1> Previous Events</h1>
						</div>
						<div className="seconds md:text-2xl text-3xl text-white md:py-6 px-4 py-2">
							<h6> Experience the excitement of our past events</h6>
						</div>
					</div> */}
					<div dir="ltr">
						<div className="font-bold text-5xl text-center mb-6">
							Previous Events
						</div>
						<div className="font-bold text-2xl text-center mr-12 mb-8">
							Experience the excitement of our past events
						</div>
					</div>
					<div dir="ltr" className="flex w-full">
						<div className="bg-white h-124 w-2/5 "></div>
						<div dir="ltr" className="flex-col">
							<div className="bg-white h-56 w-2/5 mb-8"></div>
							<div className="bg-white h-56 w-2/5"></div>
						</div>
					</div>
					{/* <div className="whitess flex md:flex-row md:w-full h-fit w-full py-12 overflow-x-hidden">
						<div className="leftwhites">
							<div className="bg-white h-56 w-72 mx-12 md:h-auto md:w-2/5"></div>
							<div className="whites1 md:h-10px md:w-4/5"></div>
						</div> */}
					{/* <div className="whitess">
							<div className="whites2 md:h-5px md:w-2/5px"></div>
							<div className="whites3 md:h-5px md:w-2/5px"></div>
						</div> 
					</div>*/}
				</div>
			</div>
		</>
	);
}

export default Previous;
