import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10">
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
          <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto">
            Checkout
          </div>
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
        <div className="flex justify-between">
          <span>⬅️</span>
          <div className="flex justify-between w-1/6">
            <div>
              <span>⭐️</span>
              <span>4.9</span>
            </div>
            <span>❤️</span>
          </div>
        </div>
        <div>box</div>
        <div>
          <span>Swoon Lounge</span>
          <span>Chair</span>
          <div>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
          <div>
            <div>
              <div>➖</div>
              <span>1</span>
              <div>➕</div>
            </div>
          </div>
        </div>
        <div>
          <span>$450</span>
          <div>Add to cart</div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl mb-10 shadow-xl"></div>
    </div>
  );
};

export default Home;
