
import "./buttonsStyle.scss"
let Next = "Next >"
let Previus = "< Previus"

export const Buttons: React.FC = () => {

    return (
        <div className="container-buttons" >
            <button className="item-button" >
                {Previus}
            </button>
            <h2>Pointers</h2>
            <button className="item-button" >
                {Next}
            </button>
        </div>
    )
}