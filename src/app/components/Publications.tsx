import { FiExternalLink } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";

import Link from "next/link";
export default function Publications() {
  const publications = [
    {
      title:
        "Spheroid-based skin-on-a-chip platform for the evaluation of the toxicity of small molecules and nanoparticles.",
      authors:
        "kalhory, D., Rakhshani, F., Ma, Y., Yakavets, I., Kheiri, S., Zeyons, O., Kolle, S.N., Deisenroth, T., Qu, L., Chen, Z. and Kumacheva, E.",
      journal: "Lab on a Chip",
      year: "2025",
      pages: "pp.4038-4047",
      link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=aQkkOR4AAAAJ&citation_for_view=aQkkOR4AAAAJ:Tyk-4Ss8FVUC",
      pdf: "",
    },
    {
      title:
        "Hydrodynamically generated multilayer skin spheroids enable in vitro screening of biologically active ingredients and toxicity tests. ",
      authors:
        "Chen, Z., kalhory, D., Rakhshani, F., El Baraka, O., Qu, L., Kolle, S.N., Andre, V., Deisenroth, T. and Kumacheva, E.",
      journal: "Science Advances",
      year: "2025",
      pages: "p.eadu1251",
      link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=aQkkOR4AAAAJ&citation_for_view=aQkkOR4AAAAJ:zYLM7Y9cAGgC",
      pdf: "https://www.science.org/doi/full/10.1126/sciadv.adu1251",
    },
    {
      title:
        "Liver tissue engineering as an emerging alternative for liver disease treatment",
      authors:
        "Mirdamadi, E.S., kalhory, D., Zakeri, N., Azarpira, N. and Solati-Hashjin, M.",
      journal: "Tissue Engineering Part B: Reviews",
      year: 2020,
      pages: "pp.145-163.",
      link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=aQkkOR4AAAAJ&citation_for_view=aQkkOR4AAAAJ:d1gkVwhDpl0C",
      pdf: "https://d1wqtxts1xzle7.cloudfront.net/69655782/ten.TEB.2019-libre.pdf?1631653597=&response-content-disposition=inline%3B+filename%3DLiver_tissue_engineering_as_an_emerging.pdf&Expires=1759189329&Signature=A96pzD7eWhAlBJtfpPqAzf5p58qoNWtxpzJvEaR6DPqrMZYHGfH1ftuymMMY0fR7DTRV2w3HWDDcQ7VF1m-hXabJmlJ54fBrRnbCCrncO7JssKyVz6Eh9foDBKPziYeebMUhwOoHErw2KiU1FbOL26p5C4mEq1mq9B7ohUXcDziYjON3j2LMJHQfCNdx9ptQobEWhOo8pUhJX2c4MyVsRO91iSBE9IAbDQlg9dZLqiosk9a5LU4G8no215zW0pWkmuHNst8G6sLAC38Too53sizUSuY3hsNuTglOC9OmZv7NPaIdxR8zlCG0WSDG3LVkmB-tz9hygXxbJcpBruMqFw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
    },
    // Add more publications as needed
  ];
  return (
    <section className="@container mx-auto p-5 overflow-hidden rounded-lg">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-gray-800">
          Publications
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </h2>
        <div className="w-full flex flex-col justify-center items-center mb-10">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              className="w-full bg-white rounded-lg border-1 border-gray-200 p-10 text-left flex flex-col md:flex-row items-center gap-5 mb-5"
            >
              <div className="">
                <h3 className="text-xl font-bold mb-1 text-gray-800">
                  {pub.title}
                </h3>
                <p className="text-md text-gray-400 mb-1 italic">
                  {pub.authors}
                </p>
                <p className="text-md text-gray-400 mb-6">
                  <span className="font-bold text-gray-800">{pub.journal}</span>
                  , {pub.year}, {pub.pages}
                </p>
                <Link
                  href={pub.link}
                  target="_blank"
                  className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/80 transition"
                >
                  <FiExternalLink className="inline mr-2" />
                  View Paper
                </Link>
                <Link
                  href={pub.pdf}
                  target="_blank"
                  className="ml-4 rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 transition"
                >
                  <FiFileText className="inline mr-2" />
                  Pdf
                </Link>
              </div>
            </div>
          ))}

          <Link
            href="/publications"
            className="rounded-md bg-primary px-4 py-2 mt-5 text-white hover:bg-primary/80 transition"
          >
            <FiExternalLink className="inline mr-2" />
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  );
}
