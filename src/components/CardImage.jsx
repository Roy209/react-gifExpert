

export const CardImage = ({img,title}) => {
  return (
    <div className="cardImage">
        <img src={ img } alt="" className="cardImage__text" />
        <p className="cardImage__text"> { title } </p>
    </div>
  )
}
