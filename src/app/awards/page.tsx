export default function Awards() {
  return (
    <section className="@container mx-auto p-5 overflow-hidden rounded-lg min-h-[70vh]">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-bold mb-15 mt-5 text-gray-800">
          Awards and grants
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </h2>
        <ul
          data-aos="zoom-in"
          role="list"
          className="list-disc list-inside marker:text-sky-400 text-left"
        >
          <li className="text-lg text-gray-500">
            Vice-Presidency for Science and Technology, Photonics, Laser,
            Advanced Materials, and Manufacturing Technologies Development
            Headquarter grant{" "}
          </li>
          <li className="text-lg text-gray-500">
            Vice-Presidency for Science and Technology, Iran National Science
            Foundation (INSF) Headquarter grant{" "}
          </li>
          <li className="text-lg text-gray-500">
            Full fellowship from government for master’s degree
          </li>
          <li className="text-lg text-gray-500">
            Full fellowship from government for bachelor’s degree
          </li>
        </ul>
      </div>
    </section>
  );
}
