import Link from "next/link";
import Image from "next/image";
import data from "../data/projects";
import { pictures } from "../data/pictures";

function Projects() {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4 width-adjuster mx-auto mb-4">
      {data.map((project, i) => (
        <div className="col" key={i}>
          <div className="card text-white bg-dark h-100 card-width">
            <Image
              src={pictures[project.picture]}
              height={150}
              width={"auto"}
              className="card-img-top"
              alt={`Project Name: ${project.picture}`}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {project.subtitle}
              </h6>
              <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer text-center">
              <Link
                href={project.link}
                target="_blank"
                className="card-link card-footer"
              >
                PROJECT LINK
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
