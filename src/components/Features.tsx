const Features = () => {
    return (
        <section className="mx-auto max-w-3xl px-4 py-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Features</h2>
            <ul className="grid gap-6 sm:grid-cols-2">
                <li className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-2 font-semibold">Feature 1</h3>
                    <p className="text-gray-600">Description of feature 1</p>
                </li>
                <li className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-2 font-semibold">Feature 2</h3>
                    <p className="text-gray-600">Description of feature 2</p>
                </li>
                <li className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-2 font-semibold">Feature 3</h3>
                    <p className="text-gray-600">Description of feature 3</p>
                </li>
                <li className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-2 font-semibold">Feature 4</h3>
                    <p className="text-gray-600">Description of feature 4</p>
                </li>
            </ul>
        </section>
    );
};

export default Features;
