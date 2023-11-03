import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <header id="aboutme" className="pb-12">
      <div className="flex flex-col text-center gap-2 md:flex md:items-center p-3">
        <h2 className="">
          {" "}
          <FormattedMessage
            id="app.header"
            defaultMessage="I'm Julian Guayanes"
          />
        </h2>
        <div>
          <p className="text-[19px] sm:text-[30px] sm:w-[600px] text-center sm:relative sm:z-10 font-bold hover:scale-110">
            <FormattedMessage
              id="app.p"
              defaultMessage="Passionate about programming, I define myself as a person eager to learn and a great leader of multidisciplinary teams. I have worked on several projects focused on web design."
            />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
