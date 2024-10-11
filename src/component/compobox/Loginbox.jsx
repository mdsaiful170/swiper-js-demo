import Button from "./Button";
import { Container } from "./Container";
const Loginbox = ({logintog}) => {
  return (
    <>
      <Container>
        <div className="flex px-3 items-center justify-center absolute top-0 left-0 right-0 h-screen bg-white dark:bg-darkbgcolor">
           <div>
            
           </div>
          <i onClick={logintog} className="ri-close-large-line font-bold absolute top-11 right-10 lg:right-16 text-xl text-textblckcolor dark:text-darktextdipcolor"></i>
          <form
            action=""
            className="border border-stone-300 dark:border-darkcofeecolor max-w-lg rounded w-full  p-6 flex flex-col"
          >
            <h3 className="text-center capitalize text-xl pb-5">login Now</h3>
            <label className="flex items-center mb-5 border borderborder-stone-300 rounded h-11 px-3 dark:border-darkcofeecolor">
              <i className="ri-user-line"></i>
              <input
                className="w-full px-3 bg-transparent h-full  outline-none focus:outline-none"
                type="text"
                required
                placeholder="Username"
              />
            </label>
            <label className="flex items-center  mb-5 border border-stone-300 rounded h-11 px-3 dark:border-darkcofeecolor">
              <i className="ri-mail-line"></i>
              <input
                className="w-full px-3 bg-transparent  h-full  outline-none focus:outline-none"
                type="password"
                required
                placeholder="Password"
              />
            </label>
            <Button className="block mx-auto mt">login</Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Loginbox;
