import emailjs from "@emailjs/browser";
import { FormattedMessage } from "react-intl";

const InfoForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l86zcyd",
        "template_9lxcnh1",
        e.target,
        "aQZFGrAuMFHxtFBeb"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className=" text-black font-semibold flex text-lg p-3 justify-center relative z-10">
      <form
        className="flex flex-col gap-6 w-[250px] "
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <label>
          <FormattedMessage id="app.name" defaultMessage="Name" />
        </label>
        <input
          className="rounded-md border-[2px] border-[#183d3d] dark:border-transparent"
          type="text"
          name="user_name"
        />
        <label>
          <FormattedMessage id="app.email" defaultMessage="email" />
        </label>
        <input
          type="email"
          className="rounded-md border-[2px] border-[#183d3d] dark:border-transparent "
          name="user_email"
        />
        <label>
          <FormattedMessage id="app.message" defaultMessage="message" />
        </label>
        <textarea
          name="message"
          className="rounded-md border-[2px] border-[#183d3d] dark:border-transparent"
        />
        <input
          className="border-[2px] hover:border-blue-400 hover:bg-[#213555] hover:text-white cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
    </main>
  );
};

export default InfoForm;
