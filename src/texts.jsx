
import Button from './button.jsx'

function Texts(promps) {
    return(
        <div className="text">
            <div className="image">
            <img src={promps.Image} alt="" srcset="" />
            <Button 
            text="color" 
           
            />

            </div>
            <div className="texts">
            <h1>{promps.number}</h1>
            <h2>{promps.head}</h2>
            <p>{promps.para}</p>
            <Button text="readmore"
             link={promps.links}/>
            </div>

        </div>
    )
    
}
export default Texts