import React from 'react'
import Trash from "../images/delete.png";
import Edit from "../images/edit.png";

const Card = ({ card, deleteId }) => {
    
    const handleDelete = async (id) => {
        try {
            await fetch(`http://35.226.29.237:5000/notes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({
                    id
                })
            });
            deleteId(id);
        } catch (e) {
            console.error(e.message);
       }
    }
    
  return (
    <div className=" flex flex-col items-center w-[250px] bg-yellow-200 rounded-xl m-2 p-2 h-[250px] shadow-lg">
          <div className='flex border-b-4 p-2 w-full justify-around items-center mb-4'>
            <h1 className="flex-1 text-center font-bold text-blue-400 text-xl  border-gray-400">
                {card.title}
            </h1>
              <div className='flex items-center gap-4'>
                <img onClick={()=>handleDelete(card.id)} className='w-8 hover:scale-105' src={Trash} alt="" />
                <img className='w-8 hover:scale-105' src={Edit} alt="" />
              </div>
        </div>
          
          <p className="flex-1 text-gray-500 overflow-auto">{card.content}</p>
          <p className='text-sm text-gray-400 mb-2'>작성날짜: {card.updated_at}</p>
  </div>
  
  )
}

export default Card

// {
//     "content": "test content1",
//     "created_at": "Fri, 22 Nov 2024 06:57:56 GMT",
//     "id": 1,
//     "title": "test111",
//     "updated_at": "Fri, 22 Nov 2024 06:58:22 GMT"
// }

// # 3. 노트 수정 API (PUT)
// @app.route('/notes/<int:id>', methods=['PUT'])
// def update_note(id):
//     data = request.get_json()
//     title = data.get('title')
//     content = data.get('content')

//     conn = get_db_connection()
//     cursor = conn.cursor()
//     cursor.execute(
//         'UPDATE notes SET title = %s, content = %s, updated_at = %s WHERE id = %s',
//         (title, content, datetime.now(), id)
//     )
//     conn.commit()  # 데이터베이스에 반영
//     cursor.close()
//     conn.close()
//     return jsonify({'message': 'Note updated successfully'}), 200