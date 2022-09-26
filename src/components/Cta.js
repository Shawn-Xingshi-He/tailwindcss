function Cta() {
  return (
    <section id="cta" className="bg-brightRed">
      <div className="container flex flex-col items-center justify-around px-6 py-20 mx-auto mt-8 space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2 className="text-4xl font-bold leading-tight text-center text-white md:max-w-xl md:text-left">
          For more information please contact Shawn directly
        </h2>
        <a
          href="."
          className="w-52 py-2 px-6  text-center text-brightRed bg-white 
rounded-full shadow-2xl hover:bg-gray-300"
        >
          Get started
        </a>
      </div>
    </section>
  );
}

export default Cta;
