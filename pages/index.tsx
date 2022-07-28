import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
      <div className="bg-white p-8 rounded-3xl mb-10 shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Tabel</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="flex justify-between mt-2 py-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <div>
          <button
            className="mt-5
            block
          bg-blue-500 
          text-white 
          p-3 
          text-center 
          rounded-xl w-2/4 mx-auto hover:text-black hover:bg-teal-500
          active:bg-yellow-500 focus:bg-red-500"
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-blue-500 rounded-3xl mb-10 shadow-xl">
        <div className="bg-blue-500  p-6 pb-14 rounded-3xl">
          <div className="text-white text-2xl flex justify-between">
            <span>Profile</span>
            <div>CartImg</div>
          </div>
        </div>
        <div className="rounded-3xl p-6 bg-white pb-10">
          <div className="flex justify-between  text-center">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="bg-blue-300 w-24 h-24 rounded-full relative -top-16"></div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="flex relative flex-col items-center -mt-10 -mb-5">
            <span className="font-semibold text-xl">Tony Molloy</span>
            <span className="text-gray-500 text-sm">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white p-10 rounded-3xl mb-10 shadow-xl">
        <div className="flex justify-between items-center mb-10">
          <span>⬅️</span>
          <div className="flex justify-between w-1/6 space-x-3">
            <div className="">
              <span>⭐️</span>
              <span>4.9</span>
            </div>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5"></div>
        <div className="">
          <div className="flex flex-col mb-3 mt-5">
            <span className="font-medium mb-1.5 text-xl">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between w-2/12 space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>

            <div className="flex items-center justify-between w-3/12">
              <div className="p-1.5 w-8 bg-blue-200 flex justify-center items-center aspect-square w-10 text-xl text-gray-500 font-medium rounded-xl">
                -
              </div>
              <span>1</span>
              <div className="p-1.5 w-8 bg-blue-200 flex justify-center items-center aspect-square w-10 text-xl text-gray-500 font-medium rounded-xl">
                +
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5  ">
          <span className="font-medium text-2xl">$450</span>
          <div className="bg-blue-500 text-center py-2 px-12 text-white text-sm rounded-lg">
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
