const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 px-4 py-24 text-center">
            <h1 className="text-5xl font-bold tracking-tight">
                Welcome to KYRAI!
            </h1>
            <p className="max-w-md text-lg text-gray-600">
                Your showcase starts here.
            </p>
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                Get Started
            </button>
        </div>
    );
};

export default Hero;
