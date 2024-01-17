import axios from "axios";
import { useEffect, useState } from "react";

function FirstPage() {
  const [CheckBool, setCheckBool] = useState(2);
  const [dataList, setDataList] = useState<IData[]>();
  interface IData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const featchDataAX = async () => {
    const respone = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const data: IData[] = respone.data;
    setDataList(() => {
      return data;
    });
  };

  useEffect(() => {
    featchDataAX();
    return () => {
      featchDataAX();
    };
  }, [CheckBool]);

  const isODD = (num:number,numcondition:number)=>{
    if (numcondition === 2){
      return true
    }else if (num % 2 !== numcondition){
      return true
    } else{
      return false
    }
  }

  return (
    <>
      <div>
        <div>
          <ButtonClick
            label="Click Fliter GET ALL"
            onCilck={() => setCheckBool(2)}
          />
          <ButtonClick
            label="Click Fliter ODD"
            onCilck={() => setCheckBool(0)}
          />
          <ButtonClick
            label="Click Fliter EVEN"
            onCilck={() => setCheckBool(1)}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">UserId</th>
              <th scope="col">Title</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            {dataList
              ?.filter((item) => isODD(item.userId,CheckBool))
              .map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>@{item.completed}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FirstPage;

interface IButton {
  label?: string;
  onCilck?: () => void;
}

const ButtonClick: React.FC<IButton> = ({ label = "Click Now", onCilck }) => {
  return (
    <button className="btn btn-outline-danger" onClick={onCilck}>
      {label}
    </button>
  );
};
