import './App.css';
import { useEffect, useState } from 'react';
import { getMobiles ,delMobile,postMobile,updateMobile} from './api';
import Table from './Table';
import Form from './Form';




function App(){

  let [products,setProducts]=useState();
  let [openForm,setOpenForm]=useState(false);
  let [formData,setFormData]=useState({
    name:'',
    price:null,
    year:null
  })
  
  let [edit,setEdit]=useState(false);
  let [id,setId]=useState(null);

  useEffect(()=>{

    return getMobilesFun
  },[]);


  async function getMobilesFun(){
    const res=await getMobiles();
    console.log(res.data.result)
    setProducts(res.data.result)
  }


  async function delMobileFun(id){
    const res=await delMobile(id);
    if(res.data.delete){
      getMobilesFun()
    }
    else{
      alert("cant delete");
    }

  }

  async function postMobileFun(){
    if(!edit){
      const res=await postMobile(formData);
      if(res.data.submit){
        alert("succesfully added")
        setFormData({
          name:'',
          price:null,
          year:null
        })
        getMobilesFun()
      }
      else{
        alert("cant insert")
      }
    }
    

  }
  async function editMobileFun(){
    setEdit(false)
    const res=await updateMobile(formData,id);
    setId(null)
      if(res.data.submit){
        alert("succesfully updated")
        setFormData({
          name:'',
          price:null,
          year:null
        })
        getMobilesFun()
      }
      else{
        alert("cant update")
      }

  }

  function openFormFun(){
    setOpenForm(!openForm);
  }
  function editFun(id){
    setId(id);
   
    setEdit(true);
    openFormFun()

  }



  return (<>
  <div className="app">
    <div className="div">
      <h2>Mobile Store Management </h2>
      <button id="add"
      onClick={()=>{
        return openFormFun()


      }}
      ><i class="fa fa-plus-square" aria-hidden="true"></i> Add Mobile</button>
      <div className="data">
       {!products && <h1>Loading</h1>}
       {!!products && <Table data={products} delfun={delMobileFun} setFormData={setFormData} editFun={editFun}/>}
       
      </div>
    </div>
    {!!openForm && <Form setOpenForm={setOpenForm} formData={formData} setFormData={setFormData} postMobile={postMobileFun} edit={edit} setEdit={setEdit} editMobile={editMobileFun}/> }
  </div>
  
  </>)
}
export default App;