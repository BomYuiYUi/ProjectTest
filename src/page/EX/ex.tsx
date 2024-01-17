import axios from "axios";
import { useEffect, useState } from "react";
import "./ex.css";

function ExPage() {
  const [dataList, setDataList] = useState<IData>();
  const [dataInput,setDataInput] = useState("")
  interface IData{
    todos:IChildData[]
    total: number,
    skip: number,
    limit: number
  }
  interface IChildData{
    id: number,
    todo: string,
    completed: boolean,
    userId: number
  }
  const fetchDataAX = async () => {
    const respone = await axios.get("https://dummyjson.com/todos");
    const data: IData = respone.data;
    setDataList(data);
    console.log(data)
  };

  useEffect(()=>{
    return ()=>{
        fetchDataAX();
    }
  },[])

  
  const handleCheckboxChange = (id: number) => {
    // Update the 'completed' state of the corresponding todo item
    setDataList((prevData) => {
      const updatedTodos = prevData?.todos?.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      return { ...prevData, todos: updatedTodos };
    });
  };

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <div style={{ width: "350px" }}>
          <input
            type="text"
            className="form-control"
            onKeyUp={(e)=>{
                setDataInput(e.currentTarget.value)
            }}
          />
        </div>
        {
            dataList?.todos?.filter((item)=>{
                return item.todo.toLowerCase().includes(dataInput)
            }).map((item)=>{
                return <div className="mt-1" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked = {item?.completed}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <label className="form-check-label ms-3">{item.todo}</label>
              </div>
            })
        }
      </div>

      <div className="mt-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                />
                <label className="form-check-label ms-3">AA</label>
              </div>
      
    </>
  );
}

export default ExPage;
