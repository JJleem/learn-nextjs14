import { Metadata } from "next";
import Navigation from "../componenets/navigation";
export const metadata : Metadata = {
  title: "Not Found"
}
const NotFound = () => {
  return (
    <div>
      <Navigation />
      <h1>Not Found!</h1>
    </div>
  );
};

export default NotFound;
