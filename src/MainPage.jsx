import React, { useEffect, useState } from 'react'
import Card from './components/Card';

const url = "http://35.226.29.237:5000/notes";

const MainPage = () => {
    const [cardList, setCardList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const responseMemoList = async () => {

            try {
                setIsLoading(true);
                const response = await fetch(url, {method: 'GET'});
                const data = await response.json();
                if (response.ok && data.length > 0) {
                    setCardList(data)
                }
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        }

        responseMemoList();
    }, []);

    const handleDeleteList = (id) => {
        setCardList((prevCards) => prevCards.filter((card) => card.id !== id));
    }
  
    return (
      <div className='m-8'>
            {
                isLoading ? (
                    <div className='mt-24 flex items-center justify-center'>
                        <h1
                        className="text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                            메모들을 로딩 중입니다....
                    </h1>

                    </div>
                    
                ): (
                    <div className=' grid h-screen grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            cardList.map((memo) => (
                                <Card key={memo.id} deleteId={handleDeleteList} card={memo} />
                        ))
                    }
                    </div>
                )
          }
      </div>
  )
}

export default MainPage