import type { IStatsProps } from "./stats.model"

const Stats =({all, done, todo}: IStatsProps) => {
    return(
        <div className="stats">
            
            Всего: {all} | Активных: {todo} | Завершено: {done}
        </div>
    )
}
export default Stats