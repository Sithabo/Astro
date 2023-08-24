import './App.css';
import styles from './data.module.css'
import 'boxicons';
import { useEffect, useState } from 'react'; 

export default function Data() {
    
    const [data, setData] = useState({});

    const api_key ='ptRf5W3lrpVgJyq3I8hAWyLWaj92Xcwtm0drFyXu';
    const url = 'https://api.nasa.gov/planetary/apod';
    const query = `?api_key=${api_key}`;

    useEffect(()=>{
        fetch(`${url}${query}`, {cache: 'no-cache'})
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
            else{
            throw new Error('Request failed!')
            }
            }, 
            networkError=>{
            console.log(networkError.message)
            })
        .then((result)=>{
            setData(result)
            console.log(data)
            })
        }, []
    )
        const padding = {
            paddingTop: 10
        }
    return (
        <main>
            <div className={styles.container}>
                <div className={"container-card"}></div>
                <div className="container-card"></div>
                <div className="container-card"></div>
            </div>
            <div>
                <div className={styles.large}>
                    <div>
                        <h2>Astro Picture of the Day</h2>
                        <h3>Title: {data.title}</h3>
                        <span>{`Date Posted: ${data.date}`}</span>
                    </div>
                    <div style={{ paddingTop: '10px'}}>
                        <a href={data.hdurl}><img src={data.url} alt='image from far far away :)'></img></a>
                        <p>{data.explanation}</p>
                    </div>
                        <aside style={{color: 'hsl(0deg 4% 55% / 70%)'}}>{ '©' + data.copyright}</aside> 
                </div>
            </div>
        </main>
    )
}

/*
        Data Components
        copyright: '\nJose Pedrero\n', 
        date: '2023-08-23', 
        explanation: 'It came from outer space. It -- in this case a san…romeda galaxy (M31) is, again, much further away.', 
        hdurl: 'https://apod.nasa.gov/apod/image/2308/M31Perseid_Pedrero_3232.jpg', 
        media_type: 'image', …}
        service_version:"v1"
        title:"The Meteor and the Galaxy"
        url:"https://apod.nasa.gov/apod/image/2308/M31Perseid_Pedrero_1080.jpg"
*/