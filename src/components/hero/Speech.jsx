import {TypeAnimation} from "react-type-animation"

const Speech = () => {
    return(
        <div className="bubbleContainer">
            <div className="bubble">  
                <TypeAnimation
                sequence={[
                    'Same substring at the start will only be typed out once, initially',
                    1000, 
                    'cbhdc dhcjdhbc dhjcvdhsc hdcjhdbc hdcbhdj',
                    1000,

                ]}
      wrapper="span"
      speed={50}
      deletionSpeed={60}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></div>
        </div>
    )
}

export default Speech 