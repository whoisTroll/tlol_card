const TlolCard = ({tlolInfo:{totalBlackCount,black}, hashtags})=>{
    return (
        <>
            ํธ๋กคํ์:{totalBlackCount}
            <br/>
            {black?"O":"X"}
            <br/>
            {hashtags}
        </>
        
    )
}
export default TlolCard