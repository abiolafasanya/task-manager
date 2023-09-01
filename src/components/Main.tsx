import Form from "./Form";
import Tasks from "./task/Tasks";

const Main = () => {
  return (
    <main>
      <div className="content">
        <Form />
        <Tasks />
      </div>
    </main>
  );
};

export default Main;
