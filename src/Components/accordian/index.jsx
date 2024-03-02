// Single Selection Accordian 
// Basic CSS for Accordian
// Multi Selection Accordian along with Button to enable/disable multi selection 

import { useState } from 'react';
import data from './data'; 
import './styles.css'; 

export default function Accordion() {
  const [selected, setSelected] = useState(null); // [ Single Selection Accordian ] 
  const [plusStates, setPlusStates] = useState(data.reduce((acc, item) => {
    acc[item.id] = false;
    return acc;
  }, {}));
  const [multiSelectbtn , setMultiSelectbtn] = useState(false); // [ Button to enable/disable multi selection
  const [multipleid , setMultipleid] = useState([]); // [ Multi Selection Accordian

  function handleSingleSelection(getCurrentId) {
    // setSelected(getCurrentId === selected ? null : getCurrentId);
    setSelected((prevSelected) => (prevSelected === getCurrentId ? null : getCurrentId)); // better way to write the above line
     setPlusStates((prevPlusStates) => {
      return {
        // ...prevPlusStates,
        [getCurrentId]: !prevPlusStates[getCurrentId],
      };
    });
  }

  function handleMultipleSelection(getCurrentId){
    let copyMultipleid = [...multipleid];   
    if(copyMultipleid.includes(getCurrentId)){
      copyMultipleid = copyMultipleid.filter((item) => item !== getCurrentId);
        // copyMultipleid = copyMultipleid.splice(copyMultipleid.indexOf(getCurrentId),1);
    }else{
        copyMultipleid.push(getCurrentId);
        }
        setMultipleid(copyMultipleid);
        setPlusStates((prevPlusStates) => {
          return {
            ...prevPlusStates,
            [getCurrentId]: !prevPlusStates[getCurrentId],
          };
        });

  }

  function toggleMultiSelection(){
    setMultiSelectbtn((prevMultiSelect) => !prevMultiSelect);
    // setSelected(null);
    // setPlusStates(false);
//     setPlusStates(data.reduce((acc, item) => {
//     acc[item.id] = false;
//     return acc;
//   }, {}));
//     setMultipleid([]);
  }

  return (
    <div className="wrapper">
        <button onClick={toggleMultiSelection}>
            <span>{multiSelectbtn ? 'Disable Multi Selection' : 'Enable Multi Selection'}</span>
        </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div className="title">
                <h2>{dataItem.title}</h2>
                <span onClick={() =>(multiSelectbtn ? handleMultipleSelection(dataItem.id) : handleSingleSelection(dataItem.id))} className='plus'>
                {
                    plusStates[dataItem.id] ? '-' : '+'
                }
                </span>
              </div>
              {
                multiSelectbtn ? multipleid.includes(dataItem.id) && 
                (
                  <div className="content">
                    <span>{dataItem.content}</span>
                  </div>
                ) : (
                  selected === dataItem.id &&
                    (
                    <div className="content">
                        <span>{dataItem.content}</span>
                    </div>
                    )
                )
              }
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
