import { useDispatch } from "react-redux";
import { setChoice } from "../actions/actions-types";
import { useSelector } from "react-redux"
import BoutonStyle from "../styles/Bouton"

const Calculator = () => {
    
    const { questions, responses } = useSelector((state) => state)

    return (
        <>
            <BoutonStyle />
            <div className="calculatrice">
                <input type="text" value="0" />
                <div className="controls">
                    <div className="btn">1</div>
                    <div className="btn">2</div>
                    <div className="btn">3</div>
                    <div className="btn">+</div>
                    <div className="btn">4</div>
                    <div className="btn">5</div>
                    <div className="btn">6</div>
                    <div className="btn">-</div>
                    <div className="btn">7</div>
                    <div className="btn">8</div>
                    <div className="btn">9</div>
                    <div className="btn">x</div>
                </div>
            </div>
        </>
    )
}

export default Calculator
