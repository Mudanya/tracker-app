import Categories from "../Category"

type Props = {
    onSelectedcategory:(category:string) => void
}
const ExpenseFilter = ({onSelectedcategory}:Props) => {
  return (
    <select  className="form-select" onChange={(e)=>onSelectedcategory(e.target.value)}>
        <option value="">All Categories</option>
        {
            Categories.map(category => <option key={category} value={category}>{category}</option>)
        }
        
    </select>
  )
}

export default ExpenseFilter