import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import EmployeePage from "./EmployeePage";

function Homepage() {
  return (
    <div className="flex-items">
      <div>
        <Header />
        <SearchBar />
        <br />
        <EmployeeList />
      </div>
      <div>
        <EmployeePage />
      </div>
    </div>
  );
}

export default Homepage;
