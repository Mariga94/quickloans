const Services = () => {
  return (
    <div className="w-full flex flex-col services items-center py-10 px-6">
      <h2>Our Services</h2>
      <div className="flex lg:flex-row flex-col justify-between space-x-6 space-y-6">
        <div className="card">
          <img src="public/images/personalloan.jpg" alt="" className="h-60 w-60"/>
          <h3>Personal loan</h3>
          <p>
            Personal loans provide borrowers with flexibilty in how they use the
            funds
          </p>
          <button className="button">Apply now</button>
        </div>
        <div className="card">
          <img
            src="/public/images/businessloan.jpg"
            alt=""
            className="h-60 w-60"
          />
          <h3>Business loan</h3>
          <p>
            Business loan services provide financial assistance to businesses
            for various purposes.
          </p>
          <button className="button">Apply now</button>
        </div>
        <div className="card">
          <img src="/public/images/carloan.jpg" alt="" className="h-60 w-60" />
          <h3>Auto Loan</h3>
          <p>
            Auto loan Services provide financing options for individuals
            businesses to purchase a vehicle.
          </p>
          <button className="button">Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
