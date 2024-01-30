
const HowItWorks = () => {
  return (
    <div className="flex flex-col px-6 py-10 items-center justify-center">
      <h2>How it works ?</h2>
      <p>This is a process, how you can get a loan.</p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h3>Application</h3>
          <p>
            The borrower submits a loan application to the bank, either
            in-person, online, or through other channels. The application
            includes personal and financial information, such as
            income,employment history, credit score, and he purpose of the loan.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3>Documentation and Verification</h3>
          <p>
            The bank requests supporting documents from the borrower, such as
            identification proof, income statements, bank statements, and
            collateral details (if applicable). The bank verifies the
            information provided to assess the borrower's creditworthines and
            eligibility for the loan.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3>Credit Assessment</h3>
          <p>
            The bank conducts a credit assessment to evaluate the borrower's
            creditworthines and ability to repay the loan. This process involves
            analyzing the borrower's cresit history, income stability,
            debt-to-income ratio, and other factors,
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3>Loan Approval</h3>
          <p>
            If the borrower meets the bank's lending criteria and passes the
            credit assessment, the loan is approved. The bank determines the
            loan amount, interest rate, repayment term, and any associated fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
