import React from 'react'

const ListComponent = (props) => {
    
    const handleDelete = (id)=>{
    
        let tempArray = [...props.state.itemsArray];
        tempArray.splice(id,1);
        props.state.setItemsArray(tempArray);
    
        // setting up the deleted list for deleted items Page
    
        const updatedList2 = props.state.itemsArray.at(id);
    
        props.state.deletedState.setDeletedArray((prev)=>[
          ...prev,
          updatedList2
        ])
        
      }
    
      const handleCheckedItems=(id)=>{
        window.alert("Item Added!")
     
      const array = props.state.itemsArray.at(id);
    
      props.state.state.setcompletedArray((prev)=>[
        ...prev,
        array
      ])
      
      }

    console.log(props);

  return (
    <div className='listContainer'>
    <h1 className='listHeading'>To Do List</h1>
    <ul className='list'>
        { 
            props.state.itemsArray.map((element,ind)=>{
                return <li className='listItem' key={ind}>{element} 
                        <div>
                        <span  onClick={()=>{handleDelete(ind)}} className='deleteIcon'>-</span>
                        <span  onClick={()=>handleCheckedItems(ind)} className='deleteIcon'>done</span>
                        </div>
                </li>
            })
        }
    </ul>
</div>
  )
}

export default ListComponent