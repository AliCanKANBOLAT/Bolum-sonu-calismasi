import { useState } from 'react'

function App() {
  const pictureIDs = [100,280,202,203,231]
  const [imageId, setImageId] = useState(pictureIDs[0])

  const GetLoremPicsumImage = (id, width=800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`


    function handleClick (id) {
      setImageId(id)
    }

  return (
    <main className='container'>
      <hgroup>
  <h2>Mini Gorsel Uygulamasi V1</h2>
  <h3>Gorsel</h3>
</hgroup>
      <img src={GetLoremPicsumImage(imageId)} alt="" style={{width:"100%"}} />
      <div className="grid" style= {{marginTop:"30px"}}>
    {
      pictureIDs.map((item,index) => <div key={index}>
        <img onClick={() => handleClick(item)} src={GetLoremPicsumImage(item,100,100)} alt="" />
         </div> )
    }
      </div>
      </main>
  )
}

export default App
