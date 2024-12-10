import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import EmployeePage from "./EmployeePage";

function Homepage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <br />
      <EmployeeList />
      <EmployeePage />
    </div>
  );
}

export default Homepage;
