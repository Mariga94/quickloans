const Home = () => {
  return (
    <div className="container mx-auto px-6 flex flex-row items-center">
      <div className="flex flex-col flex-1 gap-y-4">
        <h1 className="font-bold">
          Fast Financial Solutions for Your Loan Needs.
        </h1>
        <p>
          Experience a seamless and efficient borrowing process with our loan
          services. We deliver the funds you require promptly, ensuring a
          hassle-free solution to meet your financial needs.
        </p>
        <div>
          <button className="rounded-full border-2 px-5 py-3 items-start border-[--primary-color] font-medium">
            Get started
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src="/public/images/loan.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
