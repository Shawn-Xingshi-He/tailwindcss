function Features() {
  const listItems = {
    1: [
      "Track company-wide progress",
      " See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.",
    ],
    2: [
      "Advanced built-in reports",
      "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    ],
    3: [
      "Everything you need in one place",
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    ],
  };
  // console.log(Object.keys(listItems));
  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto space-y-12 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center space-y-12 md:w-1/2">
          <div className="max-w-sm text-4xl font-bold text-center  md:text-left">
            What's the different about Manage
          </div>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="flex flex-col space-y-10 md:w-1/2 md:pl-2 md:pr-8">
          {Object.keys(listItems).map((key) => (
            <div key={key}>
              <div className="flex items-baseline mb-2 space-x-4 rounded-full bg-brightRedSupLight md:bg-transparent">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  {key}
                </div>
                <h3 className="text-base font-bold md:mb-4 ">
                  {listItems[key][0]}
                </h3>
              </div>
              <p className="text-darkGrayishBlue pl-10">{listItems[key][1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
