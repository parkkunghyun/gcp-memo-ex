import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !content) {
            alert("아직 작성 안한 부분이 있어요!");
            return;
        }
        try {
            setIsLoading(true);
            const response = await fetch('http://35.226.29.237:5000/notes', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    title,
                    content,
                })
            })
            if (response.ok) {
                navigate("/");
            }

        } catch (e) {
            console.error(e.message);
        } finally {
            setIsLoading(true);
        }
    }
  return (
    <div className='mt-8 flex items-center justify-center  '>
          <form
              className='flex flex-col bg-yellow-200 w-[400px] h-[500px] rounded-xl shadow-lg'
              onSubmit={handleSubmit}>
              
              <input
                  value={title} onChange={e => setTitle(e.target.value)}
                  className='p-4 m-2 bg-transparent w-full focus:outline-none '
                  type="text" placeholder='제목을 입력해주세요' />
              <textarea
                  value={content} onChange={e => setContent(e.target.value)}
                  className='flex-1 p-4 m-2 bg-transparent w-full focus:outline-none '
                  placeholder='내용을 입력해주세요' />
              <button type="submit" className='focus:outline-none my-4 hover:scale-105 font-extrabold text-lg'>
                  {isLoading ? "등록중..." : "메모 추가하기"}
              </button>
        </form>
      </div>
  )
}

export default AddPage

// http://35.226.29.237:5000/notes
// {
//     "title": "test111",
//     "content": "test content1"
// }