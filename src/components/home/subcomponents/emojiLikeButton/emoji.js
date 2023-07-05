import './emoji.css'

const likeEmoji = "assets/image/emoji/like.svg"
const loveEmoji = "assets/image/emoji/love.svg"
const shareLoveEmoji = "assets/image/emoji/share-love.svg"
const sadEmoji = "assets/image/emoji/sad.svg"
const hahaEmoji = "assets/image/emoji/haha.svg"
const wowEmoji = "assets/image/emoji/wow.svg"
const angryEmoji = "assets/image/emoji/angry.svg"

function Like ()
{
    return(
    <div className="new-feed-like-button-container">
        <img src={likeEmoji} alt="Thích"/>
        <span  className='like'>Thích</span>
    </div>
    )
    
}
function Love ()
{
    return(
    <div className="new-feed-like-button-container">
        <img src={loveEmoji} alt="Yêu Thích"/>
        <span  className='love'>Yêu Thích</span>
    </div>
    )
    
}
 function Haha()
{
    return(
        <div className="new-feed-like-button-container">
            <img  src={hahaEmoji} alt="Haha"/>
            <span className='haha'>Haha</span>
        </div>
    )
}

function Sad ()
{
    return(
<div className="new-feed-like-button-container">
        <img src={sadEmoji} alt="Buồn"/>
        <span className='sad'>Buồn</span>
    </div>
    )
    
}
function ShareLove ()
{
    return(
<div className="new-feed-like-button-container">
        <img src={shareLoveEmoji} alt="Thương thương"/>
        <span  className='share-love'>Thương thương</span>
    </div>
    )
    
}
function Angry ()
{
    return(
<div className="new-feed-like-button-container">
        <img src={angryEmoji} alt="Phẫn nộ"/>
        <span  className='angry'>Phẫn nộ</span>
    </div>
    )
    
}
function Wow ()
{
    return(
        <div className="new-feed-like-button-container">
        <img src={wowEmoji} alt="Wow"/>
        <span className='wow'>Wow</span>
    </div>
    )
}

const EmojiLikeButton = 
{
    like:Like(),
    love:Love(),
    haha:Haha(),
    wow:Wow(),
    angry:Angry(),
    shareLove:ShareLove(),
    sad:Sad()
}

export default EmojiLikeButton