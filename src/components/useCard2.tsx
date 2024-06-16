import { useState } from 'react'
import Card from './Card'

const UseCard2 = () => {
    const [price1, setPrice1] = useState("0.00")
    const [title1, setTitle1] = useState("Digite um Produto")
    const [desc1, setDesc1] = useState("Digite uma descrição")
    const [imgUrl, setImgUrl] = useState("https://yata.s3-object.locaweb.com.br/b1da36362690140b82f2615336181d34f58abf5a5fadf78cb182f5aafb43242e")

    return (
        <div className='container mt-2 d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-center'>Card com Props</h2>

            <div className="row w-75 mb-3 text-dark">
                <div className="col">   
                    <input type="text" className='form-control' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                </div> 
            </div> <br />
            <div className="row w-75 mb-3 text-dark">
                <div className="col">
                    <input type="text" className='form-control' value={title1} onChange={(e) => setTitle1(e.target.value)} />
                </div>
                <div className="col">
                    <input type="text" className='form-control' value={desc1} onChange={(e) => setDesc1(e.target.value)} />
                </div>
                <div className="col">
                    <input type="number" className='form-control' value={price1} onChange={(e) => setPrice1(e.target.value)} />
                </div>
                
                <div className="container d-flex justify-content-center align-items-center gap-2 flex-wrap mt-4">
                    <Card img='https://yata.s3-object.locaweb.com.br/b1da36362690140b82f2615336181d34f58abf5a5fadf78cb182f5aafb43242e' title='Produto 1' desc='Desc 1' price="50.00" />
                    <Card img={imgUrl} title={title1} desc={desc1} price={price1} />
                </div>
            </div>
        </div>
    )
}

export default UseCard2
