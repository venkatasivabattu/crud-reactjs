function Table({data,delfun,setFormData,editFun}){
    
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Launch Year</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                    {
                        
                        data.map((l)=>{
                            
                            return <>
                            <tr key={l.mid}>
                                <td>{data.indexOf(l)+1}</td>
                                <td>{l.name}</td>
                                <td>{l.price}</td>
                                <td>{l.year}</td>
                                <td>
                                    <button id="edit" onClick={()=>{
                                        setFormData({

                                            name:l.name,
                                            price:Number(l.price),
                                            year:l.year
                                        })
                                        editFun(l.mid)


                                    }}>Edit</button>
                                </td>
                                <td>
                                    <button id="delete" onClick={
                                        ()=>{
                                            delfun(l.mid)
                                        }
                                    }>Delete</button>
                                </td>
                                
                            </tr>
                            </>
                        })
                    }
            </tbody>
        </table>
        </>
    )


}
export default Table