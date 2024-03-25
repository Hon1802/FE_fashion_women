import { useState, useEffect} from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { img1, img2, img3, img4, img5, img6 } from "../../assets/sessions";
const collection = [
    {
        img: img1,
        title: 'Đầm',
        number: '15 sản phẩm'
    },
    {
        img: img2,
        title: 'Vest - Blazer',
        number: '5 sản phẩm'
    },
    {
        img: img3,
        title: 'Đồ thể thao',
        number: '10 sản phẩm'
    },
    {
        img: img4,
        title: 'Đồ bơi',
        number: '10 sản phẩm'
    },
    {
        img: img5,
        title: 'Đồ ngủ',
        number: '5 sản phẩm'
    },
    {
        img: img6,
        title: 'Áo sơ mi',
        number: '5 sản phẩm'
    },
    {
        img: img2,
        title: 'image error',
        number: '0 sản phẩm'
    },
    {
        img: img3,
        title: 'image error',
        number: '0 sản phẩm'
    },
]

const SessionCollection = () => {
    const [clicked, setClicked] = useState(false);
    const [btnState, setBtnState] = useState(false);
    const combineDisplayedItems = (winsize) => {
        switch (true) {
            case window.innerWidth <= 1200:
                return 2;
            case window.innerWidth <= 1450:
                return 4;
            case window.innerWidth <= 1900:
                return 6;
            case window.innerWidth <= 2100:
                return 7;
            default:
                return 8;
        }
    };

    const [displayedItems, setDisplayedItems] = useState(combineDisplayedItems(window.innerWidth)); 
    // 
    
    // Array display
    const [displayedcollection, setDisplayedcollection] = useState(collection.slice(0, displayedItems));

    // is last item
    const [isLastItem, setIsLastItem] = useState(false);

    // is first item
    const [isFirstItem, setIsFirstItem] = useState(true);
    function clickMenuBtn() {
        if (!btnState) {
            setBtnState(true);
        }

        else if (btnState) {
            setBtnState(false);
        }
    }
    const updateDisplayedItems = () => {
        setDisplayedItems(combineDisplayedItems(window.innerWidth))
        updateState(0, displayedItems)
        setIsFirstItem(true);
        setIsLastItem(false);  
        console.log(window.innerWidth)
        setClicked(!clicked);
    };

    useEffect(()=>{
        // Lắng nghe sự kiện thay đổi kích thước màn hình
        window.addEventListener('resize', updateDisplayedItems);

        document.addEventListener('click', handleButtonClick);

        // Hủy lắng nghe khi component bị unmount
        return () => window.removeEventListener('resize', updateDisplayedItems);
    },[clicked])
    
    const handleButtonClick =()=> {
        const displayedcollectionLength = displayedcollection.length;
        const collectionLength = collection.length;
        setIsFirstItem(displayedcollection[0] === collection[0]);
        setIsLastItem(displayedcollection[displayedcollectionLength - 1] === collection[collectionLength-1]);      
    }

    const updateState = (displayedcollectionlength, collectionlength) =>{
        setDisplayedcollection(collection.slice(displayedcollectionlength, collectionlength));
        return displayedcollection;
    }
    const handleShowRemainingItemsPrev = () => {
        const displayedcollectionLength = combineDisplayedItems(window.innerWidth);
        const collectionLength = collection.length;
        let numberPrev = displayedcollectionLength;
        let numberNext = collectionLength;
        
        numberPrev = collection.indexOf(displayedcollection[0]);
        if((numberPrev - displayedcollectionLength ) > 0 )
        {
            numberNext = numberPrev;
            numberPrev = numberNext - displayedcollectionLength ;
        } else{
            numberNext = displayedcollectionLength;
            numberPrev = 0;
        }
        
        updateState(numberPrev, numberNext)
        setClicked(!clicked);
    };
    const handleShowRemainingItemsNext = () => {
        const displayedcollectionLength = displayedcollection.length;
        const collectionLength = collection.length;
        let numberPrev = displayedcollectionLength;
        let numberNext = collectionLength;
        numberPrev = collection.indexOf(displayedcollection[displayedcollectionLength - 1]) + 1;
        if((displayedcollectionLength + numberPrev) > collectionLength)
        {
            numberPrev = collectionLength -displayedcollectionLength ;
            numberNext = collectionLength;
        } else{

            numberNext = displayedcollectionLength + numberPrev;
        }
        updateState(numberPrev, numberNext)
        setClicked(!clicked);
    };

    return (
        <>
            <div id="container-session" className="container-session">
                <h2 className="title">Thời trang EGA</h2>
                <div className="session-body">
                    {displayedcollection.map((coll, index) => (
                        <div className="session-item" key={index}>
                            <div className="session-image">
                                <img src={coll.img}></img>
                            </div>
                            <div className="session-title">
                                <h2>{coll.title}</h2>
                            </div>
                            <span>{coll.number}</span>
                        </div>
                    ))}
                </div>
                <div className='navigation-arrows '>
                    <button id='btn-prev' className={isFirstItem ? 'disable-button' : ''} disabled={isFirstItem} onClick={handleShowRemainingItemsPrev}><ArrowBackIosNewIcon sx={{ fontSize: 18 }}/></button>
                    <button id='btn-next' className={isLastItem ? 'disable-button' : ''} disabled={isLastItem} onClick={handleShowRemainingItemsNext}><ArrowForwardIosIcon sx={{ fontSize: 18 }}/></button>
                </div>
            </div>
        </>
    );
};

export default SessionCollection;
