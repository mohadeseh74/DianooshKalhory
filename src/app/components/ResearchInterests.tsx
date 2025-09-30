export default function ResearchInterests() {
  return (
    <section className="@container mx-auto p-5 overflow-hidden rounded-lg">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 mt-10 text-gray-800">
          Research Interests
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 w-full">
          <div
            data-aos="zoom-in"
            className="bg-[url('/abstract-blue-oil-stained-glass.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay rounded-lg shadow-lg min-h-[250px]"
          >
            <div className="bg-primary/30 backdrop-blur-xs rounded-lg p-6 w-full h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-100">
                TISSUE ENGINEERING/REGENERATIVE MEDICINE
              </h3>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-[url('/futuristic-molecule-patterns-connect-genetic-research-discovery-generated-by-ai.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay rounded-lg shadow-lg min-h-[250px]"
          >
            <div className="bg-primary/30 backdrop-blur-xs rounded-lg p-6 w-full h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-100">
                NANOTECHNOLOGY
              </h3>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-[url('/logo_make_11_06_2023_191.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay rounded-lg shadow-lg min-h-[250px]"
          >
            <div className="bg-primary/30 backdrop-blur-xs rounded-lg p-6 w-full h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-100">
                SELF-DRIVING LABS
              </h3>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-[url('/3686109.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay rounded-lg shadow-lg min-h-[250px]"
          >
            <div className="bg-primary/30 backdrop-blur-xs rounded-lg p-6 w-full h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-100">
                ORGAN-ON-CHIPS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
