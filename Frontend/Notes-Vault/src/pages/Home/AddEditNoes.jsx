
import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'
import { MdClose } from 'react-icons/md';
import axiosInstance from '../../utils/axiosInstance';

const AddEditNoes = ({noteData,type,getAllNotes,onClose,showToastMessage}) => {

    const[title,setTitle]=useState(noteData?.title ||"");
    const[content,setContent]=useState(noteData?.content ||'');
    const[tags,setTags]=useState(noteData?.tags ||[]);
    const [error,setError]=useState(null);

    const addNewNote=async()=>{
      try {
        const response= await axiosInstance.post("/add-note",{title,content,tags});
        if(response.data && response.data.note){
          showToastMessage("Note Added Successfully")
          getAllNotes()
          onClose()
        }
      } catch (error) {
        if(error.response && error.response.data && error.response.data.message){
          setError(error.message.data.message);
        }
      }
    };

    const editNote=async()=>{
      const noteId=noteData._id;
       try {
        const response= await axiosInstance.put("/edit-note/"+noteId,{title,content,tags});
        if(response.data && response.data.note){
          showToastMessage("Note Updated Successfully")
          getAllNotes()
          onClose()
        }
      } catch (error) {
        if(error.response && error.response.data && error.response.data.message){
          setError(error.message.data.message);
        }
      }
    };

    const handleAddNote=()=>{
        if(!title)
        {
            setError("Please enter the title");
            return;
        }
        if(!content)
        {
            setError("Please enter the content");
            return;
        }
        setError("");
        if(type==='edit')
        {
            editNote();
        }
        else{
            addNewNote();
        }
    };

  return (
    <div className='relative'>
        <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50' onClick={onClose}>
            <MdClose className='text-xl text-slate-400'/>
        </button>

        <div className='flex fex-col gap-2'>
          <label className='text-sm text-slate-600'>Title</label>
          <input
          type='text'
          className='text-xs text-slate-950 outline-none'
          placeholder='Write your title here.'
          value={title}
          onChange={({target})=>setTitle(target.value)}
          />
        </div>

        <div className='flex flex-col gap-2 mt-4'>
          <label className='text-sm text-slate-600' > Content</label>
          <textarea 
          type='text'
          className='text-xs text-slate-950 outline-none bg-slate-50 p-2 rounded'
          placeholder='Try to write something'
          rows={10}
          value={content}
          onChange={({target})=>setContent(target.value)}
          />
        </div>

        <div className='mt-3'>
            <label className='text-xs text-slate-400'>TAGS</label>
            <TagInput tags={tags} setTags={setTags}/>
        </div>

        {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}
        <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>{type==='edit'?'UPDATE':'ADD'}</button>
    </div>
  )
}

export default AddEditNoes


// import React, { useState } from 'react'
// import TagInput from '../../components/Input/TagInput'
// import { MdClose } from 'react-icons/md';
// import axiosInstance from '../../utils/axiosInstance';

// const AddEditNoes = ({noteData,type,getAllNotes,onClose,showToastMessage}) => {

//     const[title,setTitle]=useState(noteData?.title ||"");
//     const[content,setContent]=useState(noteData?.content ||'');
//     const[tags,setTags]=useState(noteData?.tags ||[]);
//     const [error,setError]=useState(null);

//     const addNewNote=async()=>{
//       try {
//         const response= await axiosInstance.post("/add-note",{title,content,tags});
//         if(response.data && response.data.note){
//           showToastMessage("Note Added Successfully")
//           getAllNotes()
//           onClose()
//         }
//       } catch (error) {
//         if(error.response && error.response.data && error.response.data.message){
//           setError(error.message.data.message);
//         }
//       }

//     };

//     const editNote=async()=>{
//       const noteId=noteData._id;
//        try {
//         const response= await axiosInstance.put("/edit-note/"+noteId,{title,content,tags});
//         if(response.data && response.data.note){
//           showToastMessage("Note Updated Successfully")
//           getAllNotes()
//           onClose()
//         }
//       } catch (error) {
//         if(error.response && error.response.data && error.response.data.message){
//           setError(error.message.data.message);
//         }
//       }
//     };


//     const handleAddNote=()=>{
//         if(!title)
//         {
//             setError("Please enter the title");
//             return;
//         }
//         if(!content)
//         {
//             setError("Please enter the content");
//             return;
//         }
//         setError("");
//         if(type==='edit')
//         {
//             editNote();
//         }
//         else{
//             addNewNote();
//         }
//     };


//   return (
//     <div className='relative'>
//         <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50' onClick={onClose}>
//             <MdClose className='text-xl text-slate-400'/>
//         </button>


//       <div className='flex fex-col gap-2'>
//         <label className='text-sm text-slate-600'>Tittle</label>
//         <input
//         type='text'
//         className='text-xs text-slate-950 outline-none'
//         placeholder='Write your title here.'
//         value={title}
//         onChange={({target})=>setTitle(target.value)}
//         />
//       </div>

//       <div className='flex flex-col gap-2 mt-4'>
//         <label className='text-sm text-slate-600' > Content</label>
//         <textarea 
//         type='text'
//         className='text-xs text-slate-950 outline-none bg-slate-50 p-2 rounded'
//         placeholder='Try to write something'
//         rows={10}
//         value={content}
//         onChange={({target})=>setContent(target.value)}
//         />
//       </div>

//         <div className='mt-3'>
//             <label className='text-xs text-slate-400'>TAGS</label>
//             <TagInput tags={tags} setTags={setTags}/>

//         </div>

//         {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}
//         <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>{type==='edit'?'UPDATE':'ADD'}</button>

//     </div>
//   )
// }

// export default AddEditNoes