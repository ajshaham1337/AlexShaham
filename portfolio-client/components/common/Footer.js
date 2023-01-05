import Link from "next/link";
import { socials } from "../../data/socials";

function Footer() {
  return (
    <div className="bg-dark text-center text-white footer">
      <div className="container p-2 pb-0">
        <section className="mb-2">
          {socials.map(({ name, Icon, link }, i) => (
            <Link
              href={link}
              target="_blank"
              role="button"
              key={i}
              className="btn btn-outline-light btn-floating m-1"
              aria-label={name}
            >
              {<Icon color="white" size={24} />}
            </Link>
          ))}
        </section>
      </div>
      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Alexander Shaham ® {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
