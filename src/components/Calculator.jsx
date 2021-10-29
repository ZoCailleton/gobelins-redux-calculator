import { useDispatch, useSelector } from "react-redux";
import { addNumber, addOperator, getResult } from "../actions/actions-types";

import BoutonStyle from "../styles/Bouton"

const Calculator = () => {

    const dispatch = useDispatch();
    const { screen } = useSelector((state) => state);

    return (
        <>
            <BoutonStyle />
            <div className="calculatrice">
                <input type="text" value={screen} />
                <div className="controls">

                    <button className="btn" onClick={e => dispatch(addNumber({ value: 1 }))}>1</button>
                    <button className="btn" onClick={e => dispatch(addNumber({ value: 2 }))}>2</button>
                    <button className="btn" onClick={e => dispatch(addNumber({ value: 3 }))}>3</button>
                    <button className="btn" onClick={e => dispatch(addNumber({ value: 4 }))}>4</button>
                    <button className="btn" onClick={e => dispatch(addNumber({ value: 5 }))}>5</button>
                    <button className="btn" onClick={e => dispatch(addNumber({ value: 6 }))}>6</button>
                    <button className="btn" onClick={e => dispatch(addNumber({ value: 7 }))}>7</button>
                    <button className="btn" onClick={e => dispatch(addNumber({ value: 8 }))}>8</button>
                    <button className="btn" onClick={e => dispatch(addNumber({ value: 9 }))}>9</button>

                    <button className="btn" onClick={(e) => dispatch(addOperator({ operator: e.target.value }))} value="+">+</button>
                    <button className="btn" onClick={(e) => dispatch(addOperator({ operator: e.target.value }))} value="-">-</button>
                    <button className="btn" onClick={(e) => dispatch(addOperator({ operator: e.target.value }))} value="*">x</button>

                    <button className="btn result" onClick={(e) => dispatch(getResult())}>=</button>

                </div>
            </div>
        </>
    )
}

export default Calculator
