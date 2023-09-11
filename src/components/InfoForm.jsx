import emailjs from "@emailjs/browser";

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
    <main className="text-black font-semibold flex justify-center text-lg p-3">
      <form className="flex flex-col gap-6 w-[250px] " autoComplete="off" onSubmit={sendEmail}>
        <label>Name</label>
        <input className="rounded-md" type="text" name="user_name" />
        <label>Email</label>
        <input type="email" className="rounded-md" name="user_email" />
        <label>Message</label>
        <textarea name="message" className="rounded-md"/>
        <input
          className="border-[2px] hover:border-blue-400 hover:bg-sky-900 cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
    </main>
  );
}

export default InfoForm
