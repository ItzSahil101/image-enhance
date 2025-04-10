import {React} from 'react'

const ImageUpload = (props) => {

  const showImageHandler = (evt)=>{
    let file = evt.target.files[0];
    if(file){
      props.UploadImageHandler(file)
    }
  }

  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
      <label htmlFor='fileInput' className='block p-6 text-center hover:border-blue-500 transition-all w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg'>
        <input type='file' id='fileInput' className='hidden' onChange={showImageHandler}/>
        <span className='text-lg font-medium text-gray-600'>Click & Drag to upload your image</span>
      </label>
    </div>
  )
}

export default ImageUpload