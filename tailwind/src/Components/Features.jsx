import React from "react";

const Features = () => {
  return (
    <div className="container flex flex-col mx-auto px-4 space-y-10 md:space-y-0 md:flex-row">
      <div className="flex flex-col space-y-10 md:w-1/2">
        <h2 className="max-w-md font-bold text-4xl text-center">
          What's different about Manage?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      {/* Numbered List */}

      <div className="container flex flex-col space-y-8 md:w-1/2">
        <div className="container space-y-5">
          {/* Item 1 */}
          <div className="container flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <p className="text-white bg-brightRed px-3 rounded-full">01</p>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p className="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="container flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <p className="text-white bg-brightRed px-3 rounded-full">02</p>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Advanced built-in reports
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Advanced built-in reports
            </h3>
            <p className="text-darkGrayishBlue">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="container flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <p className="text-white bg-brightRed px-3 rounded-full">03</p>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Everything you need in one place
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Everything you need in one place
            </h3>
            <p className="text-darkGrayishBlue">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
