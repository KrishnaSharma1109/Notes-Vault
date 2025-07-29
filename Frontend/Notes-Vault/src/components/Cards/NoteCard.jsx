import moment from 'moment';
import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md';

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-xl transition-all ease-in-out flex flex-col justify-between h-full">
      {/* Title + Date + Pin */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col">
          <h6 className="text-base font-semibold text-gray-800 break-words">{title}</h6>
          <span className="text-xs text-slate-500">{moment(date).format('Do MMM YYYY')}</span>
        </div>
        <MdOutlinePushPin
          className={`text-xl cursor-pointer hover:text-blue-600 ${
            isPinned ? 'text-blue-600' : 'text-slate-300'
          }`}
          onClick={onPinNote}
        />
      </div>

      {/* Content */}
      <p className="text-sm text-slate-700 mt-3 line-clamp-3">
        {content?.slice(0, 100)}
        {content?.length > 100 && '...'}
      </p>

      {/* Tags + Icons */}
      <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
        <div className="flex flex-wrap text-xs text-slate-500 gap-1">
          {tags.map((item) => (
            <span key={item} className="truncate max-w-[100px]">
              #{item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="text-xl text-slate-400 cursor-pointer hover:text-green-600 transition"
            onClick={onEdit}
          />
          <MdDelete
            className="text-xl text-slate-400 cursor-pointer hover:text-red-500 transition"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

// import moment from 'moment';
// import React from 'react'
// import { MdOutlinePushPin } from 'react-icons/md';
// import { MdCreate,MdDelete } from 'react-icons/md';

// const NoteCard = ({title,date,content,tags,isPinned,onEdit,onDelete,onPinNote}) => {
//   return (
//     <div className='border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
//       <div className='flex items-center justify-between'>
//         <div> 
//             <h6 className='text-sm font-medium'>{title}</h6>
//             <span className='text-xs text-slate-500'>{moment(date).format('Do MMM YYYY')}</span>
//         </div>
//         <MdOutlinePushPin className={`text-xl cursor-pointer hover:text-primary ${isPinned ? 'text-primary' : 'text-slate-300'}`} onClick={onPinNote}/>


//       </div>
//       <p className='text-xs text-slate-600 mt-2'>{content?.slice(0,60)}</p>
//      <div className='flex items-center justify-between mt-2'>
//   <div className='text-xs text-slate-500 flex gap-1'>
//     {tags.map((item) => (
//       <span key={item}>#{item}</span>
//     ))}
//   </div>
//   <div className='flex items-center gap-2'>
//     <MdCreate
//       className='text-xl text-slate-300 cursor-pointer hover:text-green-600'
//       onClick={onEdit}
//     />
//     <MdDelete
//       className='text-xl text-slate-300 cursor-pointer hover:text-red-500'
//       onClick={onDelete}
//     />
//   </div>
// </div>

//     </div>
//   )
// }

// export default NoteCard
