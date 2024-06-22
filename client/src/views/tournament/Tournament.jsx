import BtnInscribe from "../../components/btn/BtnInscribe";
import style from "./Tournament.module.css"

const Tournament = () => {
    return (
        <div className={style.cont_tournament}>
        <h2 className={style.h2_tournament}>Lua dominance</h2>
        <BtnInscribe />
        </div>
    )
}

export default Tournament;