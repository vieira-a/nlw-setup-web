import { generateDaysFromYearBeginning } from "../utils/generateDaysFromYearBeginning"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDaysFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  return (
    <div className=" w-full flex" >
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => {
          return (
            <div key={`${weekDay}-${index}`} className="text-zinc-400 text-lg font-bold h-10 w-10 flex items-center justify-center">
              {weekDay}
            </div>
          )})}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((day) => {
          return (
            <HabitDay key={day.toString()} />
          )
        })}

        {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, index)=>{
          return (
            <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed">      
            </div> 
          )
        })}
        
      </div>
    </div>
  )
}