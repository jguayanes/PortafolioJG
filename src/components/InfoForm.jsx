
import emailjs from '@emailjs/browser';



const InfoForm = () => {
    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l86zcyd', 'template_9lxcnh1', e.target, 'aQZFGrAuMFHxtFBeb')
      .then((result) => {
          console.log(result.text)
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <main className='text-black font-semibold text-lg p-3'>
        <form className='flex flex-col gap-6 w-[250px]' onSubmit={sendEmail}>
            <label>Name</label>
            <input className='' type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input className='border-[2px] hover:border-blue-400 cursor-pointer' type="submit" value="Send" />
        </form>
    </main>
  )
}

export default InfoForm