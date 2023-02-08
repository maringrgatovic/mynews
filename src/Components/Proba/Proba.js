import './Proba.css';

const Proba = () => {
    let arr = [];
    for(let i = 0; i < 100; i++) {
        arr[i] = i;
    }

    return(
        <div className='container'>
            {arr.map((element,index) => {
                let returnValue = 
                    index === 2 ? 
                        <div className='cube special'></div>
                        :
                        <div className="cube"></div>
                return(returnValue);
            })}
        </div>
    );        
}

export default Proba;