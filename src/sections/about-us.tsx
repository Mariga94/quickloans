const AboutUs = () => {
  return (
    <div className="p-6 flex flex-row bg-green-50">
      <div className="flex-1">
        <h2>About Us</h2>
        <p>
          Your Trusted financial partner for loans. Quick approvals, competitive
          rates, and personalized solutions to meet your unique needs.
          Empowering you to achieve your financial goals. Apply online today!
        </p>
      </div>
      <div className="flex-1">
        <form action="" className=" border-2 rounded-md p-12 space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" id="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-10 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone_number" id="phone_number">
              Phone Number
            </label>
            <input
              type="number"
              id="phone_number"
              className="h-10 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" id="email">
              Email address
            </label>
            <input type="email" id="email" className="h-10 rounded-full" />
          </div>
          <button type="submit" className="button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
