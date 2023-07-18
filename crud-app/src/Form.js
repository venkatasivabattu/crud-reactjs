import { useEffect, useState } from 'react';
import {createPortal} from 'react-dom';


function Form({setOpenForm,formData,setFormData,postMobile,edit,setEdit,editMobile}){

    let [submit,setSubmit]=useState(false)
    let [btn,setBtn]=useState('Add Mobile');

    useEffect(()=>{
        if(edit===true){
            setBtn('Edit Mobile')
        }

    },[])


    function formSetter(e){
        setFormData({...formData,[e.name]:e.value});
       
    }
    function submitForm(){
        
        if(formData.name===''){
            alert("please enter valid name");
        }
        else if(formData.price==='' || formData.price===null){
            alert("enter valid price")
        }
        else if(formData.year==='' || formData.year===null){
            alert("enter valid launch year")
        }
        else{
            
            setOpenForm(false)
            setSubmit(true)
            setBtn('Add Mobile')
            if(edit){
                editMobile()
            }
            else{
                postMobile()
            }

        }
    
    }
    

    return (
        
        createPortal(<>
        <div className='form-overlay'>
            <form>
                <input type="text" placeholder='Enter Mobile Name' value={formData.name} name="name" onChange={(e)=>{
                    formSetter(e.target)
                }}/>
                {(formData.name==='' && submit ) && <span id="warn">Enter Valid Mobile Name</span>}


                <input type="number" placeholder='Enter Price' name="price" value={formData.price} onChange={(e)=>{
                    formSetter(e.target)
                }}/>
                {((formData.price===null || formData.price === '')&& submit) && <span id="warn">Enter Valid Price</span>}



                <input type="year" placeholder='Enter Launch Year' name="year" value={formData.year} onChange={(e)=>{
                    formSetter(e.target)
                }}/>
                {((formData.year===null || formData.year==='') && submit ) && <span id="warn">Enter Valid Launch Year</span>}


                <div className='buttons'>
                    <button id="cancel" onClick={
                        (e)=>{
                            e.preventDefault();
                            setOpenForm(false)
                            setFormData({
                                name:'',
                                price:null,
                                year:null
                            })
                            setBtn('Add Mobile')
                            setEdit(false)
                        }
                    }>Cancel</button>

                    <button id="submit" onClick={
                        (e)=>{
                            e.preventDefault();
                            submitForm();
                            setSubmit(true);

                        }
                    }>{btn}</button>
                </div>
            </form>
        </div>
        </>,document.body)
    )
    
    
}
export default Form